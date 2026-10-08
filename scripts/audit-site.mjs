import assert from 'node:assert/strict';
import { articles, categories } from '../lib/content.js';
import { siteUrl } from '../lib/seo.js';

// Check the production build over HTTP, locally or at the existing deployment.
const origin = process.argv[2] || 'http://localhost:3000';
const paths = ['/', '/picks', '/about', '/contact', '/privacy', '/terms', '/disclosure',
  ...categories.map(c => '/category/' + c.slug), ...articles.map(a => '/article/' + a.slug)];
const assets = new Set(['/icon.svg', '/opengraph-image']);
const hrefs = new Set();
const titles = new Set();
const descriptions = new Set();
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value.replaceAll('&amp;', '&').replaceAll('&quot;', '"')]));
}
async function request(path, options = {}) {
  return fetch(new URL(path, origin), { signal: AbortSignal.timeout(30000), ...options });
}
for (const path of paths) {
  const response = await request(path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), 'Missing or duplicate title: ' + path);
  titles.add(title);
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
  const description = meta.find(m => m.name === 'description')?.content;
  assert.ok(description && !descriptions.has(description), 'Missing or duplicate description: ' + path);
  descriptions.add(description);
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag)).find(a => a.rel === 'canonical');
  assert.equal(new URL(canonical?.href).href, new URL(siteUrl + path).href, 'Canonical: ' + path);
  assert.equal(new URL(meta.find(m => m.property === 'og:url')?.content).href, new URL(siteUrl + path).href);
  assert.equal(meta.find(m => m.name === 'twitter:card')?.content, 'summary_large_image');
  assert.ok(meta.find(m => m.name === 'author')?.content === 'Nuvora Finds');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, 'One h1: ' + path);
  assert.ok(!/lorem ipsum|href="#"/i.test(html), 'Placeholder: ' + path);
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
  for (const [tag] of html.matchAll(/<a\b[^>]*>/g)) {
    const href = attributes(tag).href;
    assert.ok(href, 'Empty link: ' + path);
    if (href.startsWith('#')) assert.ok(ids.has(href.slice(1)), 'Broken fragment: ' + href);
    else if (href.startsWith('/')) hrefs.add(href.split('#')[0]);
    assert.ok(!/amazon\.com/i.test(href), 'Amazon links must remain inactive');
  }
  for (const [tag] of html.matchAll(/<(?:script|img|link)\b[^>]*>/g)) {
    const a = attributes(tag);
    if (a.src?.startsWith('/')) assets.add(a.src);
    if (a.rel === 'stylesheet' && a.href?.startsWith('/')) assets.add(a.href);
  }
  const image = meta.find(m => m.property === 'og:image')?.content;
  assert.ok(image, 'Missing OG image: ' + path);
  assets.add(new URL(image).pathname);
  if (path.startsWith('/article/')) {
    const article = articles.find(a => path.endsWith(a.slug));
    assert.equal(new URL(image).pathname, path + '/share');
    assert.ok(meta.some(m => m.name === 'twitter:image' && m.content.endsWith(path + '/share')));
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
    const schema = schemas.find(s => s['@type'] === 'Article');
    assert.equal(schema?.headline, article.title);
    assert.equal(schema?.dateModified, article.updatedAt);
    assert.equal(schema?.author.name, 'Nuvora Finds');
    assert.ok(schemas.some(s => s['@type'] === 'BreadcrumbList' && s.itemListElement.length === 3));
  }
}
for (const path of hrefs) assert.equal((await request(path)).status, 200, 'Broken internal link: ' + path);
for (const path of assets) {
  const response = await request(path);
  assert.equal(response.status, 200, 'Broken asset: ' + path);
  if (path.endsWith('/share') || path === '/opengraph-image') {
    assert.ok(response.headers.get('content-type')?.includes('image/png'));
    const bytes = Buffer.from(await response.arrayBuffer());
    assert.equal(bytes.readUInt32BE(16), 1200);
    assert.equal(bytes.readUInt32BE(20), 630);
  }
}
const sitemap = await (await request('/sitemap.xml')).text();
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).href);
for (const path of paths) assert.ok(sitemapUrls.includes(new URL(siteUrl + path).href), 'Sitemap omission: ' + path);
const robots = await (await request('/robots.txt')).text();
assert.ok(robots.includes('Allow: /') && robots.includes(siteUrl + '/sitemap.xml'));
for (const c of categories) {
  const response = await request('/' + c.slug, { redirect: 'manual' });
  assert.equal(response.status, 308);
  assert.ok(response.headers.get('location')?.endsWith('/category/' + c.slug));
}
assert.equal((await request('/article/not-a-real-guide')).status, 404);
assert.equal((await request('/category/not-a-real-category')).status, 404);
console.log(JSON.stringify({ origin, pages: paths.length, articles: articles.length, internalLinks: hrefs.size,
  assets: assets.size, metadata: 'pass', sitemap: 'pass', robots: 'pass', redirects: 'pass', notFound: 'pass', amazonLinks: 0 }, null, 2));

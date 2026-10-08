import test from 'node:test';
import assert from 'node:assert/strict';
import { articles, categories } from '../lib/content.js';
import { products } from '../lib/products.js';
test('Each preserved guide is substantial, distinct and assigned to a real category', () => {
  assert.equal(articles.length, 10);
  assert.equal(new Set(articles.map(a => a.slug)).size, articles.length);
  const paragraphs = [];
  for (const article of articles) {
    assert.ok(categories.some(c => c.slug === article.categorySlug));
    assert.ok(article.conclusion.length > 100);
    assert.ok(article.sections.length >= 7);
    const content = [article.intro, ...article.sections.flatMap(s => s.paragraphs || [s.body]), article.conclusion];
    assert.ok(content.join(' ').split(/\s+/).length >= 550, article.slug + ' is too short');
    paragraphs.push(...content);
    assert.ok(!content.some(p => /lorem ipsum/i.test(p)));
    assert.ok(article.updatedAt >= article.publishedAt);
  }
  assert.equal(new Set(paragraphs).size, paragraphs.length, 'No duplicate editorial paragraphs');
});
test('Existing product candidates are retained without publishing unverified recommendations', () => {
  assert.ok(products.length > 0, 'Preserve the existing catalog for verification');
  assert.ok(products.every(product => product.active === false));
});

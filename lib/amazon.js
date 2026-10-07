const validAsin = /^[A-Z0-9]{10}$/;
const validTag = /^[a-zA-Z0-9-]+-20$/;
export function amazonTagConfigured(tag = process.env.AMAZON_ASSOCIATE_TAG || '') {
  return validTag.test(tag.trim());
}
// No link is rendered unless the record, URL and central tag all pass validation.
export function buildAmazonUrl(product, tag = process.env.AMAZON_ASSOCIATE_TAG || '') {
  if (!product?.active || !product.name?.trim() || !product.reason?.trim() || !validAsin.test(product.asin || '') || !amazonTagConfigured(tag)) return null;
  try {
    const url = new URL(product.amazonUrl);
    if (url.protocol !== 'https:' || !['amazon.com', 'www.amazon.com'].includes(url.hostname) || url.username || url.password || url.port) return null;
    const match = url.pathname.match(/^\/(?:dp|gp\/product)\/([A-Z0-9]{10})\/?$/);
    if (!match || match[1] !== product.asin) return null;
    // Deliberately ignore existing tracking parameters and build one direct Amazon link.
    const direct = new URL('https://www.amazon.com/dp/' + product.asin);
    direct.searchParams.set('tag', tag.trim());
    return direct.toString();
  } catch { return null; }
}

import test from 'node:test';
import assert from 'node:assert/strict';
import { amazonTagConfigured, buildAmazonUrl } from '../lib/amazon.js';
import { products } from '../lib/products.js';
test('Missing, malformed and injected tracking tags stay inactive', () => {
  for (const tag of ['', ' ', 'not-a-tag', 'tag&redirect=evil-20', 'https://example.com']) assert.equal(amazonTagConfigured(tag), false);
});
test('Retained candidates cannot emit links even when a tag is configured', () => {
  for (const product of products) assert.equal(buildAmazonUrl(product, 'unit-test-only-20'), null);
});
test('Future links use only a direct matching Amazon listing and the central tag', () => {
  // Test-only activation of an existing record, never part of the published catalog.
  const product = { ...products[0], active: true };
  const tag = 'unit-test-only-20';
  assert.equal(buildAmazonUrl(product, tag), `https://www.amazon.com/dp/${product.asin}?tag=${tag}`);
  for (const amazonUrl of [
    `https://www.amazon.com.evil.example/dp/${product.asin}`,
    `http://www.amazon.com/dp/${product.asin}`,
    `https://user:password@www.amazon.com/dp/${product.asin}`,
    `https://www.amazon.com:444/dp/${product.asin}`,
    'https://www.amazon.com/dp/WRONGASIN0',
    `https://www.amazon.com/dp/${product.asin}/redirect`,
  ]) assert.equal(buildAmazonUrl({ ...product, amazonUrl }, tag), null, amazonUrl);
});
test('No link is emitted for missing or incomplete product records', () => {
  for (const record of [null, {}, { active: false }, { active: true, name: 'Incomplete record' }, { active: true, asin: 'INVALID', amazonUrl: 'https://example.com' }]) assert.equal(buildAmazonUrl(record), null);
});

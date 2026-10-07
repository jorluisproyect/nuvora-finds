import test from 'node:test';
import assert from 'node:assert/strict';
import { amazonTagConfigured, buildAmazonUrl } from '../lib/amazon.js';
test('Missing, malformed and injected tracking tags stay inactive', () => {
  for (const tag of ['', ' ', 'not-a-tag', 'tag&redirect=evil-20', 'https://example.com']) assert.equal(amazonTagConfigured(tag), false);
});
test('No link is emitted for missing or incomplete product records', () => {
  for (const record of [null, {}, { active: false }, { active: true, name: 'Incomplete record' }, { active: true, asin: 'INVALID', amazonUrl: 'https://example.com' }]) assert.equal(buildAmazonUrl(record), null);
});

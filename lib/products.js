/**
 * Add only verified real products. No ASIN, price or third-party image is supplied.
 * @typedef {Object} Product
 * @property {string} name
 * @property {string} asin - Verified ten-character Amazon ASIN
 * @property {string} amazonUrl - Verified https://www.amazon.com/dp/ASIN URL
 * @property {'home'|'kitchen'|'organization'|'small-spaces'} category
 * @property {string[]} articleSlugs
 * @property {boolean} active
 * @property {{src: string, alt: string, authorization: string}=} image - Only approved local assets, with documented rights
 * @property {string} reason - Editorial explanation, without unverified testing claims
 */
/** @type {Product[]} */
export const products = [];

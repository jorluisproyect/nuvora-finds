/**
 * Curated Amazon products. Keep entries limited to verified real listings.
 * Prices are intentionally omitted because Amazon prices and availability change.
 * @typedef {Object} Product
 * @property {string} name
 * @property {string} asin - Verified ten-character Amazon ASIN
 * @property {string} amazonUrl - Verified https://www.amazon.com/dp/ASIN URL
 * @property {'home'|'kitchen'|'organization'|'small-spaces'|'useful-finds'} category
 * @property {string[]} articleSlugs
 * @property {boolean} active
 * @property {{src: string, alt: string, authorization: string}=} image - Only approved local assets, with documented rights
 * @property {string} reason - Editorial explanation, without unverified testing claims
 */

/** @type {Product[]} */
export const products = [
  {
    name: 'Joseph Joseph DrawerStore Compact Utensil Organizer',
    asin: 'B072R6CLRC',
    amazonUrl: 'https://www.amazon.com/dp/B072R6CLRC',
    category: 'kitchen',
    articleSlugs: ['small-kitchen-organization-ideas', 'countertop-appliances-worth-space'],
    active: true,
    reason: 'A compact option worth considering when drawer width is limited and you want to keep everyday flatware contained without using a full-width tray.'
  },
  {
    name: 'SpaceAid Cabinet Shelf Organizer',
    asin: 'B0D25Z4K9T',
    amazonUrl: 'https://www.amazon.com/dp/B0D25Z4K9T',
    category: 'kitchen',
    articleSlugs: ['small-kitchen-organization-ideas', 'countertop-appliances-worth-space'],
    active: true,
    reason: 'Useful for creating a second level inside a cabinet when vertical space is available but stacking dishes or pantry items directly would be awkward.'
  },
  {
    name: 'Everie Extendable 3-Tier Kitchen Cabinet and Pantry Organizer',
    asin: 'B0D45S3TGJ',
    amazonUrl: 'https://www.amazon.com/dp/B0D45S3TGJ',
    category: 'kitchen',
    articleSlugs: ['pantry-that-stays-organized', 'small-kitchen-organization-ideas'],
    active: true,
    reason: 'A tiered organizer can make long boxes and pantry supplies easier to see without piling them on top of one another.'
  },
  {
    name: 'Mefirt 9-Tier Over-the-Door Pantry Organizer',
    asin: 'B0CL4P7F6Y',
    amazonUrl: 'https://www.amazon.com/dp/B0CL4P7F6Y',
    category: 'kitchen',
    articleSlugs: ['pantry-that-stays-organized'],
    active: true,
    reason: 'Worth considering when the back of a pantry door is genuinely unused and the added storage will not interfere with door clearance or everyday access.'
  },
  {
    name: 'Miyawell 3-Tier Rolling Pantry Cart',
    asin: 'B0FG816Z89',
    amazonUrl: 'https://www.amazon.com/dp/B0FG816Z89',
    category: 'kitchen',
    articleSlugs: ['pantry-that-stays-organized'],
    active: true,
    reason: 'A rolling cart can use low or narrow pantry space while keeping backstock movable and easier to reach.'
  },
  {
    name: 'Simple Houseware 3-Tier Slim Storage Cart',
    asin: 'B09YJ1S4RG',
    amazonUrl: 'https://www.amazon.com/dp/B09YJ1S4RG',
    category: 'organization',
    articleSlugs: ['bathroom-counter-clutter'],
    active: true,
    reason: 'A narrow rolling cart can move frequently used bathroom items off the counter while keeping them accessible in a small footprint.'
  },
  {
    name: 'REALINN 2-Tier Under-Sink Organizer',
    asin: 'B0CFQFMC4F',
    amazonUrl: 'https://www.amazon.com/dp/B0CFQFMC4F',
    category: 'organization',
    articleSlugs: ['under-sink-storage'],
    active: true,
    reason: 'The two-tier layout is designed for cabinet storage and may help use vertical space while leaving a clearer route around plumbing.'
  },
  {
    name: 'iDesign 14.5-Inch Lazy Susan Organizer',
    asin: 'B000S2IN0Y',
    amazonUrl: 'https://www.amazon.com/dp/B000S2IN0Y',
    category: 'organization',
    articleSlugs: ['under-sink-storage', 'bathroom-counter-clutter'],
    active: true,
    reason: 'A turntable can make bottles or toiletries at the back of a cabinet easier to reach without adding several stacked containers.'
  },
  {
    name: 'DINZI LVJ Shoe Storage Bench with Cushion',
    asin: 'B08RZBK8XD',
    amazonUrl: 'https://www.amazon.com/dp/B08RZBK8XD',
    category: 'small-spaces',
    articleSlugs: ['tiny-entryway-solutions'],
    active: true,
    reason: 'Combining shoe storage with a place to sit can make sense in a compact entryway when the bench dimensions still preserve a comfortable walkway.'
  },
  {
    name: 'UVIAHOMI Heavy-Duty Over-the-Door Organizer',
    asin: 'B0FZTPDJW6',
    amazonUrl: 'https://www.amazon.com/dp/B0FZTPDJW6',
    category: 'small-spaces',
    articleSlugs: ['renter-friendly-organization'],
    active: true,
    reason: 'An over-the-door organizer can add removable vertical storage in a rental without dedicating additional floor space.'
  },
  {
    name: 'Tututry Under-Bed Storage with Wheels',
    asin: 'B0DYVL5QCK',
    amazonUrl: 'https://www.amazon.com/dp/B0DYVL5QCK',
    category: 'home',
    articleSlugs: ['bedroom-reset-routine'],
    active: true,
    reason: 'Rolling under-bed storage is worth considering for seasonal or occasional items when the bed has enough clearance and the container remains easy to pull out.'
  },
  {
    name: 'SONGMICS Folding Storage Ottoman Bench',
    asin: 'B07JNFKYC3',
    amazonUrl: 'https://www.amazon.com/dp/B07JNFKYC3',
    category: 'home',
    articleSlugs: ['living-room-storage-without-bulk'],
    active: true,
    reason: 'A storage ottoman can combine seating or foot-rest use with concealed storage, reducing the need for a separate container in the living room.'
  },
  {
    name: 'SpaceAid Bamboo Drawer Dividers',
    asin: 'B094624Q8Z',
    amazonUrl: 'https://www.amazon.com/dp/B094624Q8Z',
    category: 'useful-finds',
    articleSlugs: ['useful-home-finds-under-30'],
    active: true,
    reason: 'Adjustable dividers are a flexible way to create zones inside an existing drawer without committing to a fixed tray layout.'
  },
  {
    name: 'Vtopmart Clear Drawer Organizers Set',
    asin: 'B08KXKVT4K',
    amazonUrl: 'https://www.amazon.com/dp/B08KXKVT4K',
    category: 'useful-finds',
    articleSlugs: ['useful-home-finds-under-30'],
    active: true,
    reason: 'Small clear trays can help contain mixed everyday items while keeping the contents visible and easy to rearrange.'
  }
];

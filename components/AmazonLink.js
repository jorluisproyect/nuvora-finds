'use client';
export default function AmazonLink({ href, productName, category, articleSlug }) {
  function recordClick() {
    if (navigator.doNotTrack === '1') return;
    // Prepared adapter for a future free collector. No paid custom events are sent.
    window.dispatchEvent(new CustomEvent('nuvora:amazon-click', { detail: { productName, category, articleSlug } }));
  }
  return <a className="button button-dark" href={href} rel="sponsored nofollow noopener noreferrer" target="_blank" data-category={category} data-article={articleSlug} onClick={recordClick}>View on Amazon<span className="sr-only">: {productName} (opens in a new tab)</span></a>;
}

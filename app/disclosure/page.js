import Link from 'next/link';
import { amazonTagConfigured } from '../../lib/amazon';
import { pageMetadata } from '../../lib/seo';
export const metadata = pageMetadata('Affiliate Disclosure', 'How Nuvora Finds discloses affiliate links and keeps recommendations clear and useful.', '/disclosure');

export default function DisclosurePage() {
  return (
    <section className="section prose-page">
      <span className="eyebrow">TRANSPARENCY</span>
      <h1>Affiliate Disclosure</h1>
      <p>Last updated: October 7, 2026.</p>
      <p className="lead">{amazonTagConfigured() ? 'As an Amazon Associate I earn from qualifying purchases.' : 'Nuvora Finds does not currently use affiliate links.'}</p>
      <p>In the future, some links may be affiliate links. If that happens, Nuvora Finds may earn a commission when a visitor makes a qualifying purchase after using one of those links, at no additional cost to the visitor.</p>
      <h2>How links will be disclosed</h2>
      <p>When Amazon recommendations are activated, we will place the statement “As an Amazon Associate I earn from qualifying purchases.” beside the recommendation section and in the site footer. Affiliate links will be identified before you click. Amazon does not sponsor or endorse our guides.</p>
      <h2>Our editorial decisions</h2>
      <p>We choose topics around practical household needs. A commission is not evidence that a product is better. We explain tradeoffs, encourage checking measurements and do not claim hands-on testing unless documented. No fabricated product prices, ratings or discounts appear here.</p>
      <h2>Your purchase</h2>
      <p>Using a future affiliate link will not add a fee to your purchase. The retailer controls pricing, availability and customer service. You can choose whether to follow a recommendation or shop independently.</p>
      <p>Read <Link href="/about">our editorial approach</Link> or <Link href="/contact">send feedback</Link>.</p>
    </section>
  );
}

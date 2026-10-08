import Link from 'next/link';
import { pageMetadata } from '../../lib/seo';
export const metadata = pageMetadata('Terms of Use', 'Terms for using Nuvora Finds editorial guides and third-party links.', '/terms');

export default function TermsPage() {
  return (
    <section className="section prose-page">
      <span className="eyebrow">LEGAL</span>
      <h1>Terms of Use</h1>
      <p>Last updated: October 8, 2026.</p>
      <h2>Editorial information</h2>
      <p>The information on Nuvora Finds is provided for general informational and inspiration purposes. Product suitability, dimensions, installation requirements and safety considerations should always be verified before purchase or use.</p>
      <h2>External links</h2>
      <p>The site links to third-party websites, including GitHub for feedback and Pinterest for saving guides. Future recommendations may also link to retailers. Nuvora Finds does not control third-party websites, availability, prices, policies or product claims.</p>
      <h2>Use of our content</h2>
      <p>You may read, save links to and share our guides for personal use. The original editorial text and site identity belong to Nuvora Finds. Do not republish substantial portions as your own work or imply our endorsement without permission.</p>
      <h2>Practical and safety limits</h2>
      <p>Homes and individual needs vary. Check measurements, weight limits, surface compatibility and manufacturer instructions before making changes. Seek an appropriate qualified professional for electrical, plumbing or structural work. Our guides do not replace individualized professional advice.</p>
      <h2>Purchases and recommendations</h2>
      <p>We do not sell the products discussed in our guides. Retailers set their own prices, availability, shipping and return policies. Recommendations are editorial options to consider, not guarantees of suitability or results. Affiliate relationships are described in our disclosure.</p>
      <h2>Changes</h2>
      <p>We may update the site, content and these terms as the project develops.</p>
      <p><Link href="/contact">Contact us about a correction</Link>, or read our <Link href="/privacy">Privacy Policy</Link> and <Link href="/disclosure">Affiliate Disclosure</Link>.</p>
    </section>
  );
}

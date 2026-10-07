import Link from 'next/link';
import { pageMetadata } from '../../lib/seo';
export const metadata = pageMetadata('About', 'Our editorial approach to useful home organization ideas and thoughtful recommendations.', '/about');

export default function AboutPage() {
  return (
    <section className="section prose-page">
      <span className="eyebrow">ABOUT NUVORA FINDS</span>
      <h1>Smart finds for everyday living.</h1>
      <p className="lead">Nuvora Finds is an independent editorial discovery brand focused on practical ideas for home, kitchen, organization and small-space living.</p>
      <h2>What we care about</h2>
      <p>We prefer useful over trendy, flexible over complicated, and realistic over perfect. Our goal is to help people discover ideas that reduce friction in everyday routines.</p>
      <h2>How recommendations will work</h2>
      <p>As the site grows, we may link to products we believe are relevant to an article. Any affiliate relationship will be clearly disclosed. We are currently building the editorial library first.</p>
      <h2>How we build a guide</h2>
      <p>We start with an everyday problem, describe practical options and explain where an approach may not fit. Our guides focus on dimensions, access, maintenance and the routines of real households. They are written for readers, rather than assembled from retailer descriptions.</p>
      <h2>What a recommendation means</h2>
      <p>We distinguish general product types from specific product recommendations. We do not describe an item as tested unless we can document hands-on use. We do not publish invented prices, ratings, awards or claims that a product is universally the best. Before buying, check the current specifications and installation requirements with the seller.</p>
      <h2>Who writes Nuvora Finds</h2>
      <p>Guides are published under the Nuvora Finds editorial name. Publication and update dates appear on each guide. We revisit articles when the advice needs correction or clarification.</p>
      <p><Link href="/contact">Suggest a correction or a topic</Link> and <Link href="/disclosure">read our affiliate disclosure</Link>.</p>
    </section>
  );
}

import Link from 'next/link';
import { products } from '../lib/products';
import { buildAmazonUrl } from '../lib/amazon';
import AmazonLink from './AmazonLink';
export default function ProductRecommendations({ article }) {
  const recommendations = products.filter((product) => Array.isArray(product.articleSlugs) && product.articleSlugs.includes(article.slug) && product.category === article.categorySlug).map((product) => ({ product, href: buildAmazonUrl(product) })).filter(({ href }) => href);
  if (!recommendations.length) return null;
  return <section className="product-recommendations" aria-labelledby="recommendation-heading">
    <h2 id="recommendation-heading">Products to consider</h2>
    <p className="affiliate-note">As an Amazon Associate I earn from qualifying purchases. These links may earn us a commission at no additional cost to you. <Link href="/disclosure">Affiliate disclosure</Link>.</p>
    {recommendations.map(({ product, href }) => <div className="takeaway-box" key={product.asin}><h3>{product.name}</h3><p>{product.reason}</p><AmazonLink href={href} productName={product.name} category={product.category} articleSlug={article.slug} /></div>)}
  </section>;
}

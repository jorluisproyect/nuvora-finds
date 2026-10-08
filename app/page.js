import Link from "next/link";
import SearchBox from "../components/SearchBox";
import { articles, categories } from "../lib/content";
import ArticleCard from '../components/ArticleCard';
import { pageMetadata, siteDescription } from '../lib/seo';
import { formatDate } from '../lib/dates';

export const metadata = pageMetadata('Smart Finds for Better Organized Spaces', siteDescription, '/');

export default function HomePage() {
  const featured = articles.filter((article) => article.featured);
  const latestUpdate = articles.map((article) => article.updatedAt).sort().at(-1);
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">SMARTER EVERYDAY LIVING</span>
          <h1>Smart finds for better organized <em>spaces.</em></h1>
          <p>Nuvora Finds curates practical solutions for kitchens, organization, small spaces and everyday routines—without the clutter.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/picks">Explore our picks</Link>
            <Link className="text-link" href="/category/organization">Start organizing →</Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract home organization illustration">
          <div className="art-card art-card-one"><span>01</span><strong>Less clutter.</strong></div>
          <div className="art-card art-card-two"><span>02</span><strong>Better function.</strong></div>
          <div className="art-orb">✦</div>
        </div>
      </section>

      <section className="section search-section">
        <SearchBox articles={articles.map(({ slug, title, excerpt, category, readTime }) => ({ slug, title, excerpt, category, readTime }))} />
      </section>

      <section className="section">
        <div className="section-heading">
          <div><span className="eyebrow">BROWSE BY SPACE</span><h2>Start where life feels messy.</h2></div>
          <p>Simple categories. Practical ideas. No endless scrolling.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link className="category-card" href={"/category/" + category.slug} key={category.slug}>
              <span className="category-icon">{category.icon}</span>
              <div><h3>{category.name}</h3><p>{category.description}</p></div>
              <span className="arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section tone-section">
        <div className="section-heading">
          <div><span className="eyebrow">EDITOR&apos;S STARTING POINTS</span><h2>Ideas worth saving.</h2></div>
          <Link className="text-link" href="/picks">See all picks →</Link>
        </div>
        <div className="article-grid featured-grid">
          {featured.map((article, index) => <ArticleCard article={article} index={index} key={article.slug} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="eyebrow">LATEST GUIDES</span><h2>A little more room for everyday life.</h2></div><p>Updated <time dateTime={latestUpdate}>{formatDate(latestUpdate)}</time>. Start with one space and one useful change.</p></div>
        <div className="article-grid">{[...articles].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).filter((article) => !article.featured).slice(0, 6).map((article, index) => <ArticleCard key={article.slug} article={article} index={index} />)}</div>
      </section>
      <section className="section picks-banner"><div><span className="eyebrow">NUVORA PICKS</span><h2>Find the right idea before the next purchase.</h2><p>Practical starting points for your kitchen, daily routines and the corners that never seem big enough.</p></div><Link className="button button-dark" href="/picks">Explore Nuvora Picks →</Link></section>
      <section className="section manifesto">
        <span className="eyebrow">OUR FILTER</span>
        <h2>Useful first. Beautiful second. Hype never.</h2>
        <p>We look for ideas that solve a real problem, fit into normal homes and make everyday routines simpler.</p>
        <div className="manifesto-points">
          <span>✓ Practical</span><span>✓ Space-aware</span><span>✓ Easy to maintain</span><span>✓ No fake urgency</span>
        </div>
      </section>
    </>
  );
}

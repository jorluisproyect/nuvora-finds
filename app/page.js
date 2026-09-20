import Link from "next/link";
import SearchBox from "../components/SearchBox";
import { articles, categories } from "../lib/content";

export default function HomePage() {
  const featured = articles.filter((article) => article.featured);
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">SMARTER EVERYDAY LIVING</span>
          <h1>Useful ideas for a home that works <em>better.</em></h1>
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
          <div><span className="eyebrow">EDITOR'S STARTING POINTS</span><h2>Ideas worth saving.</h2></div>
          <Link className="text-link" href="/picks">See all picks →</Link>
        </div>
        <div className="article-grid featured-grid">
          {featured.map((article, index) => (
            <article className={"article-card accent-" + article.accent} key={article.slug}>
              <div className="article-visual"><span>{String(index + 1).padStart(2, "0")}</span><b>{article.category}</b></div>
              <div className="article-body">
                <span className="meta">{article.category} · {article.readTime}</span>
                <h3><Link href={"/article/" + article.slug}>{article.title}</Link></h3>
                <p>{article.excerpt}</p>
                <Link className="text-link" href={"/article/" + article.slug}>Read the guide →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

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

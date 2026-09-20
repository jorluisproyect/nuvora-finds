import Link from "next/link";
import { articles } from "../../lib/content";

export const metadata = {
  title: "Nuvora Picks",
  description: "A curated starting point for useful home, kitchen and organization ideas."
};

export default function PicksPage() {
  return (
    <section className="section page-section">
      <div className="page-hero split-hero">
        <div><span className="eyebrow">CURATED BY NUVORA</span><h1>Our current picks.</h1><p>Not products yet—ideas. We are building a trustworthy editorial base before adding affiliate recommendations.</p></div>
        <div className="pick-stamp">NF<br/><small>01</small></div>
      </div>
      <div className="article-grid">
        {articles.map((article, index) => (
          <article className={"article-card accent-" + article.accent} key={article.slug}>
            <div className="article-visual"><span>{String(index + 1).padStart(2, "0")}</span><b>{article.category}</b></div>
            <div className="article-body">
              <span className="meta">{article.category} · {article.readTime}</span>
              <h3><Link href={"/article/" + article.slug}>{article.title}</Link></h3>
              <p>{article.excerpt}</p>
              <Link className="text-link" href={"/article/" + article.slug}>Explore the idea →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

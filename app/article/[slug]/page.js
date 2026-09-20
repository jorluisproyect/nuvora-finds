import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "../../../lib/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article"
    }
  } : {};
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter((item) => item.slug !== article.slug && item.categorySlug === article.categorySlug)
    .slice(0, 3);

  return (
    <article className="article-page">
      <header className={"article-hero accent-" + article.accent}>
        <div>
          <Link className="eyebrow article-category-link" href={"/category/" + article.categorySlug}>{article.category}</Link>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <span className="meta">{article.readTime} read · Nuvora Finds editorial</span>
        </div>
        <div className="article-hero-mark">NF</div>
      </header>

      <div className="article-layout">
        <aside className="article-aside">
          <span className="eyebrow">SAVE THE IDEA</span>
          <p>Useful enough to revisit? Save this page to your home or organization board.</p>
          <div className="mini-note">Pinterest-ready graphics will be added as the Nuvora library grows.</div>
        </aside>
        <div className="article-content">
          <p className="lead">{article.intro}</p>
          {article.sections.map((section, index) => (
            <section key={section.heading}>
              <span className="section-number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <div className="takeaway-box">
            <span className="eyebrow">NUVORA TAKEAWAYS</span>
            <h2>Keep it simple.</h2>
            <ul>{article.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="future-find">
            <div><span className="eyebrow">PRODUCT LINKS COMING LATER</span><h3>We are building the recommendation layer carefully.</h3></div>
            <p>Nuvora Finds does not currently use affiliate links. When recommendations are added, they will be clearly disclosed.</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section related">
          <div className="section-heading"><div><span className="eyebrow">KEEP GOING</span><h2>Related ideas.</h2></div></div>
          <div className="related-grid">
            {related.map((item) => (
              <Link href={"/article/" + item.slug} className="related-card" key={item.slug}>
                <span className="meta">{item.category} · {item.readTime}</span>
                <h3>{item.title}</h3>
                <span>Read →</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

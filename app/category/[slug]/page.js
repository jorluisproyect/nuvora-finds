import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categories, getCategory } from "../../../lib/content";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  return category ? {
    title: category.name,
    description: category.description
  } : {};
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const list = articles.filter((article) => article.categorySlug === slug);

  return (
    <section className="section page-section">
      <div className="page-hero">
        <span className="category-icon large">{category.icon}</span>
        <span className="eyebrow">NUVORA CATEGORY</span>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
      <div className="article-list">
        {list.length ? list.map((article, index) => (
          <article className="list-card" key={article.slug}>
            <div className={"list-number accent-" + article.accent}>{String(index + 1).padStart(2, "0")}</div>
            <div>
              <span className="meta">{article.readTime}</span>
              <h2><Link href={"/article/" + article.slug}>{article.title}</Link></h2>
              <p>{article.excerpt}</p>
            </div>
            <Link className="round-link" href={"/article/" + article.slug} aria-label={"Read " + article.title}>↗</Link>
          </article>
        )) : (
          <div className="empty-state">
            <h2>More finds are coming.</h2>
            <p>We are building this section carefully instead of filling it with noise.</p>
            <Link className="button button-dark" href="/picks">Browse current picks</Link>
          </div>
        )}
      </div>
    </section>
  );
}

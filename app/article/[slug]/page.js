import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "../../../lib/content";
import { articleSchema, breadcrumbSchema, pageMetadata } from '../../../lib/seo';
import StructuredData from '../../../components/StructuredData';
import ProductRecommendations from '../../../components/ProductRecommendations';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? pageMetadata(article.title, article.excerpt, '/article/' + article.slug, {
    type: 'article', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, authors: [article.author],
  }) : {};
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => Number(b.categorySlug === article.categorySlug) - Number(a.categorySlug === article.categorySlug))
    .slice(0, 3);

  return (
    <article className="article-page">
      <StructuredData data={articleSchema(article)} />
      <StructuredData data={breadcrumbSchema([{ name: 'Nuvora Finds', path: '/' }, { name: article.category, path: '/category/' + article.categorySlug }, { name: article.title, path: '/article/' + article.slug }])} />
      <nav className="breadcrumbs section" aria-label="Breadcrumb"><Link href="/">Nuvora Finds</Link><span aria-hidden="true"> / </span><Link href={'/category/' + article.categorySlug}>{article.category}</Link></nav>
      <header className={"article-hero accent-" + article.accent}>
        <div>
          <Link className="eyebrow article-category-link" href={"/category/" + article.categorySlug}>{article.category}</Link>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <p className="article-byline">By <Link href="/about">{article.author}</Link> · {article.readTime} read<br />Published <time dateTime={article.publishedAt}>September 20, 2026</time> · Updated <time dateTime={article.updatedAt}>October 7, 2026</time></p>
        </div>
        <div className="article-hero-mark">NF</div>
      </header>

      <div className="article-layout">
        <aside className="article-aside">
          <span className="eyebrow">SAVE THE IDEA</span>
          <p>Useful enough to revisit? Save this page to your home or organization board.</p>
          <div className="mini-note">Pinterest-ready graphics will be added as the Nuvora library grows.</div>
          <nav className="contents" aria-label="In this guide"><h2>In this guide</h2>{article.sections.map((section, index) => <a href={'#section-' + (index + 1)} key={section.heading}>{section.heading}</a>)}</nav>
        </aside>
        <div className="article-content">
          <p className="lead">{article.intro}</p>
          {article.sections.map((section, index) => (
            <section id={'section-' + (index + 1)} key={section.heading}>
              <span className="section-number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.heading}</h2>
              {(section.paragraphs || [section.body]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <div className="takeaway-box">
            <span className="eyebrow">NUVORA TAKEAWAYS</span>
            <h2>Keep it simple.</h2>
            <ul>{article.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <section><h2>Make it work in your home</h2><p>{article.conclusion}</p></section>
          <ProductRecommendations article={article} />
          <p className="editorial-note">These guides offer practical planning ideas, not claims of hands-on product testing. <Link href="/about">Read our editorial approach</Link> or <Link href="/contact">suggest a correction</Link>.</p>
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

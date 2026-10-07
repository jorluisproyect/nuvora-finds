import Link from 'next/link';
export default function ArticleCard({ article, index = 0 }) {
  return <article className={'article-card accent-' + article.accent}>
    <div className="article-visual" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span><b>{article.category}</b><div className="editorial-shapes"><i /><i /><i /></div></div>
    <div className="article-body"><span className="meta">{article.category} · {article.readTime} read</span>
      <h3><Link href={'/article/' + article.slug}>{article.title}</Link></h3><p>{article.excerpt}</p>
      <Link className="text-link" href={'/article/' + article.slug}>Read the guide →</Link>
    </div>
  </article>;
}

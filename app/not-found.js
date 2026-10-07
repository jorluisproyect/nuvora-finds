import Link from 'next/link';
export const metadata = { title: 'Page not found', robots: { index: false, follow: true } };
export default function NotFound() {
  return <section className="section prose-page"><span className="eyebrow">PAGE NOT FOUND</span><h1>Let’s find a useful starting point.</h1><p>The page may have moved or the address may be incomplete.</p><Link className="button button-dark" href="/">Browse guides and search →</Link></section>;
}

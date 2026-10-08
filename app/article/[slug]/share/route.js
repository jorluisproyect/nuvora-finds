import { ImageResponse } from 'next/og';
import { articles, getArticle } from '../../../../lib/content';

export const dynamic = 'force-static';
export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function GET(_request, { params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return new Response('Not found', { status: 404 });
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', padding: 64, background: '#f7f5ef', color: '#202723' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 30 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 32, background: '#536b5c', color: 'white' }}>N</div>
        Nuvora Finds
      </div>
      <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, lineHeight: 1.08 }}>{article.title}</div>
      <div style={{ display: 'flex', fontSize: 24, color: '#536b5c' }}>{article.category.toUpperCase()} · PRACTICAL IDEAS FOR EVERYDAY LIVING</div>
    </div>,
    { width: 1200, height: 630, headers: { 'Cache-Control': 'public, max-age=86400' } },
  );
}

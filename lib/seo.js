export const siteUrl = 'https://nuvora-finds.vercel.app';
export const siteDescription = 'Practical guides and thoughtful finds for better organized homes, kitchens and small spaces.';
export function pageMetadata(title, description, path, options = {}) {
  const images = options.images || [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Nuvora Finds — smart finds for better organized spaces' }];
  return {
    title: { absolute: title + ' | Nuvora Finds' }, description,
    authors: [{ name: 'Nuvora Finds', url: siteUrl + '/about' }],
    alternates: { canonical: siteUrl + path },
    openGraph: { title, description, url: siteUrl + path, siteName: 'Nuvora Finds', locale: 'en_US', type: 'website', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Nuvora Finds — smart finds for better organized spaces' }], ...options },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}
export function articleSchema(article) {
  return {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: article.title, description: article.excerpt,
    datePublished: article.publishedAt, dateModified: article.updatedAt,
    author: { '@type': 'Organization', name: article.author, url: siteUrl + '/about' },
    publisher: { '@type': 'Organization', name: 'Nuvora Finds', url: siteUrl },
    image: siteUrl + '/article/' + article.slug + '/share',
    mainEntityOfPage: siteUrl + '/article/' + article.slug,
    articleSection: article.category, inLanguage: 'en-US',
  };
}
export function breadcrumbSchema(items) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: siteUrl + item.path })) };
}

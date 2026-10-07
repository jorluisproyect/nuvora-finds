/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      ...['home', 'kitchen', 'organization', 'small-spaces'].map((slug) => ({ source: '/' + slug, destination: '/category/' + slug, permanent: true })),
      { source: '/category/useful-finds', destination: '/category/home', permanent: true },
    ];
  },
};

export default nextConfig;

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://nuvora-finds.vercel.app/sitemap.xml"
  };
}

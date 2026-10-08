import "./globals.css";
import Link from "next/link";
import MobileNav from '../components/MobileNav';
import { siteUrl, siteDescription } from '../lib/seo';
import StructuredData from '../components/StructuredData';
import { amazonTagConfigured } from '../lib/amazon';
import SiteAnalytics from '../components/SiteAnalytics';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nuvora Finds | Smart finds for better organized spaces",
    template: "%s | Nuvora Finds"
  },
  description: siteDescription,
  openGraph: {
    title: "Nuvora Finds",
    description: siteDescription,
    type: "website", siteName: 'Nuvora Finds', locale: 'en_US', images: ['/opengraph-image'],
  },
  twitter: { card: 'summary_large_image', title: 'Nuvora Finds', description: siteDescription, images: ['/opengraph-image'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <StructuredData data={{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Nuvora Finds', url: siteUrl }} />
        <header className="site-header">
          <Link className="brand" href="/">
            <span className="brand-mark">N</span>
            <span><strong>Nuvora Finds</strong><small>Smart finds for everyday living.</small></span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/category/home">Home</Link>
            <Link href="/category/kitchen">Kitchen</Link>
            <Link href="/category/organization">Organization</Link>
            <Link href="/category/small-spaces">Small Spaces</Link>
            <Link href="/picks">Picks</Link>
          </nav>
          <MobileNav />
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div>
            <Link className="footer-brand" href="/">Nuvora Finds</Link>
            <p>Thoughtful ideas and useful finds for everyday living.</p>
          </div>
          <div className="footer-links">
            <Link href="/picks">Nuvora Picks</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclosure">Affiliate disclosure</Link>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Nuvora Finds.</p>
          <p className="footer-disclosure">{amazonTagConfigured() ? 'As an Amazon Associate I earn from qualifying purchases.' : 'Affiliate links are not currently active. Future qualifying purchases may earn us a commission at no additional cost to you.'} <Link href="/disclosure">Read our disclosure</Link>.</p>
        </footer>
        <SiteAnalytics />
      </body>
    </html>
  );
}

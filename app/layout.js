import "./globals.css";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://nuvora-finds.vercel.app"),
  title: {
    default: "Nuvora Finds | Smart finds for everyday living",
    template: "%s | Nuvora Finds"
  },
  description: "Useful ideas and thoughtful finds for a calmer, smarter home.",
  openGraph: {
    title: "Nuvora Finds",
    description: "Smart finds for everyday living.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div>
            <Link className="footer-brand" href="/">Nuvora Finds</Link>
            <p>Thoughtful ideas and useful finds for everyday living.</p>
          </div>
          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclosure">Affiliate disclosure</Link>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Nuvora Finds.</p>
        </footer>
      </body>
    </html>
  );
}

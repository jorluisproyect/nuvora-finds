'use client';
import Link from 'next/link';
import { useRef } from 'react';
const links = [['Home ideas', '/category/home'], ['Kitchen', '/category/kitchen'], ['Organization', '/category/organization'], ['Small Spaces', '/category/small-spaces'], ['Nuvora Picks', '/picks'], ['About', '/about']];
export default function MobileNav() {
  const menu = useRef(null);
  return <details className="mobile-nav" ref={menu}>
    <summary>Menu <span aria-hidden="true">☰</span></summary>
    <nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => { menu.current.open = false; }}>{label}</Link>)}</nav>
  </details>;
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function SearchBox({ articles }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return articles.filter((article) =>
      (article.title + " " + article.excerpt + " " + article.category)
        .toLowerCase()
        .includes(q)
    ).slice(0, 5);
  }, [query, articles]);

  return (
    <div className="search-wrap">
      <label className="search-label" htmlFor="site-search">What are you trying to improve?</label>
      <div className="search-field">
        <span aria-hidden="true">⌕</span>
        <input
          id="site-search"
          type="search"
          placeholder="Search kitchen, storage, small spaces..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {query.trim().length >= 2 && (
        <div className="search-results">
          {matches.length ? matches.map((article) => (
            <Link href={"/article/" + article.slug} key={article.slug} onClick={() => setQuery("")}>
              <strong>{article.title}</strong>
              <span>{article.category} · {article.readTime}</span>
            </Link>
          )) : <p>No matches yet. Try a broader word.</p>}
        </div>
      )}
    </div>
  );
}

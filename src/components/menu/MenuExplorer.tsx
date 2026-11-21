"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, ArrowUpRight } from "lucide-react";
import { foods } from "@/data/site";

export function MenuExplorer({ compact = false }: { compact?: boolean }) {
  const [category, setCategory] = useState<"All" | "Food" | "Drinks">("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => foods.filter((item) =>
    (category === "All" || item.category === category) &&
    (item.name + " " + item.descriptor).toLowerCase().includes(query.trim().toLowerCase())
  ), [category, query]);
  return (
    <div className="menu-explorer">
      <div className="menu-controls">
        <div className="filter-group" aria-label="Menu category">
          {(["All", "Food", "Drinks"] as const).map((name) => (
            <button key={name} type="button" aria-pressed={category === name} className={category === name ? "filter-button active" : "filter-button"} onClick={() => setCategory(name)}>{name}</button>
          ))}
        </div>
        <label className="menu-search"><Search size={18} aria-hidden /><span className="sr-only">Search menu</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find your cravings..." type="search" /></label>
      </div>
      <div className="menu-grid">
        {filtered.slice(0, compact ? 3 : undefined).map((item, i) => (
          <article className="menu-card" key={item.id}>
            <div className="menu-card-picture">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 900px) 48vw, 30vw" className="menu-card-image" />
              <span className="menu-index">0{i + 1} / {item.category}</span>
              <span className="menu-card-sticker" aria-hidden="true">✳</span>
            </div>
            <div className="menu-card-description"><div><span className="placeholder-label">{item.label}</span><h3>{item.name}</h3><p>{item.descriptor}</p></div><ArrowUpRight size={24} aria-hidden /></div>
          </article>
        ))}
      </div>
      {!filtered.length && <p role="status" className="menu-empty">No matching items. Try another search.</p>}
      <p className="data-disclaimer">Preview-only content and illustrative photography. Product names, pricing and imagery will be replaced with verified Guulak menu data.</p>
    </div>
  );
}

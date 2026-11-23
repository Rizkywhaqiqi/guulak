import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
export const metadata: Metadata = { title: "Explore Menu" };
export default function MenuPage() {
  return <div className="inner-page"><div className="container"><Link href="/" className="back-link"><ArrowLeft size={18}/> Back to home</Link><span className="eyebrow">THE FOOD EXPLORER</span><h1>THE MENU<span>!</span></h1><p>Find something you&apos;ll love. Official Guulak products are coming soon.</p><MenuExplorer /></div></div>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = { title: "About" };
export default function AboutPage() {
  return <section className="inner-page"><div className="container"><span className="eyebrow">THE GUULAK STORY</span><h1>MORE THAN<br />JUST FOOD<span>.</span></h1><p>Guulak is a Korean-inspired F&B brand from Pontianak, bringing fun, modern and vibrant experiences to every visit. A place for Korean culture, food and memorable moments together.</p><Link className="button button-dark" href="/menu">Explore Menu <ArrowUpRight size={20}/></Link></div></section>;
}

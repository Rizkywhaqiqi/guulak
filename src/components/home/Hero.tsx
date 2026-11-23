"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { foods } from "@/data/site";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-reveal", { y: 54, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.12 });
      gsap.fromTo(".hero-food", { y: 95, rotate: -10, opacity: 0, scale: 0.85 }, { y: 0, rotate: 0, opacity: 1, scale: 1, duration: 1.35, delay: 0.3, ease: "back.out(1.35)" });
      gsap.to(".hero-orbit", { rotation: 10, y: -12, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, node);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero" aria-labelledby="hero-heading">
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-topline hero-reveal">
        <span>KOREAN-INSPIRED FOOD & GOOD VIBES</span>
        <span>PONTIANAK, INDONESIA ✳ EST. GOOD TIMES</span>
      </div>
      <div className="container hero-stage">
        <div className="hero-giant hero-reveal" aria-hidden="true">GUULAK!</div>
        <div className="hero-sun hero-orbit" aria-hidden="true"><Sparkles size={38} strokeWidth={2.6} /></div>
        <svg className="hero-scribble hero-orbit" width="180" height="116" viewBox="0 0 180 116" fill="none" aria-hidden="true">
          <path d="M7 99C21 17 100 13 91 66C82 112 56 39 134 39M134 39L118 25M134 39L117 55" stroke="#333333" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="hero-food hero-food-primary">
          <Image src={foods[0].image} fill priority sizes="(max-width: 768px) 70vw, 38vw" alt={foods[0].alt} className="food-photo" />
          <span className="food-stamp">FOOD IS FUN! <span>✳</span></span>
        </div>
        <div className="hero-food hero-food-secondary">
          <Image src={foods[1].image} fill priority sizes="(max-width: 768px) 37vw, 21vw" alt={foods[1].alt} className="food-photo" />
        </div>
        <span className="hero-side-note">TASTE THE FUN / FEEL THE VIBE</span>
        <div className="hero-star hero-orbit" aria-hidden="true">✳</div>
      </div>
      <div className="container hero-bottom">
        <div className="hero-copy hero-reveal">
          <p className="eyebrow">A FEAST FOR THE SENSES</p>
          <h1 id="hero-heading">RASA SERU,<br />MOMEN BARENG!</h1>
          <p>More than Korean-inspired food. A little taste of culture, a lot of good moments — only at Guulak.</p>
        </div>
        <div className="hero-actions hero-reveal">
          <Link className="button button-dark" href="/menu">Explore Our Menu <ArrowUpRight size={20} aria-hidden /></Link>
          <Link className="button button-outline" href="/outlets">Find Your Guulak <ArrowDownRight size={20} aria-hidden /></Link>
        </div>
      </div>
      <div className="hero-placeholder-notice">CONCEPT PREVIEW — food photography is temporary until official Guulak assets are supplied.</div>
    </section>
  );
}

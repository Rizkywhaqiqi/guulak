"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = element.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(node, { y: 46, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: node, start: "top 92%", once: true },
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return <div ref={element} className={className}>{children}</div>;
}

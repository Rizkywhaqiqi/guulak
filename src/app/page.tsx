import Link from "next/link";
import { ArrowUpRight, MapPin, Heart, Instagram } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { MenuExplorer } from "@/components/menu/MenuExplorer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <section className="section favorites" id="favorites">
        <div className="container">
          <Reveal className="section-intro">
            <span className="eyebrow">01 / YOUR NEXT CRAVING</span>
            <h2>GOOD FOOD.<br /><em>GREAT MOOD.</em></h2>
            <p>Something delicious is always around the corner. Explore the world of Guulak.</p>
          </Reveal>
          <Reveal><MenuExplorer compact /></Reveal>
          <Link className="text-link" href="/menu">Discover the menu <ArrowUpRight size={20} aria-hidden /></Link>
        </div>
      </section>
      <section className="section story">
        <div className="container story-layout">
          <Reveal className="story-visual" >
            <span className="story-sun" aria-hidden="true">✳</span>
            <span className="story-korean" lang="ko">즐거운 순간</span>
            <span className="story-frame">FOOD / FRIENDS / FEELINGS</span>
            <span className="story-huge">FUN!</span>
          </Reveal>
          <Reveal className="story-copy">
            <span className="eyebrow">02 / MORE THAN FOOD</span>
            <h2>IT&apos;S A<br />WHOLE <em>VIBE.</em></h2>
            <p>Guulak brings contemporary Korean food and culture closer through moments made to share. Vibrant flavors, warm connections, endless reasons to come together.</p>
            <Link className="button button-dark" href="/about">Meet Guulak <ArrowUpRight size={20} aria-hidden /></Link>
          </Reveal>
        </div>
      </section>
      <section className="section locations">
        <div className="container location-layout">
          <Reveal>
            <span className="eyebrow">03 / COME HANG OUT</span>
            <h2>FIND YOUR<br /><em>GUULAK!</em></h2>
            <p>We&apos;re bringing good food and good vibes to Pontianak. Guulak has 6 outlets — find your next hangout spot.</p>
            <Link href="/outlets" className="button button-light">Explore Outlets <MapPin size={19} aria-hidden /></Link>
          </Reveal>
          <Reveal className="location-art">
            <span aria-hidden="true" className="location-flower">✳</span>
            <span className="location-number">06</span>
            <span className="location-word">OUTLETS<br />IN PONTIANAK</span>
          </Reveal>
        </div>
      </section>
      <section className="section final-cta">
        <div className="container cta-inner">
          <Reveal>
            <span className="eyebrow">04 / SEE YOU AT GUULAK!</span>
            <h2>BRING YOUR<br />APPETITE. <Heart aria-hidden="true" className="cta-heart" /></h2>
            <p>Rasa seru, momen bareng. The good times start here.</p>
            <Link className="button button-dark" href="/menu">Let&apos;s Explore <ArrowUpRight size={20} aria-hidden /></Link>
          </Reveal>
          <div className="cta-spark" aria-hidden="true">✳</div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-top"><span className="footer-logo">GUULAK!</span><p>A FEAST FOR THE SENSES.<br />PONTIANAK, INDONESIA.</p></div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} GUULAK! / WEBSITE CONCEPT</span><div><Link href="/menu">Menu</Link><Link href="/outlets">Outlets</Link><Link href="/contact"><Instagram size={17} aria-hidden /> Contact</Link></div></div>
        </div>
      </footer>
    </>
  );
}

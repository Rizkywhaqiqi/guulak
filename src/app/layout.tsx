import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: { default: "Guulak! — A Feast for the Senses", template: "%s | Guulak!" },
  description: "Explore a vibrant, playful Korean-inspired food and lifestyle experience in Pontianak. A Feast for the Senses.",
  metadataBase: new URL("https://example.com"),
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}

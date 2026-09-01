import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OneMind OS — Sovereign Operations Platform",
    template: "%s | OneMind OS",
  },
  description:
    "The open-source situational awareness platform built on TAK. Fuse sensors, drones, AI agents, and field teams into one closed-loop operations system — self-hosted, sovereign, yours.",
  keywords: [
    "TAK", "situational awareness", "ATAK", "sovereign operations",
    "NATS", "drone tracking", "AI agents", "self-hosted", "OneMind OS",
  ],
  authors: [{ name: "OneMind OS", url: "https://onemindos.com" }],
  openGraph: {
    type: "website",
    url: "https://onemindos.com",
    title: "OneMind OS — Sovereign Operations Platform",
    description: "The open-source SA platform built on TAK. Self-hosted. Sovereign. Yours.",
    siteName: "OneMind OS",
    // PLACEHOLDER_OG_IMAGE: replace with /public/img/og-onemind.png (1200x630)
    images: [{ url: "/img/og-onemind.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneMind OS — Sovereign Operations Platform",
    description: "The open-source SA platform built on TAK. Self-hosted. Sovereign. Yours.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

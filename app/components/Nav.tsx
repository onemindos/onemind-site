"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const platformLinks = [
  { href: "/platform#overwatch", label: "Overwatch", desc: "Real-time common operating picture" },
  { href: "/platform#feeds", label: "TAK Feeds", desc: "Sensors, ADS-B, AIS, RF intelligence" },
  { href: "/platform#agents", label: "AI Agents", desc: "12-agent mesh on NATS" },
  { href: "/platform#video", label: "Tactical VMS", desc: "Drones, body cams, live video" },
  { href: "/platform#geo", label: "Geo Stack", desc: "Full GIS — Tile38, Valhalla, TimescaleDB" },
  { href: "/platform#deploy", label: "Deployment", desc: "Kubernetes-native, edge or cloud" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          {/* PLACEHOLDER_LOGO: Replace the text logo below with your SVG logo */}
          {/* Drop SVG into /public/img/logo.svg and use <Image> component */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-red rounded flex items-center justify-center font-black text-sm text-white group-hover:bg-red-bright transition-colors">
              OM
            </div>
            <span className="font-black text-lg tracking-tight">
              One<span className="text-red-bright">Mind</span>{" "}
              <span className="text-dim font-normal text-sm">OS</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">

            {/* Platform dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPlatformOpen(true)}
              onMouseLeave={() => setPlatformOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-dim hover:text-white transition-colors py-2">
                Platform <ChevronDown size={14} className={`transition-transform ${platformOpen ? "rotate-180" : ""}`} />
              </button>

              {platformOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-black-2 border border-white/10 rounded-xl p-4 shadow-2xl shadow-black/50">
                  <div className="grid grid-cols-2 gap-1">
                    {platformLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="flex flex-col gap-0.5 p-3 rounded-lg hover:bg-black-3 transition-colors group"
                      >
                        <span className="text-sm font-semibold text-white group-hover:text-red-bright transition-colors">
                          {l.label}
                        </span>
                        <span className="text-xs text-dim">{l.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <Link href="/platform" className="text-xs text-dim hover:text-white transition-colors">
                      View full platform overview →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/education" className="text-sm font-medium text-dim hover:text-white transition-colors">Education</Link>
            <Link href="/about" className="text-sm font-medium text-dim hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium text-dim hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="https://atoc.onemindos.dev" target="_blank" className="text-sm text-dim hover:text-white transition-colors font-medium">
              Live Demo
            </Link>
            <Link href="https://community.onemindos.com" target="_blank" className="btn-primary text-sm py-2.5 px-5">
              Join Community
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black-2 border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          <Link href="/platform" className="text-white font-medium py-2 border-b border-white/5" onClick={() => setMobileOpen(false)}>Platform</Link>
          <Link href="/education" className="text-white font-medium py-2 border-b border-white/5" onClick={() => setMobileOpen(false)}>Education</Link>
          <Link href="/about" className="text-white font-medium py-2 border-b border-white/5" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="text-white font-medium py-2 border-b border-white/5" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="https://community.onemindos.com" target="_blank" className="btn-primary text-center mt-2">Join Community</Link>
        </div>
      )}
    </header>
  );
}

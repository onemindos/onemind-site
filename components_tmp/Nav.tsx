"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const navSections = [
  {
    id: "platform",
    label: "Platform",
    items: [
      { href: "/platform", label: "Overview", desc: "Full platform architecture" },
      { href: "/platform#overwatch", label: "Overwatch", desc: "Real-time common operating picture" },
      { href: "/platform#feeds", label: "TAK Feeds", desc: "Sensors, ADS-B, AIS, RF" },
      { href: "/platform#agents", label: "AI Agents", desc: "12-agent mesh on NATS" },
      { href: "/platform#video", label: "Tactical VMS", desc: "Drones, body cams, live video" },
      { href: "/platform#geo", label: "Geo Stack", desc: "Full GIS — Tile38, Valhalla, TimescaleDB" },
      { href: "/platform#deploy", label: "Deployment", desc: "Kubernetes, edge, or cloud" },
    ],
  },
  {
    id: "agents",
    label: "Agents",
    items: [
      { href: "/agents", label: "All 12 Agents", desc: "The full agent roster" },
      { href: "/agents/legacy", label: "Legacy — The Mother", desc: "Sovereign cloud AI" },
      { href: "/agents/legacy-edge", label: "Legacy-Edge", desc: "The Daughter — edge AI" },
      { href: "/agents/oracle", label: "Oracle", desc: "Intelligence analyst" },
      { href: "/agents/forge", label: "Forge", desc: "Master orchestration" },
      { href: "/agents/guardian", label: "Guardian", desc: "Security" },
      { href: "/agents/empire", label: "Empire", desc: "Business growth" },
      { href: "/agents/haven", label: "Haven", desc: "Community" },
      { href: "/agents/heritage", label: "Heritage", desc: "Brand + content" },
      { href: "/agents/eden", label: "Eden", desc: "Creative + design" },
      { href: "/agents/grid", label: "Grid", desc: "Infrastructure + sensors" },
      { href: "/agents/spartan", label: "Spartan", desc: "Wellness" },
      { href: "/agents/trinity", label: "Trinity", desc: "Integration + protocols" },
    ],
  },
  {
    id: "plugins",
    label: "Plugins",
    items: [
      { href: "/plugins", label: "All Plugins", desc: "Plugin directory" },
      { href: "/plugins/cloudtak", label: "CloudTAK", desc: "OneMind platform plugins" },
      { href: "/plugins/atak", label: "ATAK", desc: "Android plugins" },
      { href: "/plugins/tak-server", label: "TAK Server", desc: "Server-side plugins" },
      { href: "/plugins/hermes", label: "Hermes", desc: "Skills + MCP plugins" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { href: "/tools", label: "All Tools", desc: "Fabric toolkit" },
    ],
  },
  {
    id: "more",
    label: "More",
    items: [
      { href: "/nats", label: "NATS", desc: "The fabric bus — technical deep dive" },
      { href: "/education", label: "Education", desc: "Sovereign Stack curriculum" },
      { href: "/about", label: "About", desc: "Mission, thesis, founder" },
      { href: "/contact", label: "Contact", desc: "Get in touch" },
    ],
  },
] as const;

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(5, 6, 7, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "5rem",
          paddingLeft: "clamp(1.5rem, 5vw, 6rem)",
          paddingRight: "clamp(1.5rem, 5vw, 6rem)",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, background: "#8B0000", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.625rem", color: "white" }}>OM</div>
          <span style={{ fontWeight: 900, fontSize: "1rem", letterSpacing: "-0.02em", color: "white" }}>
            One<span style={{ color: "#b91c1c" }}>Mind</span> <span style={{ color: "#6b7280", fontWeight: 400, fontSize: "0.85rem" }}>OS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {navSections.map((section) => (
            <div
              key={section.id}
              style={{ position: "relative" }}
              onMouseEnter={() => setOpen(section.id)}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  background: "none",
                  border: "none",
                  color: "#6b7280",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: "0.5rem 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6b7280")}
              >
                {section.label}
                <ChevronDown size={14} style={{ transform: open === section.id ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
              </button>

              {/* Dropdown */}
              {open === section.id && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: "0.5rem",
                    background: "#0a0c0e",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "0.75rem",
                    padding: "0.75rem",
                    minWidth: "260px",
                    maxWidth: "420px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                    zIndex: 100,
                  }}
                >
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        display: "block",
                        padding: "0.625rem 0.75rem",
                        borderRadius: "0.375rem",
                        textDecoration: "none",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "none")}
                    >
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "white", marginBottom: "0.1rem" }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="https://community.onemindos.com"
            target="_blank"
            className="btn-primary"
            style={{ padding: "0.625rem 1.25rem", fontSize: "0.85rem", marginLeft: "1rem" }}
          >
            Join Community
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "0.5rem", display: "flex" }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ padding: "1rem 1.5rem", background: "#0a0c0e", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {navSections.map((section) => (
            <div key={section.id} style={{ marginBottom: "1rem" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "0.5rem" }}>
                {section.label}
              </div>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "0.5rem 0", color: "#6b7280", textDecoration: "none", fontSize: "0.9rem" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="https://community.onemindos.com" target="_blank" className="btn-primary" style={{ marginTop: "0.5rem", justifyContent: "center" }}>
            Join Community
          </Link>
        </div>
      )}
    </header>
  );
}

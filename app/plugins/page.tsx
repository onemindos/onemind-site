import Link from "next/link";
import { plugins } from "../data/plugins";

const categories = [
  { id: "cloudtak", label: "CloudTAK", desc: "OneMind platform plugins" },
  { id: "atak", label: "ATAK", desc: "Android plugins" },
  { id: "tak-server", label: "TAK Server", desc: "Server-side plugins" },
  { id: "hermes", label: "Hermes", desc: "Skills + MCP" },
] as const;

export default function PluginsIndexPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "#050607" }}>
        <span className="tag">Plugin Directory</span>
        <h1 className="display-lg" style={{ marginTop: "1.5rem" }}>
          <span style={{ color: "#b91c1c" }}>Plug-ins</span> on the fabric
        </h1>
        <p className="subheading" style={{ marginTop: "1rem", maxWidth: "600px" }}>
          Every plugin, extension, and integration across the OneMind ecosystem — CloudTAK, ATAK, TAK Server, and Hermes.
        </p>
      </section>

      <section className="section" style={{ background: "#0a0c0e" }}>
        <div className="container-wide">
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>

            {categories.map((cat) => {
              const items = plugins.filter((p) => p.category === cat.id);
              if (!items.length) return null;

              return (
                <div key={cat.id}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                    <span className="tag-solid">{cat.label}</span>
                    <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>{cat.desc}</span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1.5rem" }}>
                    {items.map((p) => (
                      <Link key={p.slug} href={`/plugins/${p.category}/${p.slug}`} style={{ textDecoration: "none" }}>
                        <div className="card">
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                            <span className="tag" style={{
                              color: p.status === "live" ? "#22c55e" : p.status === "development" ? "#f59e0b" : "#6b7280",
                              borderColor: p.status === "live" ? "rgba(34,197,94,0.3)" : p.status === "development" ? "rgba(245,158,11,0.3)" : "rgba(107,114,128,0.2)",
                            }}>
                              {p.status.toUpperCase()}
                            </span>
                            <span style={{ fontSize: "0.72rem", color: "#6b7280" }}>
                              {p.license}
                            </span>
                          </div>
                          <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "white", marginBottom: "0.75rem" }}>
                            {p.name}
                          </div>
                          <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                            {p.description}
                          </p>
                          <div style={{ fontSize: "0.72rem", color: "#6b7280", fontFamily: "monospace", background: "#050607", padding: "0.375rem 0.5rem", borderRadius: "0.25rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {p.repo || p.location}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

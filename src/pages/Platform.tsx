import { TopoField } from "@designcodeio/threeui/components/TopoField";

export default function Platform() {
  return (
    <>
      {/* HERO */}
      <section className="canvas-hero" style={{minHeight:"60vh"}}>
        <div className="canvas-bg">
          <TopoField variant="topo-field" hue={0} saturation={0.6} brightness={0.2} opacity={0.5} />
        </div>
        <div className="hero-content">
          <div className="tag">Platform</div>
          <h1>Everything the<br /><span className="accent">fabric runs</span></h1>
          <p style={{fontSize:"1.1rem",maxWidth:"560px",marginTop:"1rem"}}>
            A sovereign, self-hosted operations stack — no SaaS dependencies, no vendor lock-in.
            Every service on your cluster, every byte on your hardware.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ARCHITECTURE LAYERS */}
      <section style={{background:"var(--black-2)"}}>
        <div className="container">
          <div className="tag">Architecture</div>
          <h2 style={{marginBottom:"3rem"}}>Three layers. Total ownership.</h2>
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
            {[
              {layer:"L1 — Chassis", color:"#8B0000", items:["TAK Server 5.7/5.8","ATAK / WinTAK / WebTAK","CoT protocol (Cursor on Target)"], desc:"Government-funded, battle-tested. We don't fork it — we build above it."},
              {layer:"L2 — Fabric", color:"#b91c1c", items:["NATS 3-node HA cluster","MQTT bridge (IoT)","ClickHouse time machine (10yr TTL)","TimescaleDB geo stack"], desc:"The nervous system. Every event, every sensor, every agent — on one bus."},
              {layer:"L3 — Mind", color:"#dc2626", items:["12 AI agents (Hermes/Bedrock)","Legacy (cloud sovereign)","Legacy-Edge (Mac edge node)","Forge (code orchestrator)","Oracle, Guardian, Empire..."], desc:"The intelligence layer. Agents that sense, decide, and act — orchestrated by Legacy."},
            ].map(l => (
              <div key={l.layer} style={{background:"var(--black-3)",border:`1px solid ${l.color}33`,borderLeft:`4px solid ${l.color}`,borderRadius:"8px",padding:"2rem",display:"grid",gridTemplateColumns:"200px 1fr 2fr",gap:"2rem",alignItems:"start"}}>
                <div>
                  <div style={{fontSize:"0.75rem",fontWeight:700,color:l.color,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"0.5rem"}}>{l.layer}</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                  {l.items.map(i => <div key={i} style={{fontSize:"0.85rem",color:"var(--white)",display:"flex",alignItems:"center",gap:"0.5rem"}}><span style={{color:l.color}}>▸</span>{i}</div>)}
                </div>
                <p style={{fontSize:"0.9rem"}}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES GRID */}
      <section>
        <div className="container">
          <div className="tag">Live Services</div>
          <h2 style={{marginBottom:"3rem"}}>What's running right now</h2>
          <div className="card-grid">
            {[
              {icon:"🗺️", title:"CloudTAK", url:"atoc.onemindos.dev", desc:"Fork-free CloudTAK 6 with AI panel plugin. Full TAK in any browser."},
              {icon:"📹", title:"MediaMTX", url:"cam.onemindos.dev", desc:"RTSP/WebRTC video ingestion. Drones, cams, body feeds — live."},
              {icon:"🌍", title:"Tile Server", url:"tiles.onemindos.dev", desc:"Self-hosted vector tiles via Martin + TileServer GL. No Mapbox billing."},
              {icon:"🔴", title:"NATS HA", url:"nats://fabric:4222", desc:"3-node NATS cluster. SYS · CORE · FABRIC · INTERFACE accounts."},
              {icon:"📊", title:"Grafana", url:"grafana.onemindos.dev", desc:"Ops dashboards, telemetry, NATS stream monitoring."},
              {icon:"🛡️", title:"TAK Server", url:"tak.onemindos.dev", desc:"TAK Server 5.7 — missions, chat, tracks, CoT ingest. 24/7 ops."},
              {icon:"📍", title:"Tile38", url:"geo ns", desc:"Real-time geofencing, proximity alerts, live asset tracking."},
              {icon:"🧭", title:"Valhalla", url:"geo ns", desc:"Self-hosted routing engine. Offline navigation for field teams."},
            ].map(c => (
              <div className="card" key={c.title}>
                <div className="card-icon">{c.icon}</div>
                <h3 style={{marginBottom:"0.4rem"}}>{c.title}</h3>
                <div style={{fontSize:"0.75rem",color:"var(--red-bright)",fontFamily:"var(--font-mono)",marginBottom:"0.75rem"}}>{c.url}</div>
                <p style={{fontSize:"0.88rem"}}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* DEPLOYMENT */}
      <section style={{background:"var(--black-2)"}}>
        <div className="container">
          <div className="tag">Deployment</div>
          <h2 style={{marginBottom:"1rem"}}>Kubernetes-native, cloud or edge</h2>
          <p style={{maxWidth:"600px",marginBottom:"3rem"}}>22 namespaces on DOKS. Runs identically on a homestead NUC or enterprise bare metal. Tailscale mesh connects every node.</p>
          <div className="card-grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))"}}>
            {[
              {title:"DOKS (cloud)", desc:"Primary cluster. Always-on. 22 namespaces, 3-node NATS HA."},
              {title:"Mac Edge", desc:"Legacy-Edge agent. Local terminal, files, sensors, TAK bridge."},
              {title:"Tailscale Mesh", desc:"Every node on a private mesh. No open ports, no VPN config."},
              {title:"Cloudflare Tunnel", desc:"Zero-trust ingress. No public IPs exposed on any service."},
            ].map(c => (
              <div className="card" key={c.title}>
                <h3 style={{marginBottom:"0.5rem",fontSize:"1rem"}}>{c.title}</h3>
                <p style={{fontSize:"0.88rem"}}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p style={{color:"var(--dim)"}}>© 2026 OneMind OS.</p>
        <a href="/contact" className="btn-primary">Get in touch →</a>
      </footer>
    </>
  );
}

import React, { Suspense, lazy } from "react";
import { TopoField } from "@designcodeio/threeui/components/TopoField";
import { PredictiveArcCanvas } from "@designcodeio/threeui/components/PredictiveArcCanvas";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="canvas-hero">
        <div className="canvas-bg">
          <TopoField variant="topo-field" hue={0} saturation={0.8} brightness={0.3} opacity={0.6} />
        </div>
        <div className="hero-content">
          <div className="tag">Situational Awareness Platform</div>
          <h1>The OS for<br /><span className="accent">Sovereign Operations</span></h1>
          <p style={{fontSize:"1.2rem", maxWidth:"600px", margin:"1.5rem 0 2.5rem"}}>
            OneMind fuses sensors, drones, AI agents, and field teams into one closed-loop
            operations platform — built on the TAK ecosystem, deployed on your infrastructure.
          </p>
          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
            <a href="/platform" className="btn-primary">Explore Platform →</a>
            <a href="/education" className="btn-ghost">Start Learning</a>
          </div>
          <div className="stat-row">
            <div className="stat"><h3>10yr</h3><p>Event time-series retention</p></div>
            <div className="stat"><h3>TAK</h3><p>Ecosystem native</p></div>
            <div className="stat"><h3>100%</h3><p>Self-hosted, sovereign</p></div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SENSE → FUSE → DECIDE → ACT */}
      <section style={{background:"var(--black-2)"}}>
        <div className="container">
          <div className="tag">Closed Loop</div>
          <h2 style={{marginBottom:"1rem"}}>Four layers. One mind.</h2>
          <p style={{maxWidth:"600px", marginBottom:"3rem"}}>
            Every operation runs through a single closed loop — from raw sensor data to decisive action.
          </p>
          <div className="card-grid">
            {[
              {icon:"📡", step:"01", title:"Sense", desc:"Environmental sensors, drones, cameras, physiological monitors — every signal on one bus."},
              {icon:"🧠", step:"02", title:"Fuse", desc:"NATS substrate + ClickHouse time machine. Every event correlated, indexed, retained for 10 years."},
              {icon:"⚡", step:"03", title:"Decide", desc:"AI agents on the bus — Legacy, Oracle, Guardian. Pattern recognition at machine speed."},
              {icon:"🎯", step:"04", title:"Act", desc:"Push to TAK, trigger automations, dispatch teams. Closed loop in milliseconds."},
            ].map(c => (
              <div className="card" key={c.step}>
                <div className="card-icon">{c.icon}</div>
                <div style={{fontSize:"0.7rem",color:"var(--red-bright)",fontWeight:700,letterSpacing:"0.1em",marginBottom:"0.5rem"}}>{c.step}</div>
                <h3 style={{marginBottom:"0.75rem"}}>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SIGNAL PARTICLES VISUAL BREAK */}
      <section style={{padding:0, height:"380px", position:"relative", overflow:"hidden", background:"var(--black)"}}>
        <PredictiveArcCanvas variant="signal-particles" hue={0} saturation={0.9} brightness={0.6} density={1.2} speed={0.8} />
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"1rem",textAlign:"center",padding:"2rem"}}>
          <div className="tag">Built Different</div>
          <h2>TAK chassis. OneMind mind.</h2>
          <p style={{maxWidth:"500px"}}>We don't compete with TAK — we extend it. Every layer above the chassis is owned, private, sovereign.</p>
        </div>
      </section>

      <div className="divider" />

      {/* PLATFORM CAPABILITIES */}
      <section>
        <div className="container">
          <div className="tag">Capabilities</div>
          <h2 style={{marginBottom:"3rem"}}>What's on the fabric</h2>
          <div className="card-grid">
            {[
              {icon:"🌐", title:"CloudTAK", desc:"Browser-native TAK — full SA from any device, zero ATAK install required."},
              {icon:"🛰️", title:"Geo Stack", desc:"TimescaleDB, Tile38, Valhalla routing, Nominatim, QGIS — full GIS sovereign."},
              {icon:"🤖", title:"AI Agents", desc:"Legacy, Oracle, Forge, Guardian — 12 specialized agents on the NATS bus."},
              {icon:"📹", title:"MediaMTX", desc:"Live video ingestion — drones, cameras, body cams. RTSP/WebRTC native."},
              {icon:"🔊", title:"Voice Bridge", desc:"Push-to-talk over Murmur. Zero-latency comms on the fabric."},
              {icon:"📊", title:"ClickHouse", desc:"10-year event retention. Query any sensor, any moment, in milliseconds."},
            ].map(c => (
              <div className="card" key={c.title}>
                <div className="card-icon">{c.icon}</div>
                <h3 style={{marginBottom:"0.75rem"}}>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:"3rem",textAlign:"center"}}>
            <a href="/platform" className="btn-primary">Full Platform Overview →</a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* EDUCATION CTA */}
      <section style={{background:"var(--black-2)"}}>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center"}}>
          <div>
            <div className="tag">Education</div>
            <h2 style={{marginBottom:"1rem"}}>Learn the sovereign stack</h2>
            <p style={{marginBottom:"2rem"}}>
              The Sovereign Stack course is the actual OneMind infrastructure — documented as a curriculum.
              You build what we run. No toy demos, no fake data.
            </p>
            <a href="/education" className="btn-primary">View Curriculum →</a>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            {["NATS substrate + agent mesh","TAK server deployment","AI agent orchestration","ClickHouse time machine","Live geo operations"].map(item => (
              <div key={item} style={{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",background:"var(--black-3)",borderRadius:"6px",border:"1px solid var(--line)"}}>
                <div style={{width:8,height:8,borderRadius:"50%",background:"var(--red-bright)",flexShrink:0}} />
                <span style={{fontSize:"0.95rem"}}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FOOTER */}
      <footer>
        <p style={{color:"var(--dim)"}}>© 2026 OneMind OS. All rights reserved.</p>
        <div style={{display:"flex",gap:"2rem"}}>
          <a href="https://github.com/onemindos" style={{color:"var(--dim)",textDecoration:"none",fontSize:"0.85rem"}}>GitHub</a>
          <a href="https://community.onemindos.com" style={{color:"var(--dim)",textDecoration:"none",fontSize:"0.85rem"}}>Community</a>
          <a href="/contact" style={{color:"var(--dim)",textDecoration:"none",fontSize:"0.85rem"}}>Contact</a>
        </div>
      </footer>
    </>
  );
}

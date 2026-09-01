import { PredictiveArcCanvas } from "@designcodeio/threeui/components/PredictiveArcCanvas";

export default function Education() {
  return (
    <>
      <section className="canvas-hero" style={{minHeight:"60vh"}}>
        <div className="canvas-bg">
          <PredictiveArcCanvas variant="signal-particles" hue={0} saturation={0.9} brightness={0.4} density={0.8} speed={0.6} />
        </div>
        <div className="hero-content">
          <div className="tag">Education</div>
          <h1>Build what<br /><span className="accent">we actually run</span></h1>
          <p style={{fontSize:"1.1rem",maxWidth:"560px",marginTop:"1rem"}}>
            The Sovereign Stack curriculum is the OneMind infrastructure documented as a course.
            No toy demos — you ship real NATS clusters, real AI agents, real geo stacks.
          </p>
          <div style={{display:"flex",gap:"1rem",marginTop:"2rem",flexWrap:"wrap"}}>
            <a href="https://community.onemindos.com" className="btn-primary" target="_blank" rel="noreferrer">Join Community →</a>
            <a href="/contact" className="btn-ghost">Enterprise Training</a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FLAGSHIP COURSE */}
      <section style={{background:"var(--black-2)"}}>
        <div className="container">
          <div className="tag">Flagship Course</div>
          <h2 style={{marginBottom:"0.5rem"}}>The Sovereign Stack</h2>
          <p style={{marginBottom:"3rem",maxWidth:"600px"}}>12 modules. From zero to a fully operational OneMind fabric. Every command is a real command. Every deployment is a real deployment.</p>
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            {[
              {num:"01", title:"NATS Fundamentals", desc:"Accounts, subjects, streams, KV — the bus that owns truth."},
              {num:"02", title:"Kubernetes on DOKS", desc:"Namespaces, services, ingress, persistent volumes. The real cluster."},
              {num:"03", title:"TAK Server Deployment", desc:"TAK 5.7 on DOKS, certificate auth, WebTAK, mission ops."},
              {num:"04", title:"AI Agent Mesh", desc:"Hermes profiles, NATS agent protocol, agent-to-agent comms."},
              {num:"05", title:"ClickHouse Time Machine", desc:"Schema design, ingestion pipelines, 10-year retention queries."},
              {num:"06", title:"Geo Stack", desc:"TimescaleDB, Tile38, Valhalla, self-hosted tiles — full GIS sovereign."},
              {num:"07", title:"Cloudflare Zero Trust", desc:"Tunnel ingress, Access policies, no open ports."},
              {num:"08", title:"Live Operations", desc:"Running a real TAK mission. SA, comms, sensor fusion, AI assist."},
            ].map(m => (
              <div key={m.num} style={{display:"flex",gap:"2rem",alignItems:"flex-start",padding:"1.5rem",background:"var(--black-3)",border:"1px solid var(--line)",borderRadius:"8px"}}>
                <div style={{fontSize:"2rem",fontWeight:800,color:"var(--red)",opacity:0.4,fontVariantNumeric:"tabular-nums",minWidth:"3rem"}}>{m.num}</div>
                <div>
                  <h3 style={{marginBottom:"0.4rem",fontSize:"1.1rem"}}>{m.title}</h3>
                  <p style={{fontSize:"0.9rem"}}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PRICING */}
      <section>
        <div className="container">
          <div className="tag">Pricing</div>
          <h2 style={{marginBottom:"3rem"}}>One community. Multiple paths.</h2>
          <div className="card-grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))"}}>
            {[
              {title:"Founding Member", price:"$49", period:"/mo", tag:"Limited", features:["Full community access","All courses included","Live cohort calls","Direct access to Zeus","Founding member badge"], highlight:false},
              {title:"Pro Member", price:"$99", period:"/mo", tag:"Most Popular", features:["Everything in Founding","Priority support","1:1 office hours (monthly)","Enterprise license path","Early access to new modules"], highlight:true},
              {title:"Enterprise", price:"$2,500", period:"/engagement", tag:"Custom", features:["Private deployment","Custom curriculum","Team training (up to 20)","Ongoing support contract","Source code access"], highlight:false},
            ].map(p => (
              <div key={p.title} className="card" style={p.highlight ? {borderColor:"var(--red)",background:"var(--black-2)"} : {}}>
                <div className="tag" style={p.highlight ? {background:"var(--red)",color:"var(--white)",border:"none"} : {}}>{p.tag}</div>
                <h3 style={{marginBottom:"0.25rem"}}>{p.title}</h3>
                <div style={{fontSize:"2.5rem",fontWeight:800,color:"var(--white)",marginBottom:"1.5rem"}}>
                  {p.price}<span style={{fontSize:"1rem",color:"var(--dim)",fontWeight:400}}>{p.period}</span>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"0.6rem",marginBottom:"2rem"}}>
                  {p.features.map(f => (
                    <div key={f} style={{display:"flex",alignItems:"center",gap:"0.75rem",fontSize:"0.9rem"}}>
                      <span style={{color:"var(--red-bright)"}}>✓</span>{f}
                    </div>
                  ))}
                </div>
                <a href="https://community.onemindos.com" className={p.highlight ? "btn-primary" : "btn-ghost"} target="_blank" rel="noreferrer" style={{width:"100%",justifyContent:"center"}}>
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p style={{color:"var(--dim)"}}>© 2026 OneMind OS.</p>
        <a href="/contact" className="btn-primary">Questions? Talk to us →</a>
      </footer>
    </>
  );
}

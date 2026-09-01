
export default function About() {
  return (
    <>
      <section style={{paddingTop:"calc(72px + 6rem)",paddingBottom:"6rem",paddingLeft:"clamp(1.5rem,5vw,4rem)",paddingRight:"clamp(1.5rem,5vw,4rem)",minHeight:"60vh",background:"var(--black-2)"}}>
        <div className="container">
          <div className="tag">About</div>
          <h1 style={{maxWidth:"800px",marginBottom:"2rem"}}>We build the <span className="accent">nervous system</span> for sovereign operations</h1>
          <p style={{fontSize:"1.1rem",maxWidth:"680px",lineHeight:"1.8"}}>
            OneMind OS is the infrastructure layer that turns open-source TAK into a closed-loop operations platform.
            We build the senses, the memory, the mind — everything the TAK chassis doesn't provide.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* THESIS */}
      <section>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start"}}>
          <div>
            <div className="tag">The Thesis</div>
            <h2 style={{marginBottom:"1.5rem"}}>TAK is the chassis. OneMind is the mind.</h2>
            <p style={{marginBottom:"1rem"}}>
              The TAK ecosystem is the most battle-tested SA platform on earth — government-funded, open-source, deployed in every major operation since 2010. But it's a chassis: tracks, chat, maps.
            </p>
            <p style={{marginBottom:"1rem"}}>
              OneMind adds what the chassis lacks: new senses (environmental sensors, drones, physio monitors), persistent memory (NATS + ClickHouse), and an AI mind that decides and acts.
            </p>
            <p>
              We don't compete with TAK. We don't clone Palantir. We build the extension layer — and we teach you how to run it.
            </p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            <div style={{padding:"2rem",background:"var(--black-3)",border:"1px solid var(--line)",borderRadius:"8px"}}>
              <div style={{fontSize:"0.75rem",color:"var(--red-bright)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"1rem"}}>Mission</div>
              <p style={{fontSize:"1rem",color:"var(--white)"}}>Make sovereign, AI-augmented operations accessible to every team — from homestead to enterprise.</p>
            </div>
            <div style={{padding:"2rem",background:"var(--black-3)",border:"1px solid var(--line)",borderRadius:"8px"}}>
              <div style={{fontSize:"0.75rem",color:"var(--red-bright)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"1rem"}}>Model</div>
              <p style={{fontSize:"1rem",color:"var(--white)"}}>Education-first. The curriculum is the product. We build in public — every system we teach is one we run.</p>
            </div>
            <div style={{padding:"2rem",background:"var(--black-3)",border:"1px solid var(--line)",borderRadius:"8px"}}>
              <div style={{fontSize:"0.75rem",color:"var(--red-bright)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"1rem"}}>Values</div>
              <p style={{fontSize:"1rem",color:"var(--white)"}}>Privacy by default. Self-hosted first. No SaaS dependencies. Your data, your hardware, your sovereignty.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FOUNDER */}
      <section style={{background:"var(--black-2)"}}>
        <div className="container">
          <div className="tag">Founder</div>
          <div style={{display:"grid",gridTemplateColumns:"200px 1fr",gap:"3rem",alignItems:"start",maxWidth:"800px"}}>
            <div style={{width:"180px",height:"180px",borderRadius:"8px",background:"var(--black-3)",border:"2px solid var(--red)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"4rem"}}>⚡</div>
            <div>
              <h2 style={{marginBottom:"0.5rem"}}>Zeus DeLaCruz</h2>
              <div style={{color:"var(--red-bright)",fontSize:"0.9rem",fontWeight:600,marginBottom:"1.5rem"}}>Founder & Architect</div>
              <p style={{marginBottom:"1rem"}}>
                Builder, operator, and architect of the OneMind fabric. Former background in operations and systems integration — now building the sovereign operations platform he always needed in the field.
              </p>
              <p>
                Believes that the most dangerous advantage isn't firepower — it's situational awareness. OneMind is the system that gives any team that edge.
              </p>
              <div style={{marginTop:"1.5rem"}}>
                <a href="https://zeusdelacruz.com" className="btn-ghost" target="_blank" rel="noreferrer">Personal Site →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p style={{color:"var(--dim)"}}>© 2026 OneMind OS.</p>
        <a href="/contact" className="btn-primary">Work with us →</a>
      </footer>
    </>
  );
}

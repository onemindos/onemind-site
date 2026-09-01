import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section style={{paddingTop:"calc(72px + 6rem)",paddingBottom:"6rem",paddingLeft:"clamp(1.5rem,5vw,4rem)",paddingRight:"clamp(1.5rem,5vw,4rem)",minHeight:"80vh"}}>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start"}}>
          <div>
            <div className="tag">Contact</div>
            <h1 style={{marginBottom:"1.5rem"}}>Let's <span className="accent">build together</span></h1>
            <p style={{fontSize:"1.05rem",marginBottom:"3rem"}}>
              Whether you're a team looking to deploy a sovereign ops stack, an enterprise evaluating TAK extensions, or just getting started — we want to hear from you.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
              {[
                {icon:"📧", label:"Email", val:"zeus@onemindos.com"},
                {icon:"🌐", label:"Community", val:"community.onemindos.com"},
                {icon:"💻", label:"GitHub", val:"github.com/onemindos"},
              ].map(c => (
                <div key={c.label} style={{display:"flex",alignItems:"center",gap:"1rem"}}>
                  <div style={{width:44,height:44,borderRadius:"8px",background:"var(--black-3)",border:"1px solid var(--line)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"}}>{c.icon}</div>
                  <div>
                    <div style={{fontSize:"0.75rem",color:"var(--dim)",textTransform:"uppercase",letterSpacing:"0.1em"}}>{c.label}</div>
                    <div style={{color:"var(--white)",fontSize:"0.95rem"}}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:"var(--black-3)",border:"1px solid var(--line)",borderRadius:"8px",padding:"2.5rem"}}>
            {sent ? (
              <div style={{textAlign:"center",padding:"3rem 0"}}>
                <div style={{fontSize:"3rem",marginBottom:"1rem"}}>✅</div>
                <h3 style={{marginBottom:"0.5rem"}}>Message sent</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{display:"flex",flexDirection:"column",gap:"1.25rem"}}>
                <h3 style={{marginBottom:"0.5rem"}}>Send a message</h3>
                {[
                  {id:"name",label:"Name",type:"text",placeholder:"Your name"},
                  {id:"email",label:"Email",type:"email",placeholder:"you@example.com"},
                ].map(f => (
                  <div key={f.id} style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
                    <label style={{fontSize:"0.8rem",fontWeight:600,color:"var(--dim)",textTransform:"uppercase",letterSpacing:"0.08em"}}>{f.label}</label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder} required
                      style={{background:"var(--black-2)",border:"1px solid var(--line)",borderRadius:"4px",padding:"10px 14px",color:"var(--white)",fontSize:"0.95rem",outline:"none"}} />
                  </div>
                ))}
                <div style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
                  <label style={{fontSize:"0.8rem",fontWeight:600,color:"var(--dim)",textTransform:"uppercase",letterSpacing:"0.08em"}}>What are you building?</label>
                  <textarea rows={5} placeholder="Tell us about your use case..." required
                    style={{background:"var(--black-2)",border:"1px solid var(--line)",borderRadius:"4px",padding:"10px 14px",color:"var(--white)",fontSize:"0.95rem",outline:"none",resize:"vertical"}} />
                </div>
                <button type="submit" className="btn-primary" style={{marginTop:"0.5rem"}}>Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <div className="divider" />
      <footer>
        <p style={{color:"var(--dim)"}}>© 2026 OneMind OS.</p>
        <a href="/" style={{color:"var(--dim)",textDecoration:"none",fontSize:"0.85rem"}}>← Back to Home</a>
      </footer>
    </>
  );
}

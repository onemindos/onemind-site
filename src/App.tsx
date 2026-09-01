import { TopoField } from "@designcodeio/threeui/components/TopoField";
import { PredictiveArcCanvas } from "@designcodeio/threeui/components/PredictiveArcCanvas";
import { ConnectivityGraph } from "@designcodeio/threeui/components/ConnectivityGraph";

export default function App() {
  return (
    <>
      <header>
        <div className="wrap">
          <a className="logo" href="/">
            ONEMIND<span>OS</span>
          </a>
          <nav>
            <a href="#platform">Platform</a>
            <a href="#loop">How It Works</a>
            <a href="#education">Education</a>
            <a href="#enterprise">Enterprise</a>
          </nav>
        </div>
      </header>

      <div className="hero">
        <div className="hero-bg">
          <TopoField mode="dark" opacity={0.55} speed={0.6} density={0.8} />
        </div>
        <div className="hero-glow" />
        <div className="wrap">
          <div className="tag">// Sovereign Operations</div>
          <h1>
            Situational awareness for <em>everything</em> you operate.
          </h1>
          <p className="sub">
            OneMind OS is an open-source operations platform built on the TAK
            ecosystem — fusing sensors, drones, robotics, environmental data,
            and AI agents into one live picture. Your land, your crew, your
            machines. Your metal.
          </p>
          <div className="cta-row">
            <a className="cta" href="#education">
              Start Learning
            </a>
            <a className="cta ghost" href="#platform">
              Explore the Platform
            </a>
          </div>
        </div>
      </div>

      <section id="platform">
        <div className="wrap">
          <div className="kicker">01 // Platform</div>
          <h2>One fabric. Every sense.</h2>
          <p className="lead">
            TAK is the battle-tested situational awareness chassis used across
            allied forces. OneMind extends it into civilian operations —
            homesteads, farms, work sites, SAR teams — with the layers it never
            had.
          </p>
          <div className="grid">
            <div className="card">
              <span className="n">SENSE</span>
              <h3>Environmental Sensing</h3>
              <p>
                Soil, air, water, microclimate, and camera feeds on a live map.
                Know the state of your ground without walking it.
              </p>
            </div>
            <div className="card">
              <span className="n">SENSE</span>
              <h3>Physiological Monitoring</h3>
              <p>
                Wearables stream operator status — heart rate, exertion, heat
                stress — so the team lead sees when a person is cooking, not
                just where they are.
              </p>
            </div>
            <div className="card">
              <span className="n">FUSE</span>
              <h3>NATS Message Bus</h3>
              <p>
                Every device, agent, and human publishes to one nervous system.
                JetStream persistence, 10-year event memory in ClickHouse.
              </p>
            </div>
            <div className="card">
              <span className="n">DECIDE</span>
              <h3>AI Agents</h3>
              <p>
                Autonomous agents watch the bus, correlate events, and raise
                decisions with context — not dashboards you stare at, a mind
                that watches with you.
              </p>
            </div>
            <div className="card">
              <span className="n">ACT</span>
              <h3>Drones &amp; Robotics</h3>
              <p>
                MAVLink drones and ROS2 robots take tasking from the same
                picture they feed. Close the loop: sense, decide, act.
              </p>
            </div>
            <div className="card">
              <span className="n">MAP</span>
              <h3>Sovereign Map Stack</h3>
              <p>
                Self-hosted basemaps, orthomosaics, routing, and geofences. No
                Google. No Esri. No terms-of-service rug-pull.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="loop">
        <div className="sec-bg">
          <PredictiveArcCanvas variant="signal-particles" mode="dark" density={0.5} speed={0.5} />
        </div>
        <div className="wrap">
          <div className="kicker">02 // Architecture</div>
          <h2>The loop that runs itself</h2>
          <p className="lead">
            Dashboards are table stakes. OneMind runs a closed loop — the
            difference between watching an operation and operating it.
          </p>
          <div className="loop">
            <div className="step"><b>SENSE</b><span>devices, sensors, humans</span></div>
            <div className="step"><b>FUSE</b><span>bus + memory + correlation</span></div>
            <div className="step"><b>DECIDE</b><span>AI agents with context</span></div>
            <div className="step"><b>ACT</b><span>drones, robots, alerts</span></div>
          </div>
          <div className="stats">
            <div className="stat"><b>10-yr</b><span>Event Memory</span></div>
            <div className="stat"><b>3-node</b><span>HA Message Bus</span></div>
            <div className="stat"><b>MIT/Apache</b><span>License Stack</span></div>
            <div className="stat"><b>100%</b><span>Self-Hostable</span></div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="wrap">
          <div className="kicker">03 // Education</div>
          <h2>Learn to build it. Then run it.</h2>
          <p className="lead">
            The Sovereign Stack — our flagship program — walks you from zero to
            a running sovereign operations stack on your own hardware. Built in
            public, taught from production.
          </p>
          <table>
            <thead>
              <tr><th>Track</th><th>What you get</th><th>Format</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Community</td>
                <td>Weekly builds, live missions, the build-in-public feed, direct access to the team</td>
                <td>Live now — founding member pricing</td>
              </tr>
              <tr>
                <td>Sovereign Stack</td>
                <td>4-week cohort: NATS bus, sensor pipeline, TAK map, AI agents. A running stack on your metal by day 28.</td>
                <td>Cohort, live</td>
              </tr>
              <tr>
                <td>Consulting</td>
                <td>Done-with-you architecture and deployment for your operation</td>
                <td>1:1</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: 28 }}>
            <a className="cta" href="https://community.onemindos.com">
              Join the Community
            </a>
          </p>
        </div>
      </section>

      <section id="enterprise">
        <div className="sec-bg">
          <ConnectivityGraph opacity={0.3} />
        </div>
        <div className="wrap">
          <div className="kicker">04 // Enterprise</div>
          <h2>Deploy it on your operation</h2>
          <p className="lead">
            Farms, energy sites, construction, SAR, disaster response —
            anywhere humans and machines work across land. OneMind deploys on
            your infrastructure, air-gapped if you need it. Your data never
            leaves your metal unless you say so.
          </p>
          <p>
            <a className="link" href="mailto:zeus@onemindos.com">zeus@onemindos.com</a>
            {" — tell us what you operate. We'll tell you what the loop looks like on it."}
          </p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>© 2026 OneMind OS. Built in public.</div>
          <div>
            <a className="link" href="https://github.com/onemindos">GitHub</a>
            {" · "}
            <a className="link" href="mailto:zeus@onemindos.com">zeus@onemindos.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}

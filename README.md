# onemind-site — onemindos.com

**Live:** https://onemindos.com  
**Repo:** https://github.com/onemindos/onemind-site  
**Branch:** `main` → auto-deploys to Droplet via self-hosted runner on every push  
**Last major commit:** `880ba3d` — click-toggle nav, robotics lane, 39 routes

---

## What this site is

The public-facing product and platform directory for **OneMind OS** — a sovereign situational-awareness extension layer built on top of the TAK ecosystem (ATAK, CloudTAK, TAK Server). This is not a marketing brochure — it is a living registry of every agent, plugin, robot system, and infrastructure component on the OneMind fabric.

**Audience:** operators, developers, and integrators who want to connect to or build on the OneMind fabric.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.3.4 (App Router) |
| Output | Standalone Node.js server (`output: "standalone"`) — Docker/Droplet |
| 3D Graphics | React Three Fiber + Three.js 0.185 |
| Animation | Framer Motion 13 + GSAP 3 |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"` syntax — NOT v3) |
| Icons | lucide-react |
| Language | TypeScript 5, React 19 |
| Node | v20 (CI) / v24 (local Mac) |
| Package manager | npm |

**Critical Tailwind note:** This project uses Tailwind v4. The CSS entry point is `app/globals.css` and uses `@import "tailwindcss"` + `@theme {}` blocks. Do NOT use `@tailwind base/components/utilities` or `@layer components { @apply }` — those are v3 syntax and will break the build.

---

## Design system

Defined in `app/globals.css`:

| Token | Value | Usage |
|---|---|---|
| Primary red | `#b91c1c` / `#8B0000` | Accents, CTAs, highlights |
| Background | `#050607` | Page background |
| Surface | `#0a0c0e` | Section alternating bg |
| Card | `#0d0f11` | Card backgrounds |
| Border | `#1a1a1a` / `#1f1f1f` | Dividers |
| Text primary | `white` | Headings |
| Text secondary | `#9ca3af` | Body copy |
| Text muted | `#6b7280` | Labels, meta |
| Font | System stack (Inter-like) | All text |

Reusable classes: `.btn-red`, `.btn-outline-red`, `.btn-secondary`, `.card`, `.tag`, `.tag-solid`, `.section`, `.container-wide`, `.display-lg`, `.subheading`

---

## Project structure

```
app/
├── layout.tsx                  # Root layout — Nav + metadata
├── globals.css                 # Tailwind v4 design system
├── page.tsx                    # Home page (imports section components)
│
├── components/
│   ├── Nav.tsx                 # ⭐ Click-toggle mega-menu (Platform/Agents/Plugins/Robotics)
│   ├── Footer.tsx              # Multi-column footer
│   ├── Globe3D.tsx             # React Three Fiber globe — particle field + arc lines
│   ├── HeroSection.tsx         # Hero with Globe3D + video placeholder
│   ├── ClosedLoopSection.tsx   # Sense/Fuse/Decide/Act loop
│   ├── CapabilitiesSection.tsx # 6 capability cards
│   ├── EducationCTASection.tsx # Education call-to-action
│   ├── about/                  # About page section components
│   └── contact/                # Contact page section components
│
├── data/                       # ⭐ SINGLE SOURCE OF TRUTH — edit here, not in pages
│   ├── agents.ts               # All 12 Hermes agents (slug, role, capabilities, NATS address...)
│   ├── plugins.ts              # All plugins (CloudTAK, ATAK, TAK Server, Hermes)
│   └── robots.ts               # All robot/drone systems (Sentinel, UGV, Gateway, DimOS)
│
├── about/page.tsx              # /about
├── contact/page.tsx            # /contact
├── education/page.tsx          # /education
├── platform/page.tsx           # /platform
├── tools/page.tsx              # /tools
├── nats/page.tsx               # /nats — technical NATS architecture reference
│
├── agents/
│   ├── page.tsx                # /agents — full 12-agent roster
│   └── [slug]/page.tsx         # /agents/[name] — individual agent profile
│
├── plugins/
│   ├── page.tsx                # /plugins — 4-category plugin directory
│   └── [category]/[slug]/      # /plugins/cloudtak/legacy-ai etc.
│       └── page.tsx
│
└── robotics/
    ├── page.tsx                # /robotics — drone/UGV/robot directory + TAK integration
    └── [slug]/page.tsx         # /robotics/drone-sentinel etc.
```

---

## All live routes (39 total)

```
/                           Home — 3D globe, closed loop, capabilities, education CTA
/about                      Company thesis, founder, values
/contact                    Smart form, channels, enterprise
/platform                   Platform deep-dive — 6 feature sections
/education                  Sovereign Stack curriculum + pricing
/tools                      Fabric tools directory (agenttap, NATS CLI, etc.)
/nats                       NATS accounts, streams, subjects, connect guide

/agents                     12-agent roster with status + bus addresses
/agents/legacy              Legacy (Mother) — cloud sovereign AI
/agents/legacy-edge         Legacy Edge — Mac edge extension
/agents/oracle              Intelligence & recon
/agents/guardian            Security & perimeter
/agents/forge               Master dev orchestrator
/agents/empire              Business operations
/agents/haven               Health & wellness
/agents/heritage            History & knowledge
/agents/grid                Infrastructure & power
/agents/spartan             Physical training
/agents/trinity             Finance & resources
/agents/eden                Homestead & agriculture

/plugins                    Plugin directory — 4 categories
/plugins/cloudtak/legacy-ai         CloudTAK Legacy AI Panel
/plugins/cloudtak/omos-fabric       CloudTAK Fabric Layer
/plugins/cloudtak/omos-intel        CloudTAK Intel Fusion
/plugins/cloudtak/omos-video        CloudTAK Video/VMS
/plugins/cloudtak/omos-buildings    CloudTAK Buildings
/plugins/cloudtak/omos-community    CloudTAK Community
/plugins/atak/...                   ATAK Android plugins
/plugins/tak-server/...             TAK Server plugins
/plugins/hermes/...                 Hermes MCP/skills plugins

/robotics                   Robot/drone directory + TAK integration diagram
/robotics/drone-sentinel    Aerial ISR drone — MAVLink, RTSP, CoT
/robotics/ugv-rover         Ground rover — ROS 2, LiDAR, thermal
/robotics/robot-gateway     ROS 2 ↔ NATS bridge
/robotics/dimos             DimOS robot OS
```

---

## Data-driven content — how to add things

**Adding an agent:** Edit `app/data/agents.ts`, add one object to the `agents` array. Push. A new page at `/agents/[slug]` appears automatically — no other files to touch.

**Adding a plugin:** Edit `app/data/plugins.ts`, add one object. Push. Page appears at `/plugins/[category]/[slug]`.

**Adding a robot system:** Edit `app/data/robots.ts`, add one object. Push. Page appears at `/robotics/[slug]`.

The data files are fully typed — TypeScript will catch missing required fields at build time.

---

## Nav structure

`app/components/Nav.tsx` — **click-toggle** (NOT hover). Clicking a top-level item opens its dropdown; clicking elsewhere or another item closes it. Mobile hamburger at <900px.

```
ONEMIND   Platform ▾   Agents ▾   Plugins ▾   Robotics ▾   Education   About   Contact   [Get Started]

Platform ▾                    Agents ▾                    Plugins ▾                 Robotics ▾
Operations | Infrastructure   Sovereign | Specialist       Platform | Developer       Systems | Integration
```

**Do not revert to hover-based nav.** The hover-gap bug (dropdown collapses before user can click a link) is fixed by the click-toggle approach. Any regression here makes the site unusable.

---

## Deploy pipeline

```
git push origin main
  → GitHub Actions (.github/workflows/deploy.yml)
  → self-hosted runner on onemind-web Droplet (138.197.0.156)
  → docker compose up -d --build
  → health check passes
  → Live at https://onemindos.com (~2 min total)
```

**No environment variables required** — no API keys in the build.

---

## Local development

```bash
# Prerequisites: Node v20+, npm
cd ~/onemind-site
npm install
npm run dev
# → http://localhost:3000
```

Build and preview:
```bash
npm run build
npx serve .next/standalone
```

---

## DNS & hosting

| Record | Type | Value | Proxied |
|---|---|---|---|
| `onemindos.com` | A | `138.197.0.156` | Yes (orange cloud) |
| `www.onemindos.com` | A | `138.197.0.156` | Yes (orange cloud) |

DNS managed in Cloudflare (zone `16e6fe93195adf6b768070857940115a`), orange-cloud (proxied). Cloudflare handles SSL (Flexible mode) — origin serves HTTP on port 80, Cloudflare terminates HTTPS for users.

**Hosting:** DigitalOcean Droplet `onemind-web` (138.197.0.156, nyc3, 4GB/2vCPU, $24/mo). Nginx reverse proxy → Docker container on port 3000.

---

## Media placeholders

All placeholder slots (hero video, founder photo, drone footage, etc.) are documented in `MEDIA_PLACEHOLDERS.md` with:
- Exact file path where the asset goes
- Recommended spec (resolution, format, duration)
- Which component references it
- Replacement instructions

---

## Key files reference

| File | Purpose |
|---|---|
| `app/globals.css` | Design system — all colors, classes, Tailwind theme |
| `app/layout.tsx` | Root layout — Nav, font, metadata base |
| `app/data/agents.ts` | Agent registry (edit to add/update agents) |
| `app/data/plugins.ts` | Plugin registry (edit to add/update plugins) |
| `app/data/robots.ts` | Robot/drone registry (edit to add/update systems) |
| `app/components/Nav.tsx` | Mega-menu — click-toggle, mobile-responsive |
| `next.config.ts` | Static export config — do not remove `output: "export"` |
| `MEDIA_PLACEHOLDERS.md` | All placeholder assets documented |
| `.github/workflows/deploy.yml` | CI/CD — push to main = live in ~2 min |
| `_quarantine/` | Old files preserved but excluded from build — do not delete |

---

## What this site is NOT

- Not a WordPress site — there is no CMS, no admin panel, no database
- Not deployed on Vercel or GitHub Pages — it runs on a DigitalOcean Droplet
- Not using Tailwind v3 — do not use `@apply` or `@layer components`
- Not using Mapbox GL — MapLibre only (BSD license) for any map components added in future
- Not server-side rendered — `output: "export"` means pure static HTML, no API routes

---

## OneMind OS context

- **TAK ecosystem:** ATAK (Android), CloudTAK (web), TAK Server 5.7/5.8
- **NATS bus:** 3-node HA cluster on DOKS, accounts: SYS / CORE / FABRIC / INTERFACE
- **Live cluster:** 22 namespaces DOKS (DigitalOcean Kubernetes)
- **CloudTAK:** `atoc.onemindos.dev` — forked `dfpc-coe/cloudtak`, repo `onemindos/omos-cloudtak`
- **Agent mesh:** 12 agents, all on Hermes Agent (Bedrock/Claude), bus `agents.prompt.hermes.zeus.*`
- **Legacy (Mother):** `agents.prompt.hermes.zeus.legacy` — cloud pod, always-on, authors this site
- **Legacy Edge:** `agents.prompt.hermes.zeus.legacy-edge` — Mac extension, handles local git pushes
- **Repo org:** `onemindos` on GitHub — onemind-site, zeus-site, omos-legacy, omos-infra, omos-core

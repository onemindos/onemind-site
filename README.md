# onemind-site

**onemindos.com** — the OneMind OS platform site.

Sovereign operations for the physical world: the open-source platform, plugin ecosystem, Sovereign Stack education, and enterprise solutions built on the TAK ecosystem.

## Stack
- Base: [ThreeUI](https://github.com/MengTo/threeui) (MIT) — dark, 3D, defense-tech aesthetic. Catalog routes stripped, real marketing pages composed from the shell + component families.
- Build: Vite + React + TypeScript
- Deploy: Cloudflare Pages (git push = deploy), custom domain `onemindos.com`

## Site map (planned)
- Landing: hero, problem, product planes (sense / fuse / decide / act), plugin map
- Education: Sovereign Stack course + community at `community.onemindos.com` (Circle)
- Enterprise: contact + live demo portal links (`onemindos.dev`)
- Plugin docs microsites

## Pipeline
1. Legacy (AI agent) authors changes and pushes to `main`
2. Cloudflare Pages auto-builds and deploys
3. Zeus reviews preview URLs — zero code maintenance on the human side

## License
MIT. Bundled third-party assets (ThreeUI fonts, Three.js runtime) keep their upstream licenses (OFL / MIT).

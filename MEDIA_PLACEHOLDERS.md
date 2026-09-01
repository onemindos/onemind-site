# Media Placeholders — OneMind OS Website

This file documents every placeholder in the codebase and exactly how to replace it.

---

## How to replace any placeholder

1. Drop the real file into the `/public/` folder (or `/public/media/` for videos)
2. Update the reference in the component listed below
3. `git push` — pipeline deploys automatically in ~2 minutes

---

## Logo

| File | Location | Spec |
|---|---|---|
| `PLACEHOLDER_LOGO` | `app/components/Nav.tsx` | SVG preferred. Dark background. Recommend: white wordmark + crimson mark. Max height 40px. |

---

## Hero Section (Home page)

| Placeholder | File | How to replace |
|---|---|---|
| `PLACEHOLDER_HERO_VIDEO` | `app/components/HeroSection.tsx` | Drop `hero-loop.mp4` into `/public/media/`. H.264, 1920×1080, 10-30s loop, no audio, <15MB. |
| `PLACEHOLDER_HERO_DRONE_MODEL` | `app/components/Globe3D.tsx` | Replace the geometry with a `.glb` drone model. Drop into `/public/models/drone.glb`. |

---

## Platform Page

| Placeholder | File | How to replace |
|---|---|---|
| `PLACEHOLDER_OVERWATCH_SCREENSHOT` | `app/platform/page.tsx` | Screenshot of CloudTAK running. 1600×900px. Drop as `/public/img/overwatch.png`. |
| `PLACEHOLDER_NATS_DASHBOARD_SCREENSHOT` | `app/platform/page.tsx` | Screenshot of NATS dashboard. 1600×900px. Drop as `/public/img/nats-dashboard.png`. |
| `PLACEHOLDER_CLICKHOUSE_SCREENSHOT` | `app/platform/page.tsx` | Screenshot of ClickHouse query. 1600×900px. Drop as `/public/img/clickhouse.png`. |
| `PLACEHOLDER_AGENTS_SCREENSHOT` | `app/platform/page.tsx` | Screenshot of agent mesh / agenttap. Drop as `/public/img/agents.png`. |
| `PLACEHOLDER_PLATFORM_DEMO_VIDEO` | `app/platform/page.tsx` | Platform walkthrough video. Drop as `/public/media/platform-demo.mp4`. |

---

## Education Page

| Placeholder | File | How to replace |
|---|---|---|
| `PLACEHOLDER_ZEUS_PHOTO` | `app/education/page.tsx` | Professional photo of Zeus. 800×800px square. Drop as `/public/img/zeus-photo.jpg`. |
| `PLACEHOLDER_COURSE_THUMBNAIL` | `app/education/page.tsx` | Sovereign Stack course thumbnail. 1280×720px. Drop as `/public/img/course-sovereign-stack.jpg`. |

---

## About Page

| Placeholder | File | How to replace |
|---|---|---|
| `PLACEHOLDER_ZEUS_HEADSHOT` | `app/about/page.tsx` | High-res headshot of Zeus. 800×800px. Drop as `/public/img/zeus-headshot.jpg`. |
| `PLACEHOLDER_TEAM_PHOTO` | `app/about/page.tsx` | Team / ops photo. 1600×900px. Drop as `/public/img/team.jpg`. |

---

## OG / Social Images

| Placeholder | File | How to replace |
|---|---|---|
| `PLACEHOLDER_OG_IMAGE` | `app/layout.tsx` | Social share image. 1200×630px. Drop as `/public/img/og-onemind.png`. |

---

## 3D Models

| Placeholder | File | Spec |
|---|---|---|
| `PLACEHOLDER_DRONE_GLB` | `app/components/Globe3D.tsx` | GLTF/GLB format. Max 5MB. Recommend: DJI Matrice or generic quad. Free source: sketchfab.com |
| `PLACEHOLDER_ROBOT_GLB` | `app/components/RobotScene.tsx` | GLTF/GLB humanoid or wheeled robot. Max 8MB. |

---

## Videos

All videos should be:
- Format: MP4 (H.264) + WebM (VP9) for browser compatibility
- No audio track (hero loops are silent)
- Compressed: use HandBrake or `ffmpeg -crf 28`
- Hosted: `/public/media/` for <20MB files, Cloudflare Stream for larger

```bash
# Compress a video for web
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -an output.mp4
```

---

## Fonts

Currently using Inter (Google Fonts, loaded via next/font). No replacement needed unless you want a custom brand font.

---

## Color palette (DO NOT CHANGE without design review)

```
--red:        #8B0000  (deep crimson — primary brand)
--red-bright: #b91c1c  (hover/accent)
--black:      #050607  (background)
--white:      #f5f5f5  (text)
--dim:        #6b7280  (secondary text)
```

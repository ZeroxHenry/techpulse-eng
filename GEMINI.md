# TechBlips — Antigravity / Gemini Rules

## Project overview
- **Site**: techblips.com — Hugo + PaperMod tech blog + interactive radar
- **Repo**: github.com/techblips/techpulse-eng
- **Branch**: main (direct push)
- **Deploy**: Cloudflare Pages (main push = auto deploy)
- **Brand colors**: #6c5ce7 (purple), #0ea5e9 (blue), #f59e0b (amber), #10b981 (green)

## Absolute rules
1. **No AI-generated feel** — avoid symmetrical, mechanical, repetitive patterns
2. **No Korean comments in code** — code and comments in English
3. **Preserve file structure** — check existing files before creating new ones
4. **Never modify PaperMod theme files** — do NOT touch themes/ folder
5. **Commit messages in English** — short and clear
6. **PaperMod head extension** — use layouts/partials/extend_head.html, NOT `{{ define "head" }}`

## File structure (editable files only)
```
assets/css/extended/custom.css    — main CSS (700+ lines)
static/css/radar.css              — radar page CSS
static/js/radar.js                — D3.js radar visualization
static/logo.svg                   — SVG logo
static/favicon.svg                — SVG favicon
layouts/partials/extend_head.html — <head> extension (fonts, meta, CSS)
layouts/partials/footer.html      — footer (newsletter include)
layouts/partials/newsletter.html  — Buttondown newsletter form
layouts/partials/author-card.html — author profile card
layouts/_default/single.html      — PaperMod single override (includes author-card)
layouts/radar/single.html         — radar main page layout
layouts/radar-blip/single.html    — blip detail page layout
content/posts/*.md                — blog posts (19)
content/radar/blips/*.md          — radar blip pages (30)
data/radar/2026-q2.json           — radar data (JSON)
static/data/radar/2026-q2.json    — same file (browser copy)
hugo.toml                         — Hugo config
```

## CSS variable system
```css
:root {
  --accent: #6c5ce7;
  --accent-hover: #5a4bd1;
  --accent-light: #ede9fe;
  --text-primary: #1a1a2e;
  --text-secondary: #64748b;
  --bg-surface: #ffffff;
  --bg-page: #fafbfc;
  --border-light: #e8ecf1;
  --radius: 12px;
}
```
Dark mode: override variables under `.dark` class

## Radar quadrant colors
- Quadrant 0 (AI & ML): #6c5ce7
- Quadrant 1 (Cloud & Infrastructure): #0ea5e9
- Quadrant 2 (Developer Tools): #f59e0b
- Quadrant 3 (Platforms & APIs): #10b981

## Design reference
Vercel, Linear, Raycast level — minimal + distinctive tone

## Known issues (updated 2026-04-04)
- Blip rendering bug: FIXED (removed transform:scale(0) animation)
- Author-card: FIXED (included in layouts/_default/single.html)
- Radar CSS loading: FIXED (conditional load in extend_head.html)
- Homepage section: FIXED (mainSections = ["posts"] in hugo.toml)

## Automation
8 GitHub Actions workflows run automatically:
- Daily briefing (morning), nightly research, weekly content brief,
  weekly health check, quarterly radar update, PR auto-review, deploy
- See .github/workflows/ for details

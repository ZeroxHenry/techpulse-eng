# Antigravity Session Prompts

## Every session start (required)
```
This repo is 0xhenry.dev — a Hugo + PaperMod tech blog and radar platform.
Read GEMINI.md first and follow all rules.
Work on main branch. Commit + push when done.
Cloudflare Pages auto-deploys on main push.
```

---

## Current automation system

This site runs a 24/7 AI automation pipeline:
- **Morning 06:00 KST**: daily-briefing.yml creates GitHub Issue with overnight changes
- **Midnight 00:00 KST**: nightly-research.yml creates research PR with topic candidates
- **Monday 18:00 KST**: content-brief.yml creates weekly content brief PR
- **Friday 09:00 KST**: site-health.yml runs Hugo build + content validation
- **Quarterly**: radar-update.yml suggests radar blip movements
- **On PR**: pr-auto-review.yml AI reviews all PRs automatically
- **On main push**: deploy.yml builds Hugo + deploys to Cloudflare Pages

Your role: Handle design polish, content quality, and visual improvements.
Claude Code handles: workflows, data, templates, radar logic.
Human handles: final approval, merge, business decisions.

---

## Task priorities

### P0: Weekly design polish (repeating)
```
Read GEMINI.md rules first.

Checklist:
1. assets/css/extended/custom.css — post card hover interactions, spacing
2. static/css/radar.css — blip hover effects, filter button styles
3. Dark mode radar visibility
4. Mobile responsive below 860px
5. Newsletter subscription form styling
6. commit + push
```

### P1: Blog post quality review (repeating)
```
Review content/posts/ blog posts and improve quality.

Rules:
- Fix AI-sounding sentences
- Shorten long introductions
- Verify code example accuracy
- Keep description under 150 characters
- Only 3-5 posts per session
- Do NOT create new posts or rename files
```

### P2: Radar page visual improvements
```
Improve the radar page visual design at /radar/current/.

Focus areas:
1. Blip tooltip design (currently basic)
2. Quadrant label positioning and readability
3. Ring label styling
4. Sidebar blip list — card layout with hover states
5. Legend design — clean, minimal
6. Mobile touch experience
7. commit + push
```

### P3: Q3 radar preparation (quarterly)
```
Based on data/radar/2026-q2.json, prepare Q3 2026 radar.

1. Create data/radar/2026-q3.json
2. Suggest blip movements (Assess->Trial, etc.)
3. Add 3-5 new technologies
4. One-line rationale for each change
5. Copy to static/data/radar/2026-q3.json
6. Do NOT change content/radar/current.md yet
```

### P4: Homepage and landing improvements
```
Improve the homepage and overall site aesthetics.

Focus:
1. Hero section — make it more engaging
2. Post card grid — spacing, shadows, hover
3. Category pages — layout consistency
4. Footer — clean up, add social links if available
5. Typography — ensure Inter font loads properly
6. commit + push
```

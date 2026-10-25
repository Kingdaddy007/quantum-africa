# The Living Pavilion — local production contract

Objective: a private, mobile-first Summit invitation that makes property, virtual experience, AI/robotics and people feel connected. R2 reversible prototype, no backend. Only this folder is mutable; no installs or external effects.

Visual thesis: a contemporary Lagos courtyard imagined as a silver-and-mineral architectural maquette, with a woven shade canopy and an ice-blue digital counterpart. Original geometry is illustrative, never a venue representation. The architectural vocabulary draws on Oshinowo Studio's stated Lagos-rooted practice and the brief's courtyard/shade/material direction, without copying a building or claiming a traditional pattern.

Content: arrival → pavilion opens → three editorial experiences → company and seven published speakers → attendance comparison → separate sponsor route → resolved invitation. Two Manrope weights; navy, ice, cyan, warm mineral; generous unboxed compositions.

Interaction thesis: a single reversible sectional reveal; restrained type arrival; precise selection/focus feedback. Normal scroll, no loading gate, no ambient loops. Existing illustrative clips are opt-in; posters are the default. One plays at a time, offscreen media pauses.

## Scroll storyboard / property ownership

| Beat | Progress across 140svh scroll | Meaning / visible state | Hold and handoff |
|---|---|---|---|
| Arrival | 0–.12 | Complete event identity, date/city, purpose, CTA; assembled pavilion | Copy rests; scene settles once over 900ms |
| Physical | .12–.36 | Opening headline leaves; physical place caption, same pavilion | Canopy begins lifting after readable arrival |
| Virtual | .36–.68 | Cyan counterpart appears inside original footprint; facade opens | Caption crossfade has no simultaneous readable overlap |
| People | .68–1 | People and demo tables become visible; lifted roof persists | Complete scene holds .85–1 then native sticky release |

Scroll owns scene transforms and caption opacity; initial CSS animation owns only an outer arrival wrapper; no smoothing loop. Resize and deep entry recalculate from actual bounds. Static/reduced-motion: no pin, assembled scene, three ordinary explanatory lines. All editorial content visible without JS. Menu uses native details; ticket details use native radio controls with both prices available without JS.

Evidence plan: actual iab 390×844, 360px, desktop; forward/reverse and midpoint scroll, deep-link/reload, menu/keyboard, Standard/VIP selection, static/reduced-motion, video poster/failure, console/resource and overflow checks. Physical device/network performance and creative acceptance remain unverified.

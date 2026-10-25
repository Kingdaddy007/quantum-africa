# START HERE — Quantum Africa website laptop handoff

## Immediate status: PAUSED FOR LAPTOP TRANSFER

25 October 2026. The user paused work because the laptop battery was at 9% and data was low. They authorised pushing this workspace to https://github.com/Kingdaddy007/quantum-africa.git so they can continue on another laptop. They clarified: **do not transfer all videos; transfer only the videos required by the website.** Do not resume editing until the user resumes on the other laptop. No deployment is authorised yet.

## Run the current website

The current page is in `website-summit-audit-2026-10-24/concept-hero-film/`.

```powershell
cd website-summit-audit-2026-10-24/concept-hero-film
node server.mjs
```

Open http://127.0.0.1:4360/ in the Codex in-app browser. This static website requires Node, no package installation or build. The server binds only to localhost. Do not control the whole laptop, Chrome, Edge or live Blender. Use only the Codex in-app browser for UI work.

The working site has an automatic logo opening, hero film, countdown, physical headset entry into a supplied VR film, genuine 3D robot then photo pullback, seven real-speaker cutouts, networking/panel scroll scene, workshops model, partnership map, VR entertainment, tickets/accommodation, sponsorship, FAQ/contact and footer curtain reveal.

The user accepted the speaker cutouts enthusiastically, accepted mobile robotics and the latest networking direction, and is reviewing the rest. The latest corrections below are **not yet applied**. Work since that request has been inspection/research only; then the user requested this urgent transfer.

## Resume with these exact corrections

1. Remove all decorative section numbering and redundant eyebrow headings: Robotics/AI numbered label, Technology in the room, speaker numbered label, workshop/partnership/ticket/sponsor/FAQ section prefixes. Keep the actual large headings. Remove Standard/VIP 01/02 markers, opportunity/tier/mode ordinal labels where merely decorative. Keep functional DOM IDs if a script uses them; e.g. headset `#chapter` and speaker `#speaker-position` can be hidden instead of removed.
2. Networking/panels: remove the duplicate labels on the pictures (01 Networking / 02 Panel sessions); keep one pair of labels in the lower controls, without numbers, with stronger weight. Remove the redundant top numbered section label. Preserve the liked scroll transition.
3. Speaker size: user personally likes it; friend suggested reducing it. Director recommendation already given: **keep current scale**, only fix a crop if it crowds text. Do not resize all portraits.
4. Use a consistent restrained masked line entrance for main headings, with the same easing/stagger as the hero. Respect existing per-section transform ownership, especially speaker-title and VR film typography. Do not overwrite those controllers. Prefer a separate `ui-polish.js/css` for shared wrappers and motion. Static/motion-off must remain readable.
5. Enlarge “TRY. ADJUST. UNDERSTAND.”; it is currently too tiny. Improve other business labels, particularly Event partners / Convened by / Co-organised by.
6. Move “Different strengths. Shared possibilities.” out of the awkward overlay beneath the central partner-map mark; use a deliberate caption below the SVG with proper spacing and legible size. No elaborate new motion needed for this caption.
7. Animate every native dropdown's opening/closing (partnership avenues, all sponsorship tiers, FAQ, preview disclosure), and optionally a short content/type entrance. Preserve native details semantics, keyboard/touch access, reversible quick toggles and reduced-motion behaviour. A measured-height WAAPI enhancement is an option; no new dependency.
8. Improve the organiser block: Quantum Africa with its real existing logo mark; TDEO Enterprises in a distinct co-organiser area. Find real logos where verifiable. Do not invent or use unrelated company logos. Improve the four-partner strip into a refined continuous right-to-left ribbon, with fade edges, pause or the existing global motion-off control, paused offscreen/reduced motion. Use one semantic name list and aria-hidden visual duplicates.
9. VR entertainment copy must clearly communicate **VR games and VR movies at this event**, alongside virtual property. The user rejected vague “Try another reality.” A clear proposed heading is “VR games. / VR movies.” with an explicit Summit sentence.
10. VR entertainment must switch automatically **on scroll**, games → movies, with a cinematic image reveal. No required button click. Suggested implementation: outer scroll chapter and sticky inner `.play-stage`; progress controls lateral movie-image wipe and caption states. Keep optional direct controls and ordinary-flow static mode showing both articles. This changes `completion.js`, the continuation HTML source and scoped CSS.
11. Keep the full admission/accommodation and sponsorship inclusions, real prices and contact routes. Do not add fake remaining-slot counts or claim all 100 places remain available. Do not multiply registration CTAs unnecessarily.

The user then said: **“Don't do much review; when you're done with the edits just tell me, I will check it myself.”** Do only proportionate basic checks, not another long multi-viewport audit. Tell them when ready; leave their preview to them.

## Logo research already done

- Official event partner spellings: **Raytech, Avorli, Go Holdings, Damisa**; co-organiser **TDEO Enterprises**. The user's voice transcription varied, so preserve the verified spellings.
- The official Summit HTML only supplied Quantum Africa logos, not these partner logos.
- No verified logo found for TDEO, Raytech, Avorli or Go Holdings. A same-name Avorli site in Los Angeles was found but its connection is unverified; do not assume it is the event partner.
- Damisa is corroborated by Thomas Pinter's public company association. Official site: https://www.damisa.xyz/ . It contains an image labelled **Damisa Icon** at https://framerusercontent.com/images/1qBcnUta5cQhqK6HrztP1rvPBk.png?width=583&height=583 . It has not yet been downloaded/integrated. Can pair the authentic icon with the company name. Do not spend a long time searching while the user wants quick edits.

## Source ownership — important

- Earlier chapters are directly authored in `index.html` plus their CSS/JS.
- **Everything from workshops to the footer is sourced in `page-continuation.html`.** Run `node build-continuation.mjs` to regenerate that tail into `index.html`. Do not edit only the generated tail and lose changes on rebuild.
- `completion.css` / `completion.js`: workshop CSS 3D model, map entry, VR selection, continuation navigation, footer parallax. Workshop uses 36 DOM faces, not another WebGL renderer.
- `conversation-room.css/js`: networking/panel pinned scene.
- `speaker-cutouts.css` / `conversation.js`: accepted 2.5D photographic speaker reveal. Images in `assets/speakers/` include Faith's user-selected glasses-free cutout.
- `robot-webgl.js`, `chapter-motion.js`, `robotics.css`: accepted robot and photographic pullback.
- `headset.css/js`, `vr-film.js`: accepted real headset geometry and auto-on-entry natural video playback; exit pauses, re-entry resumes, no required replay.
- `hero.css/js`: accepted opening and hero. Hero script contains an initial-hash allowlist; new scene anchors were added. Keep it coherent if adding destinations.
- `countdown.css/js`: 28 November 2026 11:00 AM WAT, absolute deadline `2026-11-28T11:00:00+01:00`.
- `server.mjs`: Node static server, port 4360.

## Current review/history

Read `website-summit-audit-2026-10-24/CORRECTIONS-QUEUE.md`, `tickets.md`, and `concept-hero-film/COMPLETION-REVIEW.md`. The completion review covers the **previous** full-page build, not the pending corrections above. Its saved screenshots are under `evidence/completion/`. Old unchecked media failure/lifecycle checks are not magically passed by normal-path verification.

The preserved older experiments on ports 4357–4359 are history, not the current implementation. The standalone MAX film project is paused; do not resume it as part of this website.

## Media and facts

Required website videos are only:
- `website-summit-audit-2026-10-24/concept-hero-film/assets/hero-film.mp4`
- `website-summit-audit-2026-10-24/concept-hero-film/assets/vr-courtyard-web.mp4`

Other videos are excluded from transfer per the user's request. Images/fonts/current source assets are in the workspace. The external original Downloads film and OS-temp attachments are not needed to run the website; useful selected copies are already in project assets.

Official facts: https://summit.quantumafricaai.com/ . Event 28 November 2026, 11 AM WAT, Lagos; venue communicated to registered participants. Standard $50: refreshments, souvenir, networking, VR games. VIP $200: exclusive dinner with delegates; shared Standard inclusions not confirmed. Accommodation separately Standard $50 / VIP $100, property/duration unspecified. Selar: https://selar.com/8q9g299h98 . Five sponsor tiers $2,000 / $5,000 / $10,000 / $50,000 / $100,000; preserve all published benefits. Equity allocations are publisher-listed, not guarantees; Premium 0.25% and Elite 0.1% are not silently corrected. Joe +2348065338144, Jake +2349066440664, quantumafrica.ai@gmail.com.

Preserve exact “Powered by Quantum Africa.” Keep ink/cyan/silver, no brown backgrounds. Label fictional experience imagery and equipment honestly. Do not invent speaker faces, a venue, hardware availability, schedules, returns, ticket scarcity or legal terms. The GitHub push is authorised for transfer; **deployment is still a future step**, not authorised by this handoff.

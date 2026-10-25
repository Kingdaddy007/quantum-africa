# Quantum Africa Summit 2026 — Logo to Lens

24 October 2026. Complete **opening study and first VR handoff**, ready for directional review. This is the smaller scope authorized by the direction reset. The rest of the event page has not been rebuilt in this direction. No publication or creative acceptance is claimed.

## Preview and start

- Normal: http://127.0.0.1:4358/
- Static: http://127.0.0.1:4358/?static
- Directory: `C:\Users\Oviks\OneDrive\Documents\ChatGPT\Quantum africa\website-summit-audit-2026-10-24\concept-logo-lens\`
- Start from that directory: `node server.mjs`
- Existing Node runtime, no dependencies or build step. Server binds only `127.0.0.1:4358`.

The preview was left in normal motion, at the opening. The browser's temporary viewport override, reduced-motion emulation, JavaScript-disable setting and image-blocking rules were cleared after testing.

## What changed and why

The event now opens through its own silver mark. The real roof facets and five blades separate for approximately 1.5 seconds, uncovering a full-bleed illustrative scene with strong event typography. The mark stays intact in navigation. Replay resets to the top; Skip, Escape and scrolling interrupt the opening. No loader, audio, required wait or interception of normal scrolling.

The hero groups the date, time and Lagos location immediately above the attendance action. The matched phone artwork protects the woman's face and headset; the desktop artwork uses its left shadow area for type. Support copy stays short and away from her hair. The event identity uses Manrope 800 with less compressed tracking than the previous concept.

One lens opens into a cooler property interior. Its frame and image move independently by a limited amount, then settle into a readable VR invitation. Desktop starts the lens farther right to protect the heading; phone uses one aperture. The following compact section retains the published virtual real estate, VR movie and VR games formats.

Before: an isometric architectural explanation and a mineral page palette. After: a human-scale photographic atmosphere in ink, white, silver and cyan, with a direct logo-to-optical transition. The new test asks whether this opening and sensation are the right direction. It does not establish better conversion or an approved full-site design.

## Implementation and provenance

- `index.html`: complete semantic study, event information, real registration destination and static-first content.
- `style.css`: responsive composition, logo facet clipping, optical aperture and static layouts.
- `app.js`: native scroll progress, finite opening, replay/skip, motion preference and control state. No idle animation loop or external library.
- `server.mjs`: local static preview server; no external service.
- `prepare_art.py`: repeatable JPEG derivatives and a transparent-margin crop of the original logo. Requires the already installed Pillow; installs nothing.
- `PLAN.md`: scope, choreography and evidence contract.
- `TALK-TRACK.md`: approximately 75-second presentation guide.
- `evidence/`: browser captures, recorded DOM observations and source checks.

Original logo: `../assets/brand/quantum-africa-original.png`. Opening facets use its original pixels, not a redrawn substitute. `assets/brand/mark-trimmed.png` only removes transparent margins for a legible navigation mark. Fonts are the staged local Manrope 400 and 800 files.

The director supplied three original generated stills from `../assets/logo-lens/`: `hero-original.png`, `hero-phone-original.png`, `vr-interior-original.png`. Source provenance is recorded in that folder's `PROVENANCE.md`. This build inspected them and created `assets/hero.jpg` (256,085 bytes), `assets/hero-phone.jpg` (266,680 bytes) and `assets/vr-interior.jpg` (392,243 bytes). The page loads one hero variant and the interior. These are imagined people/places, not the event venue, real speakers, property listings or documentary footage. Portrait continuity is generated illustration, not a second real camera. The lens joins distinct stills; it is not a continuous recorded camera move.

**This study animates logo pixels, masks, crop and limited scale. It contains no native video, 3D reconstruction or interactive VR.** Existing staged media copies are not used by the page. No additional media generation was performed for this direction by the implementation chat.

Event facts, date/time/city, venue disclosure, registration destination and VR formats were checked against https://summit.quantumafricaai.com/ on 24 October 2026. The footer links the official source. No registration, payment, email or account action was performed.

The Wiemer reference report was read as mediated evidence. Useful principle: a physical subject and a controlled transformation can explain a relationship. Its identity and unsupported technical/event claims were not adopted. The director also supplied bounded phone observations; this builder did not claim direct playback of the report's recording.

## Important motion states

| Transition | Driver and duration | Persistent / changing elements | Mobile and static equivalent |
|---|---|---|---|
| Mark opens | Arrival or Replay, 1.5s, eased finite animation | Seven clipped portions of the real mark separate; shade clears; intact navigation mark persists | Same short opening; static skips it entirely |
| Hero settles | Opening, 1.7s maximum | Image settles from 1.035 scale, type from 15px lower; essential content is immediately navigable | Separate portrait artwork; no settling with reduced motion |
| Identity leaves | Native scroll, progress .05–.20 | Hero type/actions leave together, scene remains | Same relationship on phone; ordinary flow when static |
| Lens arrives / holds | Progress .19–.34 | Silver rounded aperture, interior visible; heading has a clear reading zone | One aperture on phone, rightward placement on desktop |
| Aperture opens | Progress .34–.79, smoothstep geometry | Frame expands, image scale 1.18→1; exterior dims; heading clears before frame crosses it | Phone frame starts 12% inset horizontally / 36% vertically; no optical movement in static mode |
| VR caption / release | Progress .70–.82 then hold .82–1 | Caption rests over a deliberate dark region; native sticky releases after 125svh of additional scroll | Static shows the property image and complete caption in normal flow |
| Controls | Click, keyboard, preference change | Visible focus, direct state update, no looping CTA | No hover-dependent meaning; main controls have at least 44px target height |

Each changing scene property has one owner: derived native scroll progress. The opening uses its own wrapper/arrival properties, with no competing smoothing system. Bounds recalculate on resize, font readiness and page restoration. Scroll and Resize schedule a frame only when needed.

## Verification actually performed

All UI/browser work used **Codex iab**. No Chrome, Edge, desktop automation or Blender UI.

| Check | Observed result |
|---|---|
| 390 × 844 | Complete event identity and attendance action in opening; face/headset preserved; no horizontal overflow |
| 360 × 740 | Readable opening and full property-caption hold; no horizontal overflow |
| 1280 × 800 | Correct desktop hero source; separated type/action zones; corrected small-lens placement; no horizontal overflow |
| 1280 × 713 | Short-desktop support copy ends near y460; event band begins near y509, leaving visible separation |
| Forward / reverse | Small lens, expansion, settled property and release were inspected; reversing restores the same aperture state |
| Replay / Skip | Replay resets top; seven real-logo pieces appear; Skip immediately clears overlay and hides its control |
| Keyboard | Tab reached the motion control with visible focus; Enter changed to static flow |
| Reduced motion | iab CDP emulated the OS preference; page switched to static flow, replay disabled and scroll invitation changed to the content anchor; emulation then cleared |
| No JavaScript | Disabled script execution and reloaded; static HTML retained identity, date/location, CTA, property image/caption and readable details; setting then restored |
| Static navigation | `?static` invitation navigated to `#property`; browser Back restored `#top` |
| Deep entry / reload | Navigated and reloaded at the property anchor; scroll-derived scene recovered coherently without replaying the intro |
| Missing imagery | Blocked the hero and interior image requests in iab; identity, event facts and registration CTA remained readable on ink; block rules then cleared |
| Normal browser console | No warnings/errors in the captured normal run before deliberately blocked-image testing |
| Source checks | `node --check app.js`, `node --check server.mjs`; HTML local references: no missing assets, duplicate IDs or broken anchors |

Representative captures: `phone-390-opening.png`, `logo-opening-frame.png`, `phone-390-reverse-lens.png`, `phone-390-property-hold.png`, `phone-360-opening.png`, `desktop-1280-opening.png`, `desktop-lens.png`, `desktop-short-713.png`, `keyboard-focus.png`, `phone-static.png`, `phone-no-javascript.png`, `phone-missing-images.png`. `browser-checks.json` records DOM-backed state samples; `source-check.json` records local reference checks. Some earlier exploratory frames are retained as intermediate evidence, not all are current final compositions.

## Limits and next decision

Verified with residual risk for this local opening-study scope. Responsive browser viewports are not physical-device tests. No measured frame rate, network budget, screen-reader session, complete cross-browser coverage, native VR, full event-page readiness or conversion result is claimed. Generated human/detail consistency and publication rights still need human review before external use.

The next decision is the user's judgement of the logo entrance, portrait hero and lens sensation together. Full programme, real speaker portraits, complete tickets/sponsorship, robotics and final-page reveal remain outside this opening study. Do not extend the page until the user accepts or redirects this visual language.

Guidance actually used: frontend-skill, spatial-experience-design, cinematic-motion, scroll-storyboard, coding and testing; Anti-Gravity routing informed the narrow scope. Implementation and verification were performed directly. No sub-agent was invoked by this chat.

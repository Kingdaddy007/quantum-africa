# Reference Intelligence Dossier: Wiemer Store (`REF-WIEMER-01`)
**Target Project:** Quantum Africa Summit (African Real Estate/PropTech, AI, Robotics, VR)  
**Methodology:** Anti-Gravity V4 Reference Intelligence Protocol  
**Inspection Engine:** Gemini 3.5 Video Understanding + Local FFmpeg Frame-Level Forensics  

---

## 1. Source Register & Inspection Metadata

| Field | Detail |
| :--- | :--- |
| **Source ID** | `REF-WIEMER-01` |
| **Analyzed Subject** | `https://wiemer.store/` ("Der Matthias" side table by Jakob Wiemer, Made in Germany) |
| **Source Media** | `Recording 2026-10-24 182312.mp4` (~93.5 MB) |
| **Technical Specs** | 1920 × 1018 px, 30.0 fps, H.264 video, AAC audio, duration: 90.06 seconds |
| **Audio Channel** | Completely silent (measured mean volume: -91.0 dB; no voiceover or background music) |
| **Browser Chrome Context** | Chrome desktop window with tab strip visible (`Quantum Africa 2026`, `ADIDAS Lagos Flagship Store`, `W. Best Single Page Websites`, `INHERITED`, `Wiemer`). Google Translate banner active in top-right; German cookie consent overlay in bottom-right. |
| **Inspection Evidence** | Gemini 3.5 Video API extraction + 24 sampled frames (`sample-01.png` – `sample-24.png`) + 10 exact-seek keyframe stills + contact sheet (`wiemer-contact-sheet.png`). |
| **Known Limitations** | Desktop viewport capture only (no touch/mobile gestures); human browsing cadence with quick pauses; cookie banner partially obstructs bottom-right corner. |

---

## 2. Chronological Reconstruction (Beat-by-Beat)

| Timestamp | Visible State & Key Content | State Change & Motion Behavior | Trigger Evidence | Communication Job | Confidence | Ambiguity / Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **00:00 – 00:03** | Solid industrial signal orange (`#FF5500`), centered black wordmark **Wiemer** (5-dot circular logo), bottom progress text `GELADEN` (Loaded). | Timed loading gate. Upward vertical slide/curtain wipe reveals the underlying viewport. | `TIMED_OR_AUTONOMOUS` | High-impact brand entrance; masks initial asset hydration. | High | Cookie banner present in lower right. |
| **00:03 – 00:09** | Full-bleed architectural interior photography: Oak slat table, leather Bauhaus chair, Dieter Rams book, Porsche scale model resting on *Der Matthias* perforated table. | Transition settles; hero typography ("Zeitlose Designermöbel aus Edelstahl und Aluminium...") fades in at top left. | `CONFIRMED_SCROLL` | Establishes scale, lifestyle context, and design pedigree. | High | Google Translate dropdown open in top right. |
| **00:09 – 00:15** | Transition to stark white space: Bold headline **"Coming 2027"** over subtle dot-matrix pattern, followed by badge `[COMING SOON]` and headline **"Hello there, Matthias."** | Downward scroll transitions from photographic space to clean editorial type block. | `CONFIRMED_SCROLL` | Personalizes and humanizes the physical product before technical details. | High | Controlled, smooth user scrolling pace. |
| **00:15 – 00:27** | **Interactive 3D Exploded Assembly Scrub:** Extreme close-up of brushed aluminum perforated plate, chrome acorn cap nut, washer, and threaded bolt. | Scroll progress directly scrub-animates mechanical assembly and disassembly; transitions to full 3D table frame. | `CONFIRMED_SCROLL` | Proves mechanical craftsmanship, material truth, and modular construction. | High | Deterministic linear scrub; no orbit camera controls. |
| **00:27 – 00:41** | **"Über die Brand" (About the Brand):** Founder quote on cappuccino mornings vs. frantic capsule coffee; photo of founder Jakob Wiemer crouching beside the table. | Two-column editorial layout: narrative text on left, full portrait photo on right. | `CONFIRMED_SCROLL` | Builds founder trust and articulates brand philosophy. | High | Typographic layout is clean, high-contrast grotesque sans-serif. |
| **00:41 – 00:54** | **"Specs" Section (Signal Orange Background):** Tab switcher (`BASISPLATTE`, `MATTHIAS BEISTELLTISCH`, `MATTHIAS BEISTELLREGAL`), dimensioned blueprint drawing (`409mm`, `610mm`), and engineering data table. | Pointer clicks `MATTHIAS BEISTELLTISCH` tab; blueprint dimensions and specs (anodized aluminum 3.5mm, 15kg load) update dynamically. | `CONFIRMED_POINTER` | Supplies definitive technical precision and architectural credibility. | High | Cursor visibly clicks tab at 00:41; dimensions update instantly. |
| **00:54 – 00:58** | **Waitlist / Conversion Card:** Floating white card over animated dot grid with email input field, privacy checkbox, and blue submit button (`Für die Warteliste eintragen`). | Scroll settles on conversion card and footer links (Instagram, Pinterest, TikTok, Impressum). | `CONFIRMED_SCROLL` | Captures pre-order demand and waitlist inquiries. | High | Bottom-right cookie banner overlaps part of footer. |
| **00:58 – 01:10** | **Page Reload / Return to Top:** User refreshes page; orange loader plays again with `GELADEN` status, followed by curtain wipe. | Hard browser reload resets viewport to 0s state. | `TIMED_OR_AUTONOMOUS` | Demonstrates transition replayability and initial entrance robustness. | High | Browser refresh action visible in URL bar. |
| **01:10 – 01:20** | **Massive Typographic Parallax Overlay:** The word **"Wiemer"** scales across the entire hero photography in giant white letterforms as user scrolls. | Parallax scaling and opacity shift between text layer and underlying photography. | `CONFIRMED_SCROLL` | Monumental brand scale and editorial confidence. | High | Clearly visible typographic hierarchy shift. |
| **01:20 – 01:30** | **Interactive Hotspot Exploration & Second Scrub:** White circular `(+)` beacons on furniture pieces in lifestyle scene, followed by reverse scrub of exploded 3D model. | Upward and downward scrub testing assembly smoothness and hotspot visibility. | `CONFIRMED_SCROLL` | Provides contextual micro-inspection directly within the room scene. | High | End of recording session. |

---

## 3. Observation Inventory & Visual Grammar

### A. Typography & Spatial Hierarchy
- **Primary Typeface:** Neutral neo-grotesque sans-serif (resembling Helvetica Neue / Inter).
- **Scale Contrast:** Extreme contrast between monumentally scaled headers (`"Wiemer"`, `"Coming 2027"`, `"Specs"`) and delicate, micro-dimensioned engineering labels (`409mm`, `3.5mm`, `15 kg`).
- **Blueprint Annotation:** Use of CAD-style dimension callout rules with terminal arrowheads and clean metric figures.

### B. Color Blocking & Material Palette
- **High-Chroma Signal Orange (`#FF5500`):** Used strategically at critical bookends (the entrance loader and the technical "Specs" section) to create dramatic visual punctuation.
- **Architectural Gallery White (`#FFFFFF` / `#F8F8F8`):** Dominates the central product and editorial sections to let photography and 3D renders breathe.
- **Material Realism:** Authentic metallic reflections (brushed anodized aluminum, specular highlights on chrome dome nuts) without decorative gradients.

### C. Motion Grammar & Choreography
- **Linear Scroll-Scrubbed 3D (1D Traversal):** The 3D exploded view does not allow arbitrary OrbitControls; it strictly binds scroll delta to assembly progress. This eliminates navigation confusion and keeps the user moving through the narrative argument.
- **Full-Screen Curtain Wipe:** Clean vertical reveal masking asset loading.
- **Contextual Hotspot Beacons (`+`):** Tactile, non-intrusive interactive pins anchored to physical objects.

---

## 4. Technical Inference (Appearance Before Frameworks)

1. **Exploded 3D Scrub Pipeline:**
   - *Observation:* Razor-sharp metallic edges, photorealistic studio ambient occlusion, zero frame drops during rapid scroll scrubs, and strictly 1D forward/reverse motion.
   - *Inference:* Implemented either via a **pre-rendered high-resolution image sequence drawn to an HTML5 `<canvas>`** (e.g. 60–90 indexed WebP/PNG frames scrubbed via scroll delta) or an optimized Three.js/WebGL scene with baked lighting maps. The pre-rendered canvas sequence approach guarantees 60fps on mobile without GPU shader compilation lag.
2. **Tabbed Blueprint Dimensions:**
   - *Observation:* Clean SVG vector line art scaling crisply with instantaneous text node swaps when tabs are toggled.
   - *Inference:* Interactive SVG component with reactive state bindings.

---

## 5. Transfer & Adaptation for Quantum Africa Summit

### Decision Ledger

| Candidate Mechanic | Decision | Retained Principle | Proposed Adaptation for Quantum Africa Summit | Risk / Boundary Condition |
| :--- | :---: | :--- | :--- | :--- |
| **High-Chroma Entrance Curtain** | **ADAPT** | High-impact theatrical entry that establishes prestige and masks 3D asset hydration. | Replace furniture orange with **Quantum Obsidian & Solar Teal / Gold** curtain with brief live telemetry: `"CONNECTING LAGOS • KIGALI • NAIROBI • CAPE TOWN"`. | Must auto-dismiss within 1.2s; cannot trap mobile visitors on slow networks. |
| **Full-Bleed Physical Environment Hero** | **ADAPT** | Grounding technology within real, tangible architectural and spatial context. | Replace domestic Scandinavian room with an **authentic African architectural innovation center** (e.g. concrete, mass timber, native flora) bridging real estate with robotics. | Avoid generic Western stock photography; must feel authentically African and forward-looking. |
| **Scroll-Driven Exploded 3D Component Scrub** | **KEEP** | Tactile scroll scrub that demystifies complex physical engineering. | Scrub an **African PropTech / Robotics asset**: e.g., an autonomous construction drone, robotic brick-laying arm, or modular smart-city building node assembling on scroll. | Pre-render as canvas image frames to prevent GPU lag on mid-tier mobile devices. |
| **Blueprint / Dimensioned Technical Specs Sheet** | **KEEP** | Uncompromising engineering credibility through precision data and CAD dimensions. | Create interactive **Summit Infrastructure Specs**: Plot footprints, AI compute cluster specs, VR arena dimensions, and delegate capacity. | Must preserve editorial graphic craft; do not turn into a dry spreadsheet. |
| **Contextual Hotspot Beacons (`+`)** | **KEEP** | Layering interactive data directly onto architectural space without cluttering layout. | Place glowing pulse markers on the summit venue/prototype scene to reveal session tracks, sponsor tech specs, and demo areas. | Cap at 3–4 hotspots per viewport to avoid visual noise. |
| **Founder / Organizer Editorial Manifesto** | **ADAPT** | First-person visionary leadership that humanizes a high-level summit. | Feature a sharp, authoritative statement from the Quantum Africa leadership on why Africa is the frontier for physical AI and robotics. | Keep concise (under 75 words); lead with outcome, not corporate platitudes. |
| **Floating Pre-Registration Card** | **ADAPT** | Focused, distraction-free conversion capture. | Adapt into a sleek **Summit Pass Application Card** with tiered delegate access (Executive, Builder, Investor). | Form must be fast and friction-free (email + role selector). |

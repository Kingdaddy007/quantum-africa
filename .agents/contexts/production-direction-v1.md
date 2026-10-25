# RAMA: production direction and first implementation

Recorded 2026-10-02. Historical V1 direction. The user rejected the motion as a slide video. motion-direction-v2.md supersedes the motion treatment. Retain audience/source decisions as working context; no V1 design/film approval should be inferred. Client approval remains unknown.

## Decision that lets work proceed

The user explicitly chose to begin without waiting for further client answers, use creative judgement, and work with buyers, investors and agents as the provisional audiences. The reported placement is a product/social page; the specific platform is unknown. Length and style are our working choices. No reliable client deadline or budget has been established.

The reply "Yes, the benefit of using RAMA" remains an incomplete brief. It does not approve the redesign, output claims, expenditure or publication. Missing answers no longer block reversible local concept development. The future alternative-interface presentation plan in interface-preview-decision.md still applies.

## One core story, then audience variants

The shared benefit to communicate: a property estimate gives someone a starting point for further investigation, and its range and assumptions matter alongside the midpoint. This is more specific than simply advertising "AI" and can be demonstrated using the one observed product journey.

Use one general product introduction first. Follow with audience-specific openings and, where needed, a more focused explanation. Do not crowd every product feature into the main film or prematurely commit to producing a complete suite.

| Audience | Working opening | Relevant journey | Boundary |
| --- | --- | --- | --- |
| Buyer | "Before your next property conversation, explore the estimate." | Identify the property; read the range; identify questions about title, access and condition. | No promise to prevent overpayment, verify title or establish a fair price. |
| Investor | "An asking price is only the beginning of the research." | Put the property details beside an estimate and its assumptions. | No returns forecast, investment recommendation or unverified comparison feature. |
| Agent | "Give the property conversation more context." | Present property details, the range and assumptions coherently. | Report sharing/download remains unverified; no invented client-management tools. |

These are proposed hooks, not client-approved copy or three completed films. All can use the same interface assets. A later practical walkthrough can explain actual product operation separately from the introduction.

## Visual direction

Warm neutral surfaces, deep green, clear numbers, editorial headings and restrained rules. The estimate and its range receive the strongest hierarchy. A single supporting property panel holds context. Assumptions appear as readable rows rather than a grid of equally prominent widgets.

The palette, schematic illustration and provisional RAMA mark are a private creative treatment, not verified brand assets. The plot drawing is deliberately labelled schematic. It does not imply the app has a working geographic map.

## First motion study: 34 seconds, landscape, silent

| Time | Purpose | Content |
| --- | --- | --- |
| 0–6s | Establish the subject and benefit | "A property price. A clearer starting point." |
| 6–13s | Show what the estimate relates to | Lekki, residential land, 500 sqm; schematic parcel; proposed preview action. |
| 13–23s | Make the output understandable | Illustrative ₦850m midpoint, ₦600m–₦1.10bn range, source confidence label. |
| 23–29s | Give context beyond the number | Access, title and land condition assumptions. |
| 29–34s | Give a next step | Invitation to explore RAMA, product URL, provisional audience labels. |

This is a chosen review length, not an agreed delivery requirement. The film has scene cuts, small timed entrances, a drawn parcel outline and a range reveal. It uses the same diagram and range components as the interface. Timing is authored from absolute playback time, allowing seeking and reproducible scene inspection.

The first proof is silent so hierarchy and reading time can be assessed directly. Sound design and a voiceover remain later decisions. A concise voiceover may help a longer explainer; short audience variants may work with onscreen text and sound. The user's voice is an option, not a requirement, and no voice model has been created.

The landscape film is a composition study. A final social version should be composed for its intended aspect ratio; shrinking this landscape stage is not evidence of phone-readable video typography. No final MP4 or audio mix has been exported.

## What has actually been implemented

Source: prototype/index.html, styles.css, shared.js, app.js; film.html, film.css, film.js; server.mjs; README.md.

- Alternative report, workspace and input-flow screens.
- One fixed hypothetical 500 sqm Lekki example, reproduced from the earlier observed RAMA output.
- Unsupported areas are rejected; the optional report title is displayed as literal text.
- A loading state and navigation between the sample screens; no persistence or live AI calculation.
- A 34-second browser animation with play/pause, restart, keyboard-operable scene buttons and a seek slider.
- Responsive interface layouts and reduced-motion handling.
- Local Node server bound to 127.0.0.1:4173, using only existing software.

No packages, plugins or tutorial repositories were installed/cloned. No provider credits were used. The repository register remains a candidate list, not an installation record. There is no new backend, authenticated service, deployment or sent client message.

## Data and claim boundaries

The earlier live sample returned ₦850m with a ₦600m–₦1.10bn range and Medium confidence. It was hypothetical, and no market accuracy was verified. The broad Lekki input was interpreted as Lekki Phase 1 in the source explanation. No supporting comparable transactions or real parcel coordinates were established.

The prototype labels these boundaries. The current concept is unsuitable for publication as a depiction of the live dashboard without client review of the alternate interface and sample presentation. Final public copy should explain the benefit succinctly while preserving a legible example/concept label. Do not remove qualifications in order to make an unsupported accuracy claim.

## Next production work

Review the actual interface and five scene poses; refine the visual direction and copy. Then compose the chosen social format, improve continuity between property inputs and result, and perform a bounded frame-render/encoding trial. Choose one renderer only if it solves a demonstrated export need. Add sound after timing and reading rhythm work. Produce audience variants from a strong shared sequence rather than multiplying unfinished films.

Client presentation should use the saved alternative-interface proposal and show a concrete preview. Publication, client messaging and paid generation have not been undertaken. A reusable skill becomes useful after a successful repeatable production pass, not merely after collecting tutorial prompts.

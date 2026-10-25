# Draft tickets — Quantum Africa landing page

> Superseded for review by `TICKETS-SPLIT-DRAFT.md`: the user asked to split these four groups further. The revised draft contains eight smaller deliverables with explicit acceptance checks and blocking edges.

25 October 2026. Concrete local draft for the user's review of ticket size and blocking edges. No external issues have been created. Approved implementation can continue while this draft is reviewed; publishing the final local tracker waits for that verification.

## Current decisions to preserve

- The physical-headset-to-property direction is accepted. Preserve its geometry and reversible entry/exit.
- The current hero/opening is accepted enough to move to the next section. The first visit must open automatically; no required scroll/click. Preserve the corrected seamless film edge.
- The main chat performs all future implementation directly. No further delegation.
- Video provider: the user reports Google Omni1.1 with a ten-second video-reference continuation workflow. Plan Clip A10s plus the next Clip B10s. The user generates the videos; no provider upload, credit spend or generation by this chat.
- The page is designed for phones first. Video output is portrait9:16; desktop framing is handled by the website.
- Current working prototype is http://127.0.0.1:4360/ . The asset gallery is its VR film kit. Earlier studies remain preserved.

## Ticket QA-01 — Ready-to-animate mobile VR asset pack

**Status:** In progress; image options, Omni prompts, copy buttons and ZIP exist. Exact9:16 delivery versions remain to be prepared and checked.

**What it delivers:** The user can choose a property, download a correctly sized first frame, copy its prompt and create a coherent twenty-second VR interior sequence in their own tool.

**Blocked by:** None.

- [ ] Both interior options provide exact9:16 first-frame PNGs; a metadata check confirms1080×1920 and the gallery/ZIP use those versions while retaining original sources.
- [ ] Each image has working one-click buttons for its image prompt, ten-second Clip A and ten-second continuation B; the continuation explicitly uses the actual full Clip A video and asks for new following footage rather than a remake.
- [ ] The instructions explain phone-first generation, desktop cropping, stable room/camera anchors and text added in HTML; asset/provenance/download links are verified.

**Out of scope:** Generating/spending on video in the user's provider account; guaranteeing model continuity; presenting generated property as a real venue/listing.

## Ticket QA-02 — Interior playback with timed typography

**Status:** Waiting for the user's finished film. A two-phrase scroll-based copy preview is coded but not yet visually verified.

**What it delivers:** Entering the headset reveals the user's cinematic property video at its intended speed, with sparse readable type and immediate control over leaving.

**Blocked by:** User-supplied final video output(s) — external asset. QA-01 is helpful preparation, not a hard software dependency if the user supplies another suitable film.

- [ ] The lens poster and video's first frame match; natural playback starts inside the view, pauses on exit/offscreen/hidden tab, and the final frame rests without a reset loop.
- [ ] The two typography moments follow actual video time and pause with playback; the first seconds and final arrival leave the view clear. Pause and Take off remain usable without waiting for the film to finish.
- [ ] The entry/return works at390px,360px and desktop; reduced-motion, missing-media and keyboard routes retain the message and event invitation.

**Out of scope:** Baked-in video text, headset hardware claims, forcing a twenty-second scroll trap.

## Ticket QA-03 — Robotics & AI continuation chapter

**Status:** In progress. Original illustrative artwork and the first chapter implementation are saved; browser review and refinements are pending.

**What it delivers:** After VR, visitors move from virtual property into a distinct physical encounter with robotics, with a hardware-detail reveal that widens into a human-led demonstration.

**Blocked by:** None. This can be completed while the user generates the VR film.

- [ ] The accepted VR return leads clearly into the new chapter; the photographic detail-to-context reveal is coherent forward and backward and has readable settled states.
- [ ] Copy explains robotics/AI demonstrations and questions relevant to real estate; the image is labelled illustrative and does not claim a specific confirmed machine or actual event coverage.
- [ ] Phone390/360, desktop, tap/keyboard, static mode and image-failure routes are checked; the header's Attend action reaches a usable final invitation.

**Out of scope:** Rebuilding the accepted hero, fake robot chat/telemetry, new unverified engineering claims, the later speaker/programme sections.

## Ticket QA-04 — Cinematic live countdown

**Status:** Ready to build.

**What it delivers:** A clear event-time moment after the hero and before VR, using large editorial numerals and restrained motion rather than four boxed cards.

**Blocked by:** None. The user supplied the date/time and requested the countdown.

- [ ] The countdown sits as an ordinary-flow cinematic interlude between hero and VR; all four units remain legible in one phone row without hiding the registration action or adding a scroll/click gate.
- [ ] It calculates from the scheduled start2026-11-28T11:00:00+01:00, updates from real time, clamps at zero and uses an honest post-deadline label; no screenshot values or fake scarcity are hardcoded.
- [ ] Only changing digits receive restrained motion; tabular numerals, reduced-motion behavior, a readable fixed event date and non-disruptive accessibility behavior are verified.

**Out of scope:** Availability/sold-out claims, fake urgency, an animated loader, changed pricing or event date.

## Start frontier and dependency review

QA-01, QA-03 and QA-04 can proceed independently. QA-02's final acceptance waits only for the user's finished clip; its copy/layout preparation can proceed now. There are no invented software blocking edges among these four tickets.

## Later page work retained in scope

After the current slices: preserve all seven advertised experience categories; develop actual-speaker portrait presentation with verified assets; retain full admission/accommodation/sponsorship meaning; add the final footer reveal. These are not marked complete or silently removed by this draft.

## Ticket review requested

Check whether these four slices are the right size and whether the blocking statement for QA-02 is correct. Merge/split if needed before this draft becomes the final local tracker.

# Motion tools and repository register

Updated: 2026-10-02. Current state: Remotion 4.0.532 and React/React DOM 19.3.0 are installed locally under motion-v2; HyperFrames 0.8.112 and GSAP 3.14.2 under hyperframes-launch. Both engines have rendered MP4s. The user added both host plugins. Three selected tutorial repositories are now cloned for targeted source inspection at recorded revisions; none of those toolkits was installed or executed. Two 21st.dev candidates were inspected through the author's openly published source, without a production component install or global MCP change. Source commands remain documentation, not authorization.

Current creative pass is script discussion before another render. First Remotion motion is an accepted development iteration and archived, including a portrait MP4; the newer 45-second HyperFrames film is a development draft. See marketing-script-v1.md, launch-film-direction.md and ../evidence/hyperframes-launch-verification.md. Deeper source evidence: ../evidence/motion-repository-source-review.md. Component status: 21st-component-register.md. Earlier no-clone/no-install statements in historical studies do not describe this current state.

## Repository and framework candidates

| Candidate and primary source | Role and what was checked | Current disposition |
| --- | --- | --- |
| [JohnHeibel/PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) | Cloned; selected storyboard/guide, timeline, core camera helpers, chapter excerpt and renderer inspected | Apply purposeful action/end-state and continuous visual context; drawing runtime not installed/executed. No root licence file; package declares ISC; asset rights unestablished |
| [JohnHeibel/ClaudeAnimationBase](https://github.com/JohnHeibel/ClaudeAnimationBase) | p5.js/p5.brush cartoon starter; README specifies Node, Chrome, FFmpeg and warns about slow watercolour rendering without a suitable GPU; MIT badge observed | Optional illustrated-film starter; conventions must not override a text-heavy product brief |
| [buildwithhanif/claude-animation-skill](https://github.com/buildwithhanif/claude-animation-skill) | Cloned; workflow, beat sheet, detail/trap guidance, complete film harness and sound source inspected; MIT licence read | Apply key-pose/consecutive-frame review and repeatability checks. No runtime trial. Sound helper invokes sh; Windows adaptation/check required before use |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Official source/installed plugin guidance used; project-local 0.8.112 rendered a 45-second MP4; Apache-2.0 source badge observed | Working local renderer; actual render/decode/playback verified. Paid/hosted services are separate and unused |
| [Remotion agent skills](https://www.remotion.dev/docs/ai/skills) | Official guidance and installed host plugin; local 4.0.532 engine rendered square and portrait MP4s | Working local renderer and proposed next-cut starting point because user prefers that draft. Skills and runtime are separate; current usage terms remain a delivery consideration |
| [WinterArc21/Battle-of-Austerlitz-Film](https://github.com/WinterArc21/Battle-of-Austerlitz-Film) | Long-form WebGL film reference; README describes narration beats, maps, procedural effects/audio, offline Kokoro and chunked browser export | Study narrative/timing architecture if useful; five-minute historical film is not a RAMA template; license not established |
| [guanmo-ai/awesome-ai-motion](https://github.com/guanmo-ai/awesome-ai-motion) | Curated gallery of cases, prompts and original sources; public gallery available without installing | Browse/reference; no need to install merely to read; third-party asset rights remain separate |
| [athemeroy/awesome-claude-5-5-videos](https://github.com/athemeroy/awesome-claude-5-5-videos) | Source-linked workflow/case collection; original [awesome-opus-5-5-videos URL](https://github.com/athemeroy/awesome-opus-5-5-videos) now redirects here; CC-BY-4.0 badge observed | Research index, not a rendering package; curated observations and creator claims remain distinguishable |
| [latent-spaces/brag](https://github.com/latent-spaces/brag) | Cloned; inspect/plan/compose/deliver instructions, slim handoff/checker and music licence note inspected; MIT code licence read | Apply product flow and reading-time discipline. No installed skill invoked. Its slim checker compares instruction copies, not film quality; bundled music needs separate terms verification |
| [21st.dev](https://21st.dev/) | Catalogue, previews and usage inspected. Full site code gate persisted after reported sign-in; Text Morph/Animated Number source read from author's public Motion Primitives docs | Concrete candidates saved with MIT notice. Current author code imports motion/react and requires frame-driven adaptation for video. Not installed; no API key/global integration configured |

Licence badges alone do not audit bundled assets or dependencies. Three inspected commits are pinned in ../evidence/motion-repository-source-review.md; other entries remain earlier pointer/README research. Recheck the selected source and actual usage before any future execution or asset reuse.

## Setup commands preserved from sources

Hamza's article names seven actual GitHub repositories above and suggests collecting them under a repos folder, with GIT_LFS_SKIP_SMUDGE=1 for HyperFrames to avoid automatically retrieving large LFS test assets. This is a download-size suggestion, not proof the full collection is necessary. The initial research did not clone them. This pass used shallow filtered clones and sparse source checkouts for /brag, PDoomVideo and Hanif's kit, without materialising large media or running their programs.

Remotion's current official skills page documents:

```text
npx skills add remotion-dev/skills
```

HyperFrames README documents Claude plugin installation and a standalone skill route:

```text
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes
npx skills add heygen-com/hyperframes
```

Hanif's README documents:

```text
claude plugin marketplace add buildwithhanif/claude-animation-skill
claude plugin install claude-animation@claude-animation-skill
```

Its runtime also needs its own package dependencies; adding instructions is not that runtime installation. Examples include Unix shell commands and require adaptation for Windows.

/brag's README documents portable skill installation alternatives:

```text
npx skills add https://github.com/latent-spaces/brag --skill brag
npx skills add https://github.com/latent-spaces/brag --skill brag-slim
```

The README also provides host plugin commands; these were read but have not been tested against this Codex desktop host. Prefer a project-scoped selection if eventually requested. Windows symlink discovery needs consideration; the README documents copying the skill directory as an alternative to symlinks. No Developer Mode, administrator setting, global Git setting or global skill path was changed.

All commands must be revalidated against the selected route. Do not combine all alternatives or treat Claude-specific syntax as Codex syntax. Do not automatically install a missing dependency merely because a tutorial asks for it.

## Runtime and supporting tools mentioned across the corpus

| Tool/group | Purpose | Status / necessity |
| --- | --- | --- |
| Node.js, npm, Git | JavaScript runtime, project dependencies and source retrieval | Existing tools used for both local render projects and selected source clones; no claim that all candidate packages are compatible |
| FFmpeg and ffprobe | Encode/mux/render checks and media metadata | Used to inspect and fully decode the actual MP4 exports and extracted Astral reference |
| Chrome/headless Chromium, Playwright | Browser-rendered frames and inspection | Connected browser used; both project renderers produced frames/video. Candidate drawing-kit browser dependencies were not installed or tried |
| Python, NumPy | Some audio synthesis, beat analysis and helper scripts | Python found; no NumPy/audio-pipeline compatibility audit |
| p5.js and p5.brush | Drawing and brush/watercolour effects in JohnHeibel's kits | Source dependencies, not installed for this project |
| Node canvas / skia-python | Alternative drawing backends mentioned by Hanif/kirill | Optional; exact selected backend and Windows dependency support untested |
| Blender and Blender MCP | Optional 3D assets/scenes in kirill's environment | Not a core requirement; local installation/connection not checked |
| Surge XT, VST effects, 808/909 and other sample packs | Synthesized or sampled music/sound in kirill's environment | Optional; access and sample licenses unverified |
| Kokoro TTS | Offline/synthetic narration route described in Austerlitz and classic /brag | Optional; model/runtime download, voice suitability and resource needs untested |
| Whatships / https://whatships.com | Reference discovery named by Rexan and the transcript | User-supplied Astral page inspected, actual public video extracted, samples analysed; not a production dependency or audit of the entire library |
| Diffusion Studio | Alternative framework mentioned only in supplied transcript | Named candidate only; no current provider/repo/install verification |
| MagicPath | Narrator's demonstration product/design tool | Reference content, not required for RAMA production |
| Fish Audio, ElevenLabs | Voice/sound provider options in transcript/article | Deferred; offers, pricing, permissions and voice quality not checked |
| fal / Seedance | Image/video-generation base assets proposed in Donald's brief | Mentioned external generation route; exact current model/API availability and costs unverified |
| Google Flow | User-mentioned generative-video option | Open alternative for supporting footage; no access, generation or integration trial |
| Gemini voice/TTS reference from Philipp Schmid | Potential later personal-voice work | Parked source pointer; full article/current API claims not verified |

No paid service, API key or voice recording is needed merely to preserve this research.

## Current machine evidence

Read-only PATH/version checks on 2026-10-02:

- Node.js v24.12.0; npm command present.
- Git 2.53.0.windows.1.
- FFmpeg N-123778-g3b55818764-20260331; ffprobe command present.
- Python 3.14.3.

Node's major version meets the cited Node 22+/20+ minimums, but this does not prove every candidate dependency supports it. Separate evidence establishes both local renderers working and current npm package lists; PATH discovery alone did not. No global package inventory or GPU benchmark was performed. 21st.dev's full-code authentication gate remains unresolved, with a normal public-author-source alternative used for the selected components.

## Tool decision for the next cut

Use the existing Remotion project as the proposed next-cut starting point, based on the user's preference. First discuss the buyer-led script, then inspect meaningful art-direction frames and a short animatic. Remotion, HyperFrames and bespoke HTML remain alternatives, not a compulsory combined stack. Selected repository principles and 21st components should serve that story; a renderer migration or wholesale installation is not currently selected.

Measure actual setup friction, preview/render reliability, readable UI, seek repeatability, sound handling, aspect-ratio layout and render time. Preserve the winning project and commands before designing a reusable skill.

Cross-source reasoning: [additional-motion-reference-study.md](additional-motion-reference-study.md). Earlier baseline: [motion-production-research.md](motion-production-research.md).


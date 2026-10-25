# Speaker cutout provenance — 25 October 2026

Six source portraits were edited with the built-in image tool, requesting background removal and preservation of identity, pose, clothing and framing. Source JPGs and generated transparent PNGs are preserved beside optimised alpha WebP files. These are reference-based generated cutouts, not a claim of pixel-identical segmentation. Subjects/wardrobe were visually compared with the originals; no new real speaker was invented.

## Original public sources

- Summit names/roles: https://summit.quantumafricaai.com/
- Joe Terhile: https://academy.quantumafricaai.com/images/speakers/joe-terhile.jpg?v=2
- Thomas Pinter: https://academy.quantumafricaai.com/images/speakers/thomas-pinter.jpg?v=2
- Nofa Simeon: https://academy.quantumafricaai.com/images/speakers/simeon-nofa.jpg?v=2 (Academy uses Simeon Nofa; Summit uses Nofa Simeon.)
- Olubori Paul: https://academy.quantumafricaai.com/images/speakers/olubori-paul.jpg?v=2
- Ajulo Joshua: https://academy.quantumafricaai.com/images/speakers/ajulo-joshua.jpg?v=2
- Dr Kunle Adeyemi: https://sterlinghomesltd.com/about-us/ explicitly labels the portrait. Image: https://sterlinghomesltd.com/shlstorage/2023/02/WhatsApp-Image-2023-02-06-at-14.29.11-1.jpeg . REDAN corroborates the role/company office: https://redanonline.org/chapters/south-west . This is the Sterling Homes executive, not the same-name NLE architect.

Faith Odiase: the user subsequently supplied a TAFTA Women Entrepreneurship Development Program flyer explicitly labelled with her name, and selected its smiling glasses-free portrait. Background extraction and delivery preparation are recorded in [FAITH-CUTOUT.md](FAITH-CUTOUT.md). The original six-portrait history below is retained; there are now seven delivery files.

## Generation outputs

Generated PNGs remain under the task's Codex generated_images directory; project copies are named NAME-cutout-original.png.

| Project name | Built-in output file |
| --- | --- |
| joe-terhile | exec-8b0bd7f5-d5e2-47bb-9828-202529d77d67.png |
| thomas-pinter | exec-85a7c2ed-6929-4897-bdf8-faeb47d2153f.png |
| simeon-nofa | exec-0a9c7064-4202-499d-9dfc-f3fd8c0cafd3.png |
| olubori-paul | exec-1751286a-34b8-4708-b56f-c84ccc7529ad.png |
| ajulo-joshua | exec-844cfdb7-3a90-428c-bb8e-6759194e472d.png |
| kunle-adeyemi | exec-aca674e3-7c48-4b90-bf62-e3ec4dacefe4.png |

## Shared edit prompt

Edit target: the attached real speaker portrait. Perform only background removal to make a clean, professional transparent-background photographic cutout for an event website. Keep this exact person, facial identity, facial proportions, expression, skin tone, hair, glasses if present, clothing, logos, pose and existing body crop unchanged. Do not beautify, redraw, restyle, relight, change age or generate a new face. Preserve fine hair and clothing edges; remove only the background, including gaps around the subject. Do not add a shadow, border, pedestal, text, props or coloured backdrop. Output one isolated person, with an actual transparent alpha channel, original framing and modest clear space around the head. This is a cutout of the supplied photograph, not a newly imagined portrait.

The Kunle edit additionally specified preserving the seated pose, Yoruba cap, red embroidery, hands/watch, and removing office/chair/signage.

## Delivery preparation

Pillow verifies non-empty alpha and at least eight percent fully transparent pixels. Empty outer transparency is trimmed with a small margin; geometry is proportionally scaled within 800x1100 and encoded as alpha WebP, quality 88. Six delivered images total 570,610 bytes, each 68–179 KB. Exact per-file metadata is in cutout-metadata.json. PNG originals are retained. Cropping/format preparation does not generate further facial detail.


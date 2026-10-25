# Join the conversation — local review candidate

25 October 2026. User authorised the networking/panel section after accepting the speaker treatment. Creative acceptance of this new chapter is pending.

## Result

Between speakers and workshops, a full-scene networking photograph transitions laterally into a panel discussion as the visitor scrolls. The live heading remains “Join the conversation.” Captions distinguish networking (“Make the introduction.”) and panels (“Bring your point of view.”). Two buttons jump directly between the beats; an always-available onward link leads to the existing workshops area. No completion gate, audio, video or new library.

The photographs are generated illustrations of fictional people and settings, explicitly labelled on screen. They are not the real speaker line-up, a confirmed venue or evidence of prior attendance. The actual speakers above retain their own portraits.

Files: index.html, conversation-room.css, conversation-room.js, four delivery JPGs and four preserved source PNGs. Existing workshops copy is retained and remains a separate redesign task. Hero, VR, robotics and speaker-controller code are unchanged.

## Evidence actually checked

- Actual Codex in-app browser at 390×844, 360×740 and 1280×800; both beats visually reviewed. Dedicated landscape photographs replaced the first desktop crop to preserve complete heads. Live heading is above their faces. Phone crop was widened to show all three participants, with softened image edges.
- Enter on Networking and Panel sessions selected the corresponding photograph/caption and updated aria-pressed. Native reverse scroll returned from panels to networking. Caption holds were inspected at opacity 1, and the panel wipe fully resolves to inset 0.
- Both selected images loaded. Desktop currentSrc uses the -wide.jpg files; phone currentSrc uses the portrait JPG. No horizontal overflow in checked sizes. Internal stage scrollTop remained zero.
- Motion-off removes pinning and exposes both copy blocks in ordinary flow: stage position relative, both visibility visible and no aria-hidden attributes. Motion restored. Next: Get hands-on reached #possibilities.
- JavaScript syntax, unique HTML IDs, local source references and fragment destinations passed. Final browser warning/error query empty.
- Source inspection: no perpetual animation loop; updates coalesce in rAF on scroll/resize/state changes, skip offscreen motion work, cancel on hidden page and clean up on terminal pagehide. Image-error handler hides the failed photograph while keeping text; failure was not browser fault-injected.

Evidence images in evidence/conversation-room/: desktop-networking.png, desktop-panels.png, phone-networking.png, phone-panels.png. Early exploratory captures in evidence/speaker-cutouts/phone-networking.png and phone-panels.png are superseded.

## Asset production

Built-in image generation, not an external paid provider. Original portrait PNGs are 1024×1536; wide variants are 1672×941. Delivery JPEG quality 87, progressive/optimised, with no facial retouching scripts. Sources retained in assets/.

| Delivery file | Bytes | Source generation |
| --- | ---: | --- |
| networking-room.jpg | 213934 | exec-d856fdf3-8b23-4efe-ab56-07fc8712a93a.png |
| panel-room.jpg | 193261 | exec-1442be64-302f-4290-85c2-c64cf758095e.png |
| networking-room-wide.jpg | 275420 | exec-95ad00f4-bd47-4986-99c4-ff6ffa4084cd.png |
| panel-room-wide.jpg | 198232 | exec-06fc9eaf-8bd0-46b0-9e6b-548bef83ecc9.png |

Production prompts asked for photorealistic fictional African professionals in premium ink-blue/silver settings, natural skin and anatomy, no text, logos, HUD or event branding, and quiet architectural space above. Networking: three professionals in candid discussion around a lounge table at blue hour. Panel: two women and one man seated on a low stage, viewed from the audience. Wide edits referenced each respective portrait source, preserving the subjects and room direction while pulling the camera back and extending the frame to show complete heads and upper bodies. These are independent generated images, not a continuous filmed location.

## Limits and next action

User should review the live transition and composition. Physical-phone performance, wider browser coverage, image-failure fault injection and native OS reduced-motion preference were not tested; the site's Motion off route was tested. Workshops are the next design slice after review. Partnerships, offers and footer remain unfinished.

# Verification record

Prepared 5 November 2026. This is a standalone source release candidate, not a deployment or a claim of clinical effectiveness.

## Passed

- `npm test`: 54 automated Vitest tests with React Testing Library and a simulated DOM.
- All 33 scenarios: unique IDs, four ordered steps, four choices per step, valid answer indices, completion, same-story replay, progress, badge display, and new-session reset.
- Merged metadata/category grouping and random selection, including Me expansion stories.
- Category retained on random replay, partially completed story exit/back, empty category disabled random button.
- Help open/dismiss before and after starting, Escape dismissal, keyboard focus wrap and restoration.
- Narration cancellation on navigation/start, and disabling speech when only remote voices are reported.
- Gameplay test spies found no fetch or storage writes in exercised paths; static source review found no application HTTP clients, external URLs, persistence, credentials, analytics, or live data.
- Production build succeeds.
- `npm audit` (runtime and development dependencies) reports 0 known vulnerabilities at preparation time. This is a point-in-time registry report, not a security guarantee.

## Not run / not claimed

- Real-browser, screenshot/visual, mobile viewport, actual keyboard assistive-technology, and real audio/voice-service QA. The cloud browser runtime could not launch; simulated-DOM tests do not establish those results.
- Psychological, educational-outcome, therapeutic, or safeguarding validation. This is a practice activity, not a validated assessment.
- CI on GitHub, public deployment, hosting privacy behavior, and installable/offline-PWA behavior.
- Exhaustive proof that dependency internals cannot make any network request. The application has no network integration, and its speech selector requires browser-reported local voices.

## Release-only changes from the source app

- Removed Base44 auth, OAuth, platform SDK/plugin, page tracking, app identifiers, external logo/manifest references, and unused template components/dependencies.
- Created a standalone Vite entry and ESM build configuration; bundled assets use relative paths.
- Fixed Me expansion filtering to use merged metadata, and kept the selected category on random replay.
- Fixed conditional hook ordering on invalid-story rendering, missing help modal during play, modal keyboard focus handling, and speech lifecycle/error handling.
- Narration cannot choose remote/default voices; it requires an explicitly local English voice.
- Disabled random start for empty categories. Removed two unreachable badges whose categories did not exist in the scenario metadata.
- Added tests, MIT license, dependency notices, documentation, and build/test CI configuration. No Base44 source was edited or deployed.

## Content and assets

The app's development history records author-directed creation and additions in January 2026, including scenario packs, reflection cards, badges, and narration. The author authorized this MIT release. This is evidence of the development process, not an independent legal warranty of originality. No external card artwork, photos, audio recordings, or font files are included. System emoji glyphs remain supplied by the device. Runtime dependencies and Lucide icons retain their own license notices.

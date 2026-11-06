# Verification record

Prepared 5 November 2026; browser verification added 6 November 2026. This is a standalone source release candidate, not a deployment or a claim of clinical effectiveness.

## Passed

- `npm test`: 54 automated Vitest tests with React Testing Library and a simulated DOM.
- All 37 scenarios: unique IDs, four ordered steps, four choices per step, valid answer indices, completion, same-story replay, progress, badge display, and new-session reset.
- Merged metadata/category grouping and random selection, including Me expansion stories.
- Category retained on random replay, partially completed story exit/back, empty category disabled random button.
- Help open/dismiss before and after starting, Escape dismissal, keyboard focus wrap and restoration.
- Narration cancellation on navigation/start, and disabling speech when only remote voices are reported.
- Gameplay test spies found no fetch or storage writes in exercised paths; static source review found no application HTTP clients, external URLs, persistence, credentials, analytics, or live data.
- Production build succeeds.
- `npm audit` (runtime and development dependencies) reports 0 known vulnerabilities at preparation time. This is a point-in-time registry report, not a security guarantee.

## Hosted browser verification, 6 November 2026

At commit `0c0903a047b52f41d225a099c791f3d7c319aa7a`:
- [Browser smoke run](https://github.com/Empathyglobal/empathetic-words/actions/runs/42168893874): 8 of 8 checks passed with Playwright 1.56.1 / Chromium 141 on Ubuntu 24.04, desktop Chrome profile and Pixel 7 mobile emulation.
- [Source verification run](https://github.com/Empathyglobal/empathetic-words/actions/runs/42168893609): all 54 Vitest tests and production build passed.
- Browser smoke covers boot, story selection, observation/feeling/need/request completion, retry after a wrong choice, same-story replay, progress, reload reset, interrupted navigation, keyboard dialog open/Tab/Escape/focus restoration, and horizontal overflow checks on exercised screens.
- Local-voice speech controls and remote-only disabling passed with a stubbed speech API. No real audio or OS voice-service claims are made.
- Exercised browser paths generated no external application requests or uncaught page errors; in-memory progress reset on reload and local/session storage stayed empty. This is not an exhaustive network or security proof.
- The actual source has 37 unique story IDs: 12 original, 10 extra, 15 Me expansion. Earlier documentation incorrectly said 33; the existing tests iterate the combined source array.
- Initial CI setup failed because `ubuntu-latest` had moved beyond the pinned Playwright version's supported OS. Pinning Ubuntu 24.04 resolved it. The first full browser run identified the stale 33-story expectation; correcting the fixture to the source's 37 stories resolved the two assertion failures. No application behavior changes were required.

## Not run / not claimed

- Physical mobile devices, non-Chromium browsers, exhaustive screenshot/visual review, keyboard assistive-technology compatibility, and real audio/voice-service QA. Mobile smoke coverage uses an emulated viewport.
- Psychological, educational-outcome, therapeutic, or safeguarding validation. This is a practice activity, not a validated assessment.
- Public deployment, hosting privacy behavior, and installable/offline-PWA behavior.
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

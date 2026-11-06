# Development history

This is a source-snapshot development record. The dates below are supported by the author's Base44 development history; they are not reconstructed Git commits. This repository starts with a sanitized standalone snapshot rather than importing private platform history.

## 2 January 2026: Kind Words Builder development

The author directed expansion of a standalone sister app called Kind Words Builder, without requiring empathy-card artwork or a card-game dependency. Work included:

- Adding an extra scenario library and category metadata, grouping/filtering stories, and using the selected category for random play.
- Adding the Me/self-kindness scenario expansion, merged metadata, and reflection word cards.
- Keeping reflection optional and text-free, with no accounts, saved answers, or localStorage.
- Adding narration for story scenarios and completed kind-word sentences.
- Adding session progress and badges without a complex backend.

## 10 January 2026: Base44 release-preparation pass

Development history records a release-QA request and an AI response describing screen fixes and remaining configuration/hosting tasks. That historical response is not treated as evidence that production tests passed. The standalone release below was independently built and tested from the retrieved source.

## 5 November 2026: Standalone MIT source preview

Prepared the Empathetic Words source preview from the existing app. The interface retains the Kind Words Builder title.

- Preserved the 37 scenario library, four-step play, reflection cards, session progress, and available badges.
- Removed Base44 authentication, OAuth, SDK integration, page tracking, identifiers, external branding, and unused template code.
- Added standalone build configuration, lockfile, MIT license, third-party notices, documentation, and build/test CI.
- Corrected expansion filtering and category-preserving random replay, invalid-story hook ordering, empty-category random starts, and unreachable category badges.
- Added the missing help dialog during active play, keyboard focus wrapping/restoration, and local-only speech selection with lifecycle/error handling.
- Added 54 automated tests, including complete play and same-story replay for every scenario.
- Production build passed; dependency audit reported no known vulnerabilities at preparation time.

The original Base44 app was not edited or deployed during this preparation. At that point, real-browser/mobile layout, actual device audio, and assistive-technology QA remained pending. No psychological or educational-outcome validation is claimed. See [VALIDATION.md](VALIDATION.md) for the verification scope.

## 6 November 2026: Hosted browser smoke verification

Added a pinned Playwright test-only package and GitHub Actions workflow. Eight desktop/mobile-emulated Chromium smoke checks passed, alongside the existing 54 simulated-DOM tests and production build. Corrected the documented scenario count from 33 to 37 after checking the source arrays. No deployment or application behavior changes were made. Actual device audio and comprehensive visual/accessibility review remain outside this verification. See [VALIDATION.md](VALIDATION.md) for linked evidence and scope.

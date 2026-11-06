# Empathetic Words

**Source preview:** this is a tested source package, not a deployed or production-verified release. Desktop and mobile-emulated Chromium smoke tests pass; actual device audio and broader visual/accessibility QA remain pending.

**Kind Words Builder**, a standalone communication-skills practice game by Eric Gonzalez-Payne.

Choose a short fictional situation and build a considerate response in four steps: observation, feeling, need, and request. Includes 37 stories, category filters, optional reflection word cards, in-session progress and badges, and optional on-device English narration.

## Run locally

Use Node.js 22.12 or newer and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. No Base44 account, API key, database, or environment variables are required.

```sh
npm test
npm run build
npm run preview
```

The production output is `dist/`. Serve it with an HTTP static file server. Relative asset URLs support hosting in a subdirectory. No service worker is included; this is not an installable offline PWA.

## Browser smoke tests

The separate test-only package pins Playwright 1.56.1 and uses Chromium against the production build. On a supported system:

```sh
npm run build
npm ci --prefix browser
cd browser
npx playwright install --with-deps chromium
npm test
```

CI uses Ubuntu 24.04. Mobile coverage is Pixel 7 emulation, not a physical phone. Speech APIs are stubbed for deterministic local/remote voice control checks; actual sound is not tested.

## Privacy and safety

- No login, analytics, advertising, tracking pixels, external images, or application API calls.
- Progress, choices, and highlighted reflection cards stay in memory and reset on reload. No cookies, localStorage, or sessionStorage are used by the app.
- Narration only selects English voices that the browser reports as on-device (`localService: true`). It is disabled if none are available. The browser/operating system supplies the voices; device-specific voice availability and audio behavior require testing on the target device.
- Hosting providers may record normal access logs. This repository does not control a host's privacy practices.
- All story characters are fictional practice examples, not student records. Reflection asks children to think, not type or submit personal experiences.
- This is an educational activity, not therapy, assessment, or safeguarding advice. A suggested answer is one practice example, not the only valid feeling or response. If someone is unsafe, seek help from a trusted adult.

## Features and limits

Stories currently have School, Home, and Me metadata. Other category filters have a friendly empty state; random play is disabled for an empty category. Original stories without metadata use the original School fallback. Progress is for the current session only. Narration and animations depend on browser support.

## Verification

Automated tests cover every story's four-step completion and same-story replay, data integrity, category filters, random replay, progress/badges, interrupted play, session reset, help dialogs and focus handling, and local-only speech behavior. Production build and dependency audit are also checked. See [VALIDATION.md](VALIDATION.md) for the actual verification record and limitations. Eight browser smoke checks also pass across desktop and mobile-emulated Chromium. Actual device audio, screen-reader compatibility, and exhaustive visual QA are not claimed.

## License and attribution

Project code and scenario content are provided under the [MIT License](LICENSE), copyright Eric Gonzalez. Professional attribution: Eric Gonzalez-Payne.

This standalone edition was adapted from the author's Base44-built Empathetic Words app. Base44 authentication, OAuth consent, tracking, platform clients, external branding, and unused template components were excluded. No proprietary empathy-card artwork is included. The interface uses CSS, text emoji rendered by the device, and Lucide icons. Dependencies keep their own licenses; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Development record

See [DEVELOPMENT_HISTORY.md](DEVELOPMENT_HISTORY.md) for the evidenced development timeline and standalone-release changes. This source snapshot does not recreate historical Git commits.

import { test, expect } from '@playwright/test';

const answers = [
  'When you took my toy car without asking',
  'I feel frustrated and a bit sad',
  'I need to be asked before someone uses my things',
  'Would you please ask me next time before taking my things?'
];
let externalRequests, pageErrors;
test.beforeEach(async ({ context, page }) => {
  externalRequests = []; pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    if (url.origin !== 'http://127.0.0.1:4173') {
      externalRequests.push(url.href); return route.abort();
    }
    return route.continue();
  });
});
test.afterEach(async () => {
  expect(externalRequests, 'No external application requests').toEqual([]);
  expect(pageErrors, 'No uncaught browser errors').toEqual([]);
});
async function noOverflow(page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
}
async function chooseToy(page) {
  await page.getByRole('button', { name: 'Choose a story', exact: true }).click();
  await page.getByRole('button', { name: /The Borrowed Toy/ }).click();
  await expect(page.getByRole('heading', { name: 'The Borrowed Toy' })).toBeVisible();
}
async function finishToy(page, wrongFirst = false) {
  await page.getByRole('button', { name: 'Start Building Kind Words' }).click();
  for (let i = 0; i < answers.length; i++) {
    await expect(page.getByText('Step ' + (i + 1) + ' of 4', { exact: true })).toBeVisible();
    if (i === 0 && wrongFirst) {
      await page.getByRole('button', { name: /You always take my things!/ }).click();
      await page.getByRole('button', { name: 'Try Again', exact: true }).click();
    }
    await page.getByRole('button').filter({ hasText: answers[i] }).click();
    await expect(page.getByText('Well done!', { exact: true })).toBeVisible();
    await noOverflow(page);
    await page.getByRole('button', { name: i === 3 ? 'See My Kind Words' : 'Next Step', exact: true }).click();
  }
  await expect(page.getByRole('heading', { name: 'Wonderful!' })).toBeVisible();
  await noOverflow(page);
}

test('complete four steps, retry, replay, progress and reload reset', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Kind Words Builder' })).toBeVisible();
  await noOverflow(page);
  await chooseToy(page);
  await finishToy(page, true);
  for (const answer of answers) await expect(page.getByText(answer, { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Play Again', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'The Borrowed Toy' })).toBeVisible();
  await finishToy(page);
  await page.getByRole('button', { name: 'Home', exact: true }).click();
  await expect(page.getByText('1 of 37 stories completed', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Progress', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Your Progress' })).toBeVisible();
  await noOverflow(page);
  await page.reload();
  await page.getByRole('button', { name: 'Progress', exact: true }).click();
  await expect(page.getByText('0/0 correct', { exact: true })).toHaveCount(4);
  await expect(page.getByText('Complete stories to earn badges!', { exact: true })).toBeVisible();
  expect(await page.evaluate(() => [localStorage.length, sessionStorage.length])).toEqual([0, 0]);
});

test('keyboard dialog dismissal, interruption and story navigation', async ({ page }) => {
  await page.goto('/');
  const tips = page.getByRole('button', { name: 'Tips', exact: true });
  await tips.focus(); await page.keyboard.press('Enter');
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('button', { name: 'Close', exact: true })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(dialog.getByRole('button', { name: 'Close', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(tips).toBeFocused();
  await chooseToy(page);
  await page.getByRole('button', { name: 'Start Building Kind Words' }).click();
  await page.getByRole('button', { name: 'How to play', exact: true }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'Go back', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Choose a Story' })).toBeVisible();
  await page.getByRole('button', { name: /The Borrowed Toy/ }).click();
  await expect(page.getByRole('button', { name: 'Start Building Kind Words' })).toBeVisible();
  await page.getByRole('button', { name: 'Go back', exact: true }).click();
  await page.getByRole('button', { name: 'Go back', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Kind Words Builder' })).toBeVisible();
});

// Stub only the speech API. This verifies controls and local-voice selection,
// not sound quality, actual device voices, or OS speech-service networking.
async function speechStub(page, localService) {
  await page.addInitScript(local => {
    window.__speech = { spoken: [], cancellations: 0 };
    Object.defineProperty(window, 'SpeechSynthesisUtterance', { configurable: true, value: class {
      constructor(text) { this.text = text; }
    } });
    Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: {
      getVoices: () => [{ name: 'Test English', lang: 'en-US', localService: local }],
      addEventListener() {}, removeEventListener() {},
      speak(utterance) { window.__speech.spoken.push({ text: utterance.text, local: utterance.voice.localService }); },
      cancel() { window.__speech.cancellations++; }
    } });
  }, localService);
}
test('local narration start, stop and navigation cancellation', async ({ page }) => {
  await speechStub(page, true);
  await page.goto('/'); await chooseToy(page);
  await page.getByRole('button', { name: 'Read aloud', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Stop reading', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Stop reading', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Read aloud', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Read aloud', exact: true }).click();
  await finishToy(page);
  await page.getByRole('button', { name: 'Read your kind words aloud', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Stop reading', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Home', exact: true }).click();
  const speech = await page.evaluate(() => window.__speech);
  expect(speech.spoken).toHaveLength(3);
  expect(speech.spoken.every(item => item.local)).toBe(true);
  expect(speech.cancellations).toBeGreaterThanOrEqual(3);
});
test('remote-only voices leave narration disabled', async ({ page }) => {
  await speechStub(page, false);
  await page.goto('/'); await chooseToy(page);
  await expect(page.getByRole('button', { name: 'Read aloud', exact: true })).toBeDisabled();
  await finishToy(page);
  await expect(page.getByRole('button', { name: 'Read your kind words aloud', exact: true })).toBeDisabled();
  expect(await page.evaluate(() => window.__speech.spoken)).toEqual([]);
});

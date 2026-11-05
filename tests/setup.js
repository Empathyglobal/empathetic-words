import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
afterEach(cleanup);
class ResizeObserver { observe() {} unobserve() {} disconnect() {} }
globalThis.ResizeObserver = ResizeObserver;
window.speechSynthesis = { speak: vi.fn(), cancel: vi.fn(), getVoices: () => [{localService: true, lang: "en-US"}] };
globalThis.SpeechSynthesisUtterance = class { constructor(text) { this.text = text; } };

import { useEffect, useState } from 'react';

// Never fall back to a remote speech service or the browser's default voice.
export default function useLocalSpeech() {
  const [isReading, setIsReading] = useState(false);
  const [voice, setVoice] = useState(null);
  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    const refresh = () => setVoice(synth.getVoices().find(v => v.localService && /^en(?:-|$)/i.test(v.lang)) || null);
    refresh();
    synth.addEventListener?.('voiceschanged', refresh);
    return () => { synth.removeEventListener?.('voiceschanged', refresh); synth.cancel(); };
  }, []);
  const speak = (text, rate = 0.9) => {
    const synth = window.speechSynthesis;
    if (!synth || !voice) return;
    if (isReading) { synth.cancel(); setIsReading(false); return; }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.rate = rate;
    utterance.onend = utterance.onerror = () => setIsReading(false);
    setIsReading(true);
    try { synth.speak(utterance); } catch { setIsReading(false); }
  };
  return { isReading, canRead: !!voice, speak, stop: () => { window.speechSynthesis?.cancel(); setIsReading(false); } };
}

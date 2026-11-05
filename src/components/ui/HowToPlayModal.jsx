import React from 'react';
import { Camera, Heart, Sparkles, MessageCircle, X } from 'lucide-react';
import Modal from './Modal';
import PrimaryButton from './PrimaryButton';

const steps = [
  {
    icon: Camera,
    emoji: "📷",
    title: "Camera",
    subtitle: "Facts",
    description: "Say what happened (no name-calling).",
    color: "#7EB5D6"
  },
  {
    icon: Heart,
    emoji: "💛",
    title: "Heart",
    subtitle: "Feelings",
    description: "Say how you feel inside.",
    color: "#E8A5A5"
  },
  {
    icon: Sparkles,
    emoji: "🌱",
    title: "Need",
    subtitle: "What matters",
    description: "Say what you need (fairness, respect, help…).",
    color: "#B8A5D6"
  },
  {
    icon: MessageCircle,
    emoji: "✋",
    title: "Ask",
    subtitle: "Kind request",
    description: "Ask for something small and doable.",
    color: "#E8C97E"
  }
];

const rules = [
  "Use 'I' words.",
  "No guessing what the other person meant.",
  "No 'always/never'.",
  "Ask for something someone can do."
];

export default function HowToPlayModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="How to Play">
      <div className="space-y-6">
        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="p-4 rounded-xl border-2 border-[#E8E0D8] bg-white"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[#4A4A4A]">{step.title}</h3>
                      <span className="text-xs text-[#8B8078]">({step.subtitle})</span>
                    </div>
                    <p className="text-sm text-[#6B5B4F] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rules */}
        <div className="p-4 bg-[#F5EDE6] rounded-xl">
          <h3 className="font-semibold text-[#4A4A4A] mb-2 text-sm">Rules:</h3>
          <ul className="space-y-1">
            {rules.map((rule, index) => (
              <li key={index} className="text-sm text-[#6B5B4F] flex items-start gap-2">
                <span className="text-[#A8C5A8] font-bold">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Example */}
        <div className="p-4 bg-[#E8F5E8] rounded-xl border-2 border-[#A8C5A8]">
          <h3 className="font-semibold text-[#3D6B3D] mb-2 text-sm flex items-center gap-2">
            <span>✨</span> Example
          </h3>
          <p className="text-sm text-[#4A4A4A] leading-relaxed italic">
            "When I saw you using my marker, I felt upset, because I need respect for my things. 
            Would you be willing to ask first and give it back now?"
          </p>
        </div>

        {/* Safety Note */}
        <div className="p-3 bg-[#FFF8F0] rounded-lg border border-[#E8C9A8]">
          <p className="text-xs text-[#8B6B4A] leading-relaxed">
            ⚠️ If you feel unsafe or someone is hurting you, get help from a grown-up right away.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <PrimaryButton
            onClick={onClose}
            variant="primary"
            size="large"
            className="flex-1"
          >
            Got it!
          </PrimaryButton>
          <PrimaryButton
            onClick={onClose}
            variant="secondary"
            size="large"
            className="flex-1"
          >
            Show me later
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
}

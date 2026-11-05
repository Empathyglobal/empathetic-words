import React, { useState } from 'react';
import { Camera, Heart, Sparkles, MessageCircle, Shuffle, List, Info, HelpCircle, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import PrimaryButton from '../ui/PrimaryButton';
import Modal from '../ui/Modal';
import HowToPlayModal from '../ui/HowToPlayModal';
import Badge from '../ui/Badge';
import { appTitle, shortDescription, tipsForGrownUps, safetyNote, wordBanks, stepNames } from '../data/uiCopy';
import { ALL_NVC_SCENARIOS, filterScenariosByType, SCENARIO_TYPE_ORDER, SCENARIO_TYPE_LABELS } from '../data/nvcScenariosAll';

const steps = [
  { icon: Camera, label: "Camera", sublabel: "Observation", color: "#7EB5D6" },
  { icon: Heart, label: "Heart", sublabel: "Feeling", color: "#E8A5A5" },
  { icon: Sparkles, label: "Need", sublabel: "Need", color: "#B8A5D6" },
  { icon: MessageCircle, label: "Ask", sublabel: "Request", color: "#E8C97E" }
];

export default function HomeScreen({ onStartRandom, onChooseStory, completedCount = 0, totalCount = 0, selectedType = "all", onTypeChange, showHowToPlay, onHowToPlayToggle, onViewProgress, earnedBadges = [] }) {
  const [showTipsModal, setShowTipsModal] = useState(false);
  const hasStories = filterScenariosByType(ALL_NVC_SCENARIOS, selectedType).length > 0;
  const recentBadges = earnedBadges.slice(-3); // Show last 3 earned badges

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF9F5] to-[#F5EDE6] flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Logo/Title Area */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-3xl shadow-lg flex items-center justify-center">
            <span className="text-4xl">🌱</span>
          </div>
          <h1 className="text-3xl font-bold text-[#4A4A4A] mb-2 tracking-tight">
            {appTitle}
          </h1>
          <p className="text-[#6B5B4F] text-base max-w-xs mx-auto leading-relaxed">
            {shortDescription}
          </p>
        </motion.div>

        {/* Steps Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md text-white"
                  style={{ backgroundColor: step.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-[#6B5B4F] mt-2 font-medium">{step.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* How to Play Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full max-w-sm mb-6"
        >
          <button
            onClick={onHowToPlayToggle}
            className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#E8F5E8] to-[#E8F4F8] border-2 border-[#A8C5A8] 
              hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7EB5D6]"
          >
            <div className="flex items-center justify-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#7CB87C]" />
              <div className="text-left">
                <div className="font-semibold text-[#3D6B3D]">How to Play</div>
                <div className="text-xs text-[#6B5B4F]">(1 minute)</div>
              </div>
            </div>
          </button>
        </motion.div>

        {/* Type Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-sm mb-4"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => onTypeChange("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-h-[36px]
                ${selectedType === "all" 
                  ? 'bg-[#A8C5A8] text-white shadow-md' 
                  : 'bg-white text-[#6B5B4F] border border-[#E8E0D8] hover:bg-[#FAFAF8]'
                }`}
            >
              All
            </button>
            {SCENARIO_TYPE_ORDER.map(type => (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-h-[36px]
                  ${selectedType === type 
                    ? 'bg-[#A8C5A8] text-white shadow-md' 
                    : 'bg-white text-[#6B5B4F] border border-[#E8E0D8] hover:bg-[#FAFAF8]'
                  }`}
              >
                {SCENARIO_TYPE_LABELS[type]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-sm space-y-3"
        >
          <PrimaryButton
            onClick={onStartRandom}
            disabled={!hasStories}
            variant="primary"
            size="large"
            className="w-full flex items-center justify-center gap-3"
          >
            <Shuffle className="w-5 h-5" />
            {!hasStories ? "No stories in this category" : selectedType === "all" ? "Start (random story)" : `Random ${SCENARIO_TYPE_LABELS[selectedType]} Story`}
          </PrimaryButton>

          <PrimaryButton
            onClick={onChooseStory}
            variant="secondary"
            size="large"
            className="w-full flex items-center justify-center gap-3"
          >
            <List className="w-5 h-5" />
            Choose a story
          </PrimaryButton>

          <div className="flex gap-3">
            <PrimaryButton
              onClick={onViewProgress}
              variant="soft"
              size="default"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Progress
            </PrimaryButton>

            <PrimaryButton
              onClick={() => setShowTipsModal(true)}
              variant="soft"
              size="default"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <Info className="w-5 h-5" />
              Tips
            </PrimaryButton>
          </div>
        </motion.div>
      </div>

      {/* Badges Section */}
      {recentBadges.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="px-6 pb-4"
        >
          <div className="max-w-sm mx-auto bg-gradient-to-r from-[#FFF8F0] to-[#F5EDE6] rounded-2xl p-4 border border-[#E8E0D8]">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-[#E8C97E]" />
              <h3 className="text-sm font-semibold text-[#4A4A4A]">
                Your Badges ({earnedBadges.length})
              </h3>
            </div>
            <div className="flex gap-3 justify-center">
              {recentBadges.map((badge, index) => (
                <Badge key={badge.id} badge={badge} earned={true} size="small" showDetails={false} />
              ))}
            </div>
            {earnedBadges.length > 3 && (
              <button
                onClick={onViewProgress}
                className="w-full mt-3 text-xs text-[#7EB5D6] hover:text-[#6B9DB8] font-medium transition-colors"
              >
                View all {earnedBadges.length} badges →
              </button>
            )}
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <div className="p-6 text-center space-y-2">
        {completedCount > 0 && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E8] rounded-full">
            <span className="text-lg">🌟</span>
            <span className="text-sm font-medium text-[#3D6B3D]">
              {completedCount} of {totalCount} stories completed
            </span>
          </div>
        )}
        <p className="text-xs text-[#B8B0A8]">
          Learn to express feelings with kindness 💚
        </p>
      </div>

      {/* How to Play Modal */}
      <HowToPlayModal
        isOpen={showHowToPlay}
        onClose={onHowToPlayToggle}
      />

      {/* Tips Modal */}
      <Modal
        isOpen={showTipsModal}
        onClose={() => setShowTipsModal(false)}
        title="Grown-ups / Tips"
      >
        <div className="space-y-4 text-[#4A4A4A]">
          <div className="p-4 bg-[#F0F7F0] rounded-xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-lg">💡</span> Tips for Grown-ups
            </h3>
            <ul className="text-sm space-y-2 text-[#6B5B4F]">
              {tipsForGrownUps.map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-[#FFF8F0] rounded-xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-lg">🌱</span> The 4 Steps
            </h3>
            <div className="text-sm space-y-2 text-[#6B5B4F]">
              <p><strong>1. {stepNames.observation.name} ({stepNames.observation.label}):</strong> {stepNames.observation.description}</p>
              <p><strong>2. {stepNames.feeling.name} ({stepNames.feeling.label}):</strong> {stepNames.feeling.description}</p>
              <p><strong>3. {stepNames.need.name}:</strong> {stepNames.need.description}</p>
              <p><strong>4. {stepNames.request.name} ({stepNames.request.label}):</strong> {stepNames.request.description}</p>
            </div>
          </div>

          <div className="p-4 bg-[#F5EDE6] rounded-xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-lg">⚠️</span> Safety Note
            </h3>
            <p className="text-sm leading-relaxed text-[#6B5B4F]">
              {safetyNote}
            </p>
          </div>

          <details className="p-4 bg-[#E8F4F8] rounded-xl cursor-pointer">
            <summary className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-lg">💬</span> Word Banks (helpful ideas)
            </summary>
            <div className="mt-3 space-y-3 text-sm text-[#6B5B4F]">
              <div>
                <p className="font-medium text-[#4A4A4A] mb-1">Feeling words:</p>
                <p>{wordBanks.feelings.join(" • ")}</p>
              </div>
              <div>
                <p className="font-medium text-[#4A4A4A] mb-1">Needs:</p>
                <p>{wordBanks.needs.join(" • ")}</p>
              </div>
              <div>
                <p className="font-medium text-[#4A4A4A] mb-1">Request starters:</p>
                <p>{wordBanks.requestStarters.join(" • ")}</p>
              </div>
            </div>
          </details>
        </div>
      </Modal>
    </div>
  );
}

import useLocalSpeech from '../../hooks/useLocalSpeech';
import React, { useState } from 'react';
import { ArrowLeft, Info, CheckCircle, Volume2, VolumeX, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PrimaryButton from '../ui/PrimaryButton';
import ChoiceButton from '../ui/ChoiceButton';
import StepIndicator from '../ui/StepIndicator';
import Modal from '../ui/Modal';
import HowToPlayModal from '../ui/HowToPlayModal';
import { getScenarioById } from '../data/nvcScenariosAll';
import { feedbackMessages, stepNames, wordBanks } from '../data/uiCopy';

const stepLabels = ['A', 'B', 'C', 'D'];

export default function PlayScreen({ scenarioId, onBack, onComplete, onTrackPerformance }) {
  const scenario = getScenarioById(scenarioId);
  
  // State management
  const [stage, setStage] = useState("story"); // "story" | "step" | "done"
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [chosenTexts, setChosenTexts] = useState({});
  const [showTipsModal, setShowTipsModal] = useState(false);
  const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
  const { isReading, canRead, speak, stop } = useLocalSpeech();

  // Error handling - if scenario not found
  if (!scenario) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FDF9F5] to-[#F5EDE6] flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#F5EDE6] rounded-2xl flex items-center justify-center text-3xl">
            🤔
          </div>
          <h2 className="text-xl font-semibold text-[#4A4A4A] mb-3">
            Oops! Story Not Found
          </h2>
          <p className="text-[#6B5B4F] mb-6">
            We couldn't find that story. Let's go back and pick another one!
          </p>
          <PrimaryButton onClick={onBack} variant="primary" size="large" className="w-full">
            Back to Home
          </PrimaryButton>
        </div>
      </div>
    );
  }

  const currentStep = scenario.steps[stepIndex];
  
  // Micro-help for each step
  const stepMicroHelp = {
    observation: "Camera = facts only. No blame words.",
    feeling: "Heart = feeling words (sad, upset, worried…), not 'you' thoughts.",
    need: "Need = what matters (fairness, respect, help…).",
    request: "Ask = kind + specific + doable."
  };

  // Handle choice selection
  const handleChoiceSelect = (index) => {
    if (showFeedback) return; // Don't allow selection if feedback is showing

    setSelectedIndex(index);
    const correct = index === currentStep.correctIndex;
    setIsCorrect(correct);
    setShowFeedback(true);

    // Track performance
    if (onTrackPerformance) {
      onTrackPerformance(currentStep.type, correct);
    }

    if (correct) {
      // Store the chosen text
      const stepType = currentStep.type;
      const chosenText = currentStep.options[index];
      setChosenTexts(prev => ({ ...prev, [stepType]: chosenText }));
    }
  };

  // Handle next step
  const handleNext = () => {
    if (stepIndex < scenario.steps.length - 1) {
      // Move to next step
      setStepIndex(stepIndex + 1);
      setSelectedIndex(null);
      setShowFeedback(false);
      setIsCorrect(false);
    } else {
      // All steps completed
      onComplete(chosenTexts);
    }
  };

  // Handle try again
  const handleTryAgain = () => {
    setSelectedIndex(null);
    setShowFeedback(false);
    setIsCorrect(false);
  };

  // Handle start building from story screen
  const handleStartBuilding = () => {
    stop();
    setStage("step");
  };

  const handleReadAloud = () => speak(`${scenario.title}. ${scenario.situation}`);

  // Story Stage
  if (stage === "story") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FDF9F5] to-[#F5EDE6] flex flex-col">
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 rounded-xl hover:bg-white/50 transition-colors duration-200 text-[#6B5B4F]
              focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-w-[44px] min-h-[44px]"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleReadAloud}
              disabled={!canRead}
              title={canRead ? "Read using an on-device English voice" : "No on-device English voice is available"}
              className="p-2 rounded-xl hover:bg-white/50 transition-colors duration-200 text-[#6B5B4F]
                focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-w-[44px] min-h-[44px]"
              aria-label={isReading ? "Stop reading" : "Read aloud"}
            >
              {isReading ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setShowTipsModal(true)}
              className="p-2 rounded-xl hover:bg-white/50 transition-colors duration-200 text-[#6B5B4F]
                focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-w-[44px] min-h-[44px]"
              aria-label="Show tips"
            >
              <Info className="w-6 h-6" />
            </button>
            <button
              onClick={() => setShowHowToPlayModal(true)}
              className="p-2 rounded-xl hover:bg-white/50 transition-colors duration-200 text-[#6B5B4F]
                focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-w-[44px] min-h-[44px]"
              aria-label="How to play"
            >
              <HelpCircle className="w-6 h-6" />
            </button>
            </div>
            </div>

        {/* Step Indicator */}
        <div className="px-4 py-2">
          <StepIndicator currentStep={-1} completedSteps={[]} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            {/* Story Card */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-8 border border-[#E8E0D8]">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#F5EDE6] rounded-2xl flex items-center justify-center text-3xl">
                {scenario.emoji}
              </div>
              
              <h2 className="text-xl font-semibold text-[#4A4A4A] text-center mb-4">
                {scenario.title}
              </h2>
              
              <p className="text-[#6B5B4F] text-center leading-relaxed">
                {scenario.situation}
              </p>
            </div>

            {/* Start Button */}
            <PrimaryButton
              onClick={handleStartBuilding}
              variant="primary"
              size="large"
              className="w-full"
            >
              Start Building Kind Words
            </PrimaryButton>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="p-4 text-center">
          <p className="text-xs text-[#B8B0A8]">
            Read the story, then let's build kind words together
          </p>
        </div>

        {/* How to Play Modal */}
        <HowToPlayModal
          isOpen={showHowToPlayModal}
          onClose={() => setShowHowToPlayModal(false)}
        />

        {/* Tips Modal */}
        <Modal isOpen={showTipsModal} onClose={() => setShowTipsModal(false)} title="Tips">
          <div className="space-y-3 text-sm text-[#4A4A4A]">
            <p>Take your time with each step. There are no wrong answers, only learning!</p>
            <div className="p-3 bg-[#F5EDE6] rounded-xl">
              <p className="font-medium mb-2">The 4 Steps:</p>
              <ul className="space-y-1 text-xs">
                <li>📷 <strong>Camera:</strong> What you saw happen</li>
                <li>💛 <strong>Heart:</strong> How you feel</li>
                <li>🌱 <strong>Need:</strong> What you need</li>
                <li>✋ <strong>Ask:</strong> What you request</li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  // Step Stage
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF9F5] to-[#F5EDE6] flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 rounded-xl hover:bg-white/50 transition-colors duration-200 text-[#6B5B4F]
            focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-w-[44px] min-h-[44px]"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-sm text-[#8B8078] font-medium">
          Step {stepIndex + 1} of 4
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowTipsModal(true)}
            className="p-2 rounded-xl hover:bg-white/50 transition-colors duration-200 text-[#6B5B4F]
              focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-w-[44px] min-h-[44px]"
            aria-label="Show tips"
          >
            <Info className="w-6 h-6" />
          </button>
          <button
            onClick={() => setShowHowToPlayModal(true)}
            className="p-2 rounded-xl hover:bg-white/50 transition-colors duration-200 text-[#6B5B4F]
              focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-w-[44px] min-h-[44px]"
            aria-label="How to play"
          >
            <HelpCircle className="w-6 h-6" />
          </button>
        </div>
      </div>

        {/* Step Indicator */}
      <div className="px-4 py-2">
        <StepIndicator 
          currentStep={stepIndex} 
          completedSteps={Array.from({ length: stepIndex }, (_, i) => i)} 
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto">
        <div className="max-w-md mx-auto">
          {/* Step Title & Prompt */}
          <motion.div
            key={`step-${stepIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-[#4A4A4A] mb-3 text-center">
              {currentStep.title}
            </h2>
            <p className="text-[#6B5B4F] text-center leading-relaxed mb-2">
              {currentStep.prompt}
            </p>
            <p className="text-xs text-[#8B8078] text-center italic">
              {stepMicroHelp[currentStep.type]}
            </p>
            </motion.div>

          {/* Choice Buttons */}
          <motion.div
            key={`choices-${stepIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-3 mb-6"
          >
            {currentStep.options.map((option, index) => {
              let state = "default";
              if (selectedIndex === index) {
                if (showFeedback) {
                  state = isCorrect ? "correct" : "tryAgain";
                } else {
                  state = "selected";
                }
              }

              return (
                <ChoiceButton
                  key={index}
                  label={stepLabels[index]}
                  text={option}
                  state={state}
                  onClick={() => handleChoiceSelect(index)}
                  disabled={showFeedback && selectedIndex !== index}
                />
              );
            })}
          </motion.div>

          {/* Feedback Panel */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`p-5 rounded-2xl shadow-lg ${
                  isCorrect 
                    ? 'bg-[#E8F5E8] border-2 border-[#A8C5A8]' 
                    : 'bg-[#FFF8F0] border-2 border-[#E8C9A8]'
                }`}
              >
                {isCorrect ? (
                  <>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-[#7CB87C]" />
                      <h3 className="font-semibold text-[#3D6B3D]">Well done!</h3>
                    </div>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
                      {feedbackMessages[currentStep.type]?.correct || currentStep.explanation}
                    </p>
                    <PrimaryButton
                      onClick={handleNext}
                      variant="primary"
                      size="default"
                      className="w-full"
                    >
                      {stepIndex < scenario.steps.length - 1 ? 'Next Step' : 'See My Kind Words'}
                    </PrimaryButton>
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-[#8B6B4A] mb-2">Not quite! Let's try again</h3>
                    <p className="text-[#6B5B4F] text-sm leading-relaxed mb-4">
                      {feedbackMessages[currentStep.type]?.tryAgain || "Take another look at the choices. Think about what feels most kind and clear."}
                    </p>
                    <PrimaryButton
                      onClick={handleTryAgain}
                      variant="soft"
                      size="default"
                      className="w-full"
                    >
                      Try Again
                    </PrimaryButton>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <HowToPlayModal isOpen={showHowToPlayModal} onClose={() => setShowHowToPlayModal(false)} />

      {/* Tips Modal */}
      <Modal isOpen={showTipsModal} onClose={() => setShowTipsModal(false)} title="Tips">
        <div className="space-y-3 text-sm text-[#4A4A4A]">
          <p>Take your time with each step. There are no wrong answers, only learning!</p>
          <div className="p-3 bg-[#F5EDE6] rounded-xl">
            <p className="font-medium mb-2">The 4 Steps:</p>
            <ul className="space-y-1 text-xs">
              <li>{stepNames.observation.emoji} <strong>{stepNames.observation.name}:</strong> {stepNames.observation.description}</li>
              <li>{stepNames.feeling.emoji} <strong>{stepNames.feeling.name}:</strong> {stepNames.feeling.description}</li>
              <li>{stepNames.need.emoji} <strong>{stepNames.need.name}:</strong> {stepNames.need.description}</li>
              <li>{stepNames.request.emoji} <strong>{stepNames.request.name}:</strong> {stepNames.request.description}</li>
            </ul>
          </div>
          <details className="p-3 bg-[#E8F4F8] rounded-xl cursor-pointer">
            <summary className="font-medium">Word Banks (helpful ideas)</summary>
            <div className="mt-2 space-y-2 text-xs text-[#6B5B4F]">
              <div>
                <p className="font-medium text-[#4A4A4A]">Feelings:</p>
                <p>{wordBanks.feelings.slice(0, 6).join(" • ")}</p>
              </div>
              <div>
                <p className="font-medium text-[#4A4A4A]">Needs:</p>
                <p>{wordBanks.needs.slice(0, 6).join(" • ")}</p>
              </div>
            </div>
          </details>
        </div>
      </Modal>
    </div>
  );
}

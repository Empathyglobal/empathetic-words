import useLocalSpeech from '../../hooks/useLocalSpeech';
import React, { useState } from 'react';
import { Home, RefreshCw, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import PrimaryButton from '../ui/PrimaryButton';
import StepIndicator from '../ui/StepIndicator';
import ReflectionSection from '../ui/ReflectionSection';

export default function EndScreen({ 
  kindWords = {},
  onRestart,
  onGoHome,
  onPlayAgain
}) {
  const { isReading, canRead, speak } = useLocalSpeech();

  const observation = kindWords.observation || "When I noticed what happened";
  const feeling = kindWords.feeling || "I felt something";
  const need = kindWords.need || "because I need something important";
  const request = kindWords.request || "Would you help me?";
  
  const fullSentence = `${observation}, ${feeling} ${need}. ${request}`;

  const handleReadAloud = () => speak(fullSentence, 0.85);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF9F5] to-[#F5EDE6] flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center justify-center relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-16 h-16 bg-[#A8C5A8] rounded-2xl flex items-center justify-center shadow-lg"
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>
        <button
          onClick={handleReadAloud}
              disabled={!canRead}
              title={canRead ? "Read using an on-device English voice" : "No on-device English voice is available"}
          className="absolute right-4 p-2 rounded-xl hover:bg-white/50 transition-colors duration-200 text-[#6B5B4F]
            focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-w-[44px] min-h-[44px]"
          aria-label={isReading ? "Stop reading" : "Read your kind words aloud"}
        >
          {isReading ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </div>

      {/* Step Indicator - All Complete */}
      <div className="px-4 py-2">
        <StepIndicator currentStep={3} completedSteps={[0, 1, 2, 3]} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-md"
        >
          {/* Celebration */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-[#4A4A4A] mb-2">
              Wonderful! 🌟
            </h1>
            <p className="text-[#6B5B4F]">
              You built kind words all by yourself!
            </p>
          </div>

          {/* Kind Words Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-8 border border-[#E8E0D8]">
            <h2 className="text-lg font-semibold text-[#4A4A4A] text-center mb-4 flex items-center justify-center gap-2">
              <span className="text-xl">💬</span> Your Kind Words
            </h2>

            {/* Individual Parts */}
            <div className="space-y-3 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="p-3 bg-[#E8F4F8] rounded-xl border-l-4 border-[#7EB5D6]"
              >
                <p className="text-xs text-[#5B8FA8] font-medium mb-1">📷 Observation</p>
                <p className="text-sm text-[#4A4A4A]">{observation}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-3 bg-[#FBF0F0] rounded-xl border-l-4 border-[#E8A5A5]"
              >
                <p className="text-xs text-[#C07878] font-medium mb-1">❤️ Feeling</p>
                <p className="text-sm text-[#4A4A4A]">{feeling}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="p-3 bg-[#F5F0FA] rounded-xl border-l-4 border-[#B8A5D6]"
              >
                <p className="text-xs text-[#8B78A8] font-medium mb-1">✨ Need</p>
                <p className="text-sm text-[#4A4A4A]">{need}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="p-3 bg-[#FDF8E8] rounded-xl border-l-4 border-[#E8C97E]"
              >
                <p className="text-xs text-[#B89850] font-medium mb-1">💬 Request</p>
                <p className="text-sm text-[#4A4A4A]">{request}</p>
              </motion.div>
            </div>

            {/* Full Sentence */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="p-4 bg-[#F5EDE6] rounded-xl"
            >
              <p className="text-xs text-[#8B8078] font-medium mb-2 text-center">
                All together:
              </p>
              <p className="text-sm text-[#4A4A4A] text-center leading-relaxed italic">
                "{fullSentence}"
              </p>
            </motion.div>
          </div>

          {/* Reflection Section */}
          <ReflectionSection />

          {/* Action Buttons */}
          <div className="space-y-3 mt-6">
            <PrimaryButton
              onClick={onRestart}
              variant="primary"
              size="large"
              className="w-full flex items-center justify-center gap-3"
            >
              <RefreshCw className="w-5 h-5" />
              New Random Story
            </PrimaryButton>

            <div className="flex gap-3">
              <PrimaryButton
                onClick={onPlayAgain}
                variant="secondary"
                size="default"
                className="flex-1 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Play Again
              </PrimaryButton>
              
              <PrimaryButton
                onClick={onGoHome}
                variant="secondary"
                size="default"
                className="flex-1 flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </PrimaryButton>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center">
        <p className="text-xs text-[#B8B0A8]">
          You're learning to speak with kindness 💚
        </p>
      </div>
    </div>
  );
}

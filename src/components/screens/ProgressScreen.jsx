import React from 'react';
import { ArrowLeft, Camera, Heart, Sparkles, MessageCircle, TrendingUp, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import PrimaryButton from '../ui/PrimaryButton';
import Badge from '../ui/Badge';
import { BADGES, getNextBadge } from '../data/badges';

const stepConfig = {
  observation: { icon: Camera, label: "Camera", color: "#7EB5D6", emoji: "📷" },
  feeling: { icon: Heart, label: "Heart", color: "#E8A5A5", emoji: "💛" },
  need: { icon: Sparkles, label: "Need", color: "#B8A5D6", emoji: "🌱" },
  request: { icon: MessageCircle, label: "Ask", color: "#E8C97E", emoji: "✋" }
};

const DEFAULT_PERFORMANCE = {
  observation: { attempts: 0, correct: 0, streak: 0 },
  feeling: { attempts: 0, correct: 0, streak: 0 },
  need: { attempts: 0, correct: 0, streak: 0 },
  request: { attempts: 0, correct: 0, streak: 0 }
};

export default function ProgressScreen({
  onBack,
  completedCount = 0,
  totalCount = 0,
  performance = DEFAULT_PERFORMANCE,
  earnedBadges = [],
  completedStories = new Set(),
  scenariosByType = {}
}) {
  // Normalize performance so we never crash if props are missing
  const perf = {
    observation: { ...DEFAULT_PERFORMANCE.observation, ...(performance?.observation || {}) },
    feeling: { ...DEFAULT_PERFORMANCE.feeling, ...(performance?.feeling || {}) },
    need: { ...DEFAULT_PERFORMANCE.need, ...(performance?.need || {}) },
    request: { ...DEFAULT_PERFORMANCE.request, ...(performance?.request || {}) }
  };

  // Normalize completed stories set
  const completedSet = completedStories instanceof Set ? completedStories : new Set();
  const safeCompletedCount = Number.isFinite(completedCount) ? completedCount : completedSet.size;
  const safeTotalCount = Number.isFinite(totalCount) ? totalCount : 0;

  const totalAttempts = Object.values(perf).reduce((sum, step) => sum + (Number(step.attempts) || 0), 0);
  const totalCorrect = Object.values(perf).reduce((sum, step) => sum + (Number(step.correct) || 0), 0);
  const overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  const pieData = Object.entries(perf).map(([stepType, data]) => ({
    name: stepConfig[stepType].label,
    value: Number(data.correct) || 0,
    color: stepConfig[stepType].color
  }));

  const nextBadge =
    earnedBadges.length >= BADGES.length
      ? null
      : getNextBadge(completedSet, safeTotalCount, scenariosByType || {}, perf);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF9F5] to-[#F5EDE6] flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 rounded-xl hover:bg-white/50 transition-colors duration-200 text-[#6B5B4F]
            focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-w-[44px] min-h-[44px]"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-[#4A4A4A]">Your Progress</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pb-6 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Overall Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8E0D8]">
              <div className="flex flex-col items-center text-center">
                <Award className="w-8 h-8 text-[#E8C97E] mb-2" />
                <div className="text-2xl font-bold text-[#4A4A4A]">
                  {safeCompletedCount}
                  {safeTotalCount > 0 && (
                    <span className="text-sm text-[#8B8078] font-medium">/{safeTotalCount}</span>
                  )}
                </div>
                <div className="text-xs text-[#8B8078] mt-1">Stories<br/>Completed</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8E0D8]">
              <div className="flex flex-col items-center text-center">
                <Target className="w-8 h-8 text-[#7EB5D6] mb-2" />
                <div className="text-2xl font-bold text-[#4A4A4A]">{overallAccuracy}%</div>
                <div className="text-xs text-[#8B8078] mt-1">Overall<br/>Accuracy</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8E0D8]">
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="w-8 h-8 text-[#A8C5A8] mb-2" />
                <div className="text-2xl font-bold text-[#4A4A4A]">{totalCorrect}</div>
                <div className="text-xs text-[#8B8078] mt-1">Correct<br/>Answers</div>
              </div>
            </div>
          </motion.div>

          {/* Performance by Step */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E0D8]"
          >
            <h2 className="text-lg font-semibold text-[#4A4A4A] mb-4">Performance by Step</h2>

            <div className="space-y-4">
              {Object.entries(stepConfig).map(([stepType, config]) => {
                const Icon = config.icon;
                const data = perf[stepType] || { attempts: 0, correct: 0 };
                const accuracy = data.attempts > 0 ? Math.round((data.correct / data.attempts) * 100) : 0;

                return (
                  <div key={stepType} className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                          style={{ backgroundColor: config.color }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-[#4A4A4A] text-sm">{config.label}</span>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-semibold text-[#4A4A4A]">{accuracy}%</div>
                        <div className="text-xs text-[#8B8078]">
                          {data.correct}/{data.attempts} correct
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-[#F5EDE6] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${accuracy}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: config.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual Chart */}
          {totalCorrect > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E0D8]"
            >
              <h2 className="text-lg font-semibold text-[#4A4A4A] mb-4 text-center">
                Correct Answers by Step
              </h2>

              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      percent > 0 ? `${name} ${(percent * 100).toFixed(0)}%` : ''
                    }
                    outerRadius={80}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          )}

          {/* Encouragement Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 bg-gradient-to-r from-[#E8F5E8] to-[#E8F4F8] rounded-2xl border-2 border-[#A8C5A8]"
          >
            <div className="text-center">
              <div className="text-3xl mb-2">
                {overallAccuracy >= 80 ? '🌟' : overallAccuracy >= 60 ? '⭐' : '🌱'}
              </div>
              <h3 className="font-semibold text-[#3D6B3D] mb-2">
                {overallAccuracy >= 80
                  ? 'Amazing work!'
                  : overallAccuracy >= 60
                  ? 'Keep it up!'
                  : safeCompletedCount > 0
                  ? 'Great start!'
                  : 'Ready to begin?'}
              </h3>
              <p className="text-sm text-[#6B5B4F]">
                {overallAccuracy >= 80
                  ? "You're getting really good at building kind words!"
                  : overallAccuracy >= 60
                  ? "You're learning how to express feelings with kindness."
                  : safeCompletedCount > 0
                  ? "Every story helps you learn more about kind communication."
                  : "Start your first story to begin tracking your progress!"}
              </p>
            </div>
          </motion.div>

          {/* Badges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-lg p-6 border border-[#E8E0D8]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-[#E8C97E]" />
              <h2 className="text-lg font-semibold text-[#4A4A4A]">Your Badges</h2>
            </div>

            {earnedBadges.length > 0 ? (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-[#6B5B4F] mb-3">
                  Earned ({earnedBadges.length})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {earnedBadges.map((badge) => (
                    <Badge key={badge.id} badge={badge} earned={true} size="default" showDetails={true} />
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-[#6B5B4F]">Complete stories to earn badges!</p>
            )}

            {nextBadge && (
              <div className="pt-4 border-t border-[#E8E0D8]">
                <h3 className="text-sm font-medium text-[#6B5B4F] mb-3">Next Goal</h3>
                <div className="flex items-center gap-4 p-3 bg-[#F5EDE6] rounded-xl">
                  <Badge badge={nextBadge} earned={false} size="default" showDetails={false} />
                  <div className="flex-1">
                    <p className="font-semibold text-[#4A4A4A] text-sm">{nextBadge.title}</p>
                    <p className="text-xs text-[#6B5B4F]">{nextBadge.description}</p>
                  </div>
                </div>
              </div>
            )}

            {earnedBadges.length === BADGES.length && (
              <div className="text-center p-4 bg-gradient-to-r from-[#E8F5E8] to-[#F5F0FA] rounded-xl">
                <p className="text-2xl mb-2">🎉</p>
                <p className="font-semibold text-[#3D6B3D]">You've earned all badges!</p>
                <p className="text-xs text-[#6B5B4F] mt-1">You're a Kind Words Master!</p>
              </div>
            )}
          </motion.div>

          <PrimaryButton onClick={onBack} variant="secondary" size="large" className="w-full">
            Back to Home
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

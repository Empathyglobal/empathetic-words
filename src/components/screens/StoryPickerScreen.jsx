import React from 'react';
import { ArrowLeft, BookOpen, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import PrimaryButton from '../ui/PrimaryButton';
import { 
  ALL_NVC_SCENARIOS, 
  SCENARIO_TYPE_ORDER, 
  SCENARIO_TYPE_LABELS,
  groupScenariosByType,
  filterScenariosByType
} from '../data/nvcScenariosAll';

export default function StoryPickerScreen({ onBack, onSelectStory, completedStories = new Set(), selectedType = "all", onTypeChange }) {
  // Filter and group scenarios
  const filteredScenarios = filterScenariosByType(ALL_NVC_SCENARIOS, selectedType);
  const groupedScenarios = groupScenariosByType(filteredScenarios);
  
  // Get types to display
  const typesToShow = selectedType === "all" 
    ? SCENARIO_TYPE_ORDER.filter(type => groupedScenarios[type]?.length > 0)
    : [selectedType];

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
        <h1 className="text-xl font-semibold text-[#4A4A4A]">Choose a Story</h1>
      </div>

      {/* Type Filter Chips */}
      <div className="px-4 py-2">
        <div className="max-w-md mx-auto flex flex-wrap gap-2">
          <button
            onClick={() => onTypeChange("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-h-[32px]
              ${selectedType === "all" 
                ? 'bg-[#A8C5A8] text-white shadow-sm' 
                : 'bg-white text-[#6B5B4F] border border-[#E8E0D8] hover:bg-[#FAFAF8]'
              }`}
          >
            All
          </button>
          {SCENARIO_TYPE_ORDER.map(type => (
            <button
              key={type}
              onClick={() => onTypeChange(type)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-h-[32px]
                ${selectedType === type 
                  ? 'bg-[#A8C5A8] text-white shadow-sm' 
                  : 'bg-white text-[#6B5B4F] border border-[#E8E0D8] hover:bg-[#FAFAF8]'
                }`}
            >
              {SCENARIO_TYPE_LABELS[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Story List */}
      <div className="flex-1 px-4 pb-6 overflow-y-auto">
        {filteredScenarios.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#F5EDE6] rounded-2xl flex items-center justify-center text-3xl">
              🌱
            </div>
            <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">
              No stories here yet
            </h3>
            <p className="text-[#6B5B4F] mb-4">
              Try another type to see more stories.
            </p>
            <PrimaryButton
              onClick={() => onTypeChange("all")}
              variant="primary"
              size="default"
            >
              Show All Stories
            </PrimaryButton>
          </div>
        ) : (
          <div className="max-w-md mx-auto space-y-6">
            {typesToShow.map(type => {
              const stories = groupedScenarios[type] || [];
              if (stories.length === 0) return null;

              return (
                <div key={type}>
                  {/* Section Header */}
                  <h3 className="text-sm font-semibold text-[#8B8078] mb-2 px-2">
                    {SCENARIO_TYPE_LABELS[type]}
                  </h3>

                  {/* Stories in this type */}
                  <div className="space-y-3">
                    {stories.map((story, index) => {
                      const isCompleted = completedStories.has(story.id);
                      return (
                        <motion.button
                          key={story.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          onClick={() => onSelectStory(story.id)}
                          className={`w-full rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] border text-left
                            focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-h-[80px]
                            ${isCompleted 
                              ? 'bg-[#F0F7F0] border-[#A8C5A8]' 
                              : 'bg-white border-[#E8E0D8]'
                            }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl relative
                              ${isCompleted ? 'bg-[#E8F5E8]' : 'bg-[#F5EDE6]'}`}>
                              {story.emoji}
                              {isCompleted && (
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#7CB87C] rounded-full flex items-center justify-center">
                                  <CheckCircle2 className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-[#4A4A4A]">{story.title}</h3>
                                {isCompleted && (
                                  <span className="text-xs text-[#7CB87C] font-medium">✓ Done</span>
                                )}
                              </div>
                              <p className="text-sm text-[#8B8078] line-clamp-2">{story.situation}</p>
                            </div>
                            <BookOpen className="w-5 h-5 text-[#B8B0A8] flex-shrink-0" />
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer Hint */}
      <div className="p-4 text-center">
        <p className="text-xs text-[#B8B0A8]">
          Pick any story to start building kind words
        </p>
      </div>
    </div>
  );
}

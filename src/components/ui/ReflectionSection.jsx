import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WORD_CARDS, WORD_CARD_CATEGORIES } from '../data/wordCards';

export default function ReflectionSection() {
  const [selectedTab, setSelectedTab] = useState("feelings");
  const [highlightedCards, setHighlightedCards] = useState(new Set());

  const handleCardClick = (cardText) => {
    setHighlightedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardText)) {
        newSet.delete(cardText);
      } else {
        newSet.add(cardText);
      }
      return newSet;
    });
  };

  const tabs = [
    { id: "feelings", label: "Feelings", emoji: "💛" },
    { id: "needs", label: "Needs", emoji: "🌱" },
    { id: "all", label: "All", emoji: "✨" }
  ];

  const getCardsToShow = () => {
    if (selectedTab === "all") {
      return WORD_CARD_CATEGORIES.map(category => ({
        category: category.label,
        emoji: category.emoji,
        cards: WORD_CARDS[category.id] || []
      }));
    } else {
      return [{
        category: null,
        cards: WORD_CARDS[selectedTab] || []
      }];
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="mt-8 p-6 bg-gradient-to-r from-[#FDF9F5] to-[#F5EDE6] rounded-3xl border-2 border-[#E8E0D8]"
    >
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-[#4A4A4A] mb-2">
          Real-life check-in (just think)
        </h2>
        <p className="text-sm text-[#6B5B4F] leading-relaxed max-w-md mx-auto">
          Imagine this happened in real life.<br />
          What might you feel inside?<br />
          What might you be needing?<br />
          <span className="italic text-xs text-[#8B8078]">You don't have to answer. Just notice.</span>
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-h-[36px]
              ${selectedTab === tab.id
                ? 'bg-[#A8C5A8] text-white shadow-md'
                : 'bg-white text-[#6B5B4F] border border-[#E8E0D8] hover:bg-[#FAFAF8]'
              }`}
          >
            <span className="mr-1">{tab.emoji}</span> {tab.label}
          </button>
        ))}
      </div>

      {/* Word Cards */}
      <div className="space-y-6">
        {getCardsToShow().map((section, sectionIdx) => (
          <div key={sectionIdx}>
            {section.category && (
              <h3 className="text-sm font-semibold text-[#8B8078] mb-3 flex items-center gap-2">
                <span>{section.emoji}</span> {section.category}
              </h3>
            )}
            <div className="flex flex-wrap gap-2 justify-center">
              {section.cards.map((card, cardIdx) => {
                const isHighlighted = highlightedCards.has(card.text);
                return (
                  <motion.button
                    key={cardIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: cardIdx * 0.02 }}
                    onClick={() => handleCardClick(card.text)}
                    className={`px-4 py-2 rounded-xl text-sm transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-h-[40px]
                      ${isHighlighted
                        ? 'bg-[#A8C5A8] text-white shadow-md transform scale-105'
                        : 'bg-white text-[#4A4A4A] border border-[#E8E0D8] hover:bg-[#FAFAF8] hover:shadow-sm'
                      }`}
                  >
                    <span className="mr-1">{card.emoji}</span>
                    {card.text}
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Optional hint */}
      <p className="text-xs text-center text-[#B8B0A8] mt-4 italic">
        Tap any card if it feels true for you (optional)
      </p>
    </motion.div>
  );
}
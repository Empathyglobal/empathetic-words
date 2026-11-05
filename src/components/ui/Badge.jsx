import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function Badge({ badge, earned = false, size = "default", showDetails = true }) {
  const sizeClasses = {
    small: "w-12 h-12 text-xl",
    default: "w-16 h-16 text-2xl",
    large: "w-20 h-20 text-3xl"
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div
        className={`${sizeClasses[size]} rounded-2xl flex items-center justify-center shadow-md relative
          ${earned 
            ? 'bg-white border-2' 
            : 'bg-[#F5EDE6] border-2 border-[#E8E0D8] opacity-40'
          }`}
        style={earned ? { borderColor: badge.color } : {}}
      >
        {earned ? (
          <span className="filter-none">{badge.emoji}</span>
        ) : (
          <>
            <span className="opacity-30">{badge.emoji}</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#B8B0A8]" />
            </div>
          </>
        )}
      </div>
      
      {showDetails && (
        <div className="mt-2 text-center max-w-[100px]">
          <p className={`text-xs font-semibold ${earned ? 'text-[#4A4A4A]' : 'text-[#B8B0A8]'}`}>
            {badge.title}
          </p>
          <p className="text-xs text-[#B8B0A8] line-clamp-2 mt-0.5">
            {badge.description}
          </p>
        </div>
      )}
    </motion.div>
  );
}

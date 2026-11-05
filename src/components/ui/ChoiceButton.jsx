import React from 'react';
import { cn } from "@/lib/utils";
import { Check, RefreshCw } from 'lucide-react';

export default function ChoiceButton({ 
  label,
  text,
  onClick,
  state = "default", // "default" | "selected" | "correct" | "tryAgain"
  disabled = false
}) {
  const baseStyles = "w-full text-left p-4 rounded-xl transition-all duration-300 ease-out transform hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[72px]";
  
  const stateStyles = {
    default: "bg-white hover:bg-[#FAFAF8] border-2 border-[#E8E0D8] text-[#4A4A4A] focus:ring-[#A8C5A8] shadow-sm hover:shadow-md",
    selected: "bg-[#F0F7F0] border-2 border-[#A8C5A8] text-[#4A4A4A] focus:ring-[#A8C5A8] shadow-md",
    correct: "bg-[#E8F5E8] border-2 border-[#7CB87C] text-[#3D6B3D] focus:ring-[#7CB87C] shadow-md",
    tryAgain: "bg-[#FFF8F0] border-2 border-[#E8C9A8] text-[#8B6B4A] focus:ring-[#E8C9A8] shadow-md animate-pulse"
  };

  const labelStyles = {
    default: "bg-[#F5EDE6] text-[#6B5B4F]",
    selected: "bg-[#A8C5A8] text-white",
    correct: "bg-[#7CB87C] text-white",
    tryAgain: "bg-[#E8C9A8] text-[#6B5B4F]"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || state === "correct"}
      className={cn(baseStyles, stateStyles[state])}
    >
      <div className="flex items-start gap-3">
        <span className={cn(
          "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm transition-colors duration-300",
          labelStyles[state]
        )}>
          {state === "correct" ? <Check className="w-4 h-4" /> : 
           state === "tryAgain" ? <RefreshCw className="w-4 h-4" /> : label}
        </span>
        <span className="text-base leading-relaxed pt-1">{text}</span>
      </div>
    </button>
  );
}
import React from 'react';
import { Camera, Heart, Sparkles, MessageCircle, Check } from 'lucide-react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

const steps = [
  { id: 0, name: "Camera", label: "Observation", icon: Camera, color: "#7EB5D6" },
  { id: 1, name: "Heart", label: "Feeling", icon: Heart, color: "#E8A5A5" },
  { id: 2, name: "Need", label: "Need", icon: Sparkles, color: "#B8A5D6" },
  { id: 3, name: "Ask", label: "Request", icon: MessageCircle, color: "#E8C97E" }
];

export default function StepIndicator({ currentStep, completedSteps = [] }) {
  // Clamp currentStep to valid range [0, steps.length - 1]
  const numericCurrentStep = typeof currentStep === "number" ? currentStep : 0;
  const clampedCurrentStep = Math.min(Math.max(numericCurrentStep, 0), steps.length - 1);
  
  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-between relative">
        {/* Connection Line */}
        <div className="absolute top-5 left-8 right-8 h-1 bg-[#E8E0D8] rounded-full" />
        <motion.div 
          className="absolute top-5 left-8 h-1 bg-[#A8C5A8] rounded-full"
          initial={{ width: 0 }}
          animate={{ 
            width: `${(clampedCurrentStep / (steps.length - 1)) * (100 - 16)}%` 
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = completedSteps.includes(index);
          const isCurrent = clampedCurrentStep === index;
          const isPast = index < clampedCurrentStep;
          
          return (
            <motion.div
              key={step.id}
              className="flex flex-col items-center relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <motion.div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm",
                  isCompleted || isPast
                    ? "bg-[#A8C5A8] text-white shadow-md"
                    : isCurrent
                    ? "text-white shadow-lg ring-4 ring-white"
                    : "bg-white text-[#B8B0A8] border-2 border-[#E8E0D8]"
                )}
                style={isCurrent ? { backgroundColor: step.color } : {}}
                animate={isCurrent ? { scale: [1, 1.05, 1] } : {}}
                transition={{ repeat: isCurrent ? Infinity : 0, duration: 2 }}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </motion.div>
              
              <div className="mt-2 text-center">
                <p className={cn(
                  "text-xs font-medium transition-colors duration-300",
                  isCurrent ? "text-[#4A4A4A]" : "text-[#8B8078]"
                )}>
                  {step.name}
                </p>
                <p className={cn(
                  "text-[10px] transition-colors duration-300",
                  isCurrent ? "text-[#6B5B4F]" : "text-[#B8B0A8]"
                )}>
                  {step.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
import React from 'react';
import { cn } from "@/lib/utils";

export default function PrimaryButton({ 
  children, 
  onClick, 
  variant = "primary",
  size = "default",
  className,
  disabled = false
}) {
  const baseStyles = "font-medium rounded-2xl transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  
  const variants = {
    primary: "bg-[#A8C5A8] hover:bg-[#96B896] text-white shadow-md hover:shadow-lg focus:ring-[#A8C5A8]",
    secondary: "bg-white hover:bg-gray-50 text-[#4A4A4A] border-2 border-[#E8E0D8] shadow-sm hover:shadow-md focus:ring-[#E8E0D8]",
    soft: "bg-[#F5EDE6] hover:bg-[#EDE3DA] text-[#6B5B4F] shadow-sm focus:ring-[#E8E0D8]"
  };
  
  const sizes = {
    small: "px-4 py-2 text-sm min-h-[44px]",
    default: "px-6 py-3 text-base min-h-[48px]",
    large: "px-8 py-4 text-lg min-h-[56px]"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}
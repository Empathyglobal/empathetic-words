import React, { useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children 
}) {
  const titleId = useId();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusable = () => [...(dialogRef.current?.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex="0"]') || [])];
    focusable()[0]?.focus();

    // Handle Escape key
    const handleEscape = (e) => {
      if (e.key === 'Tab') {
        const items = focusable(); const first = items[0]; const last = items.at(-1);
        if (!first) { e.preventDefault(); return; }
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId}>
           {/* Backdrop */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.2 }}
             className="absolute inset-0 bg-[#4A4A4A]/30 backdrop-blur-sm"
             onClick={onClose}
           />

           {/* Modal Content */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.95, y: 20 }}
             transition={{ duration: 0.3, ease: "easeOut" }}
             className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-hidden"
           >
             {/* Header */}
             <div className="flex items-center justify-between p-6 border-b border-[#E8E0D8]">
               <h2 id={titleId} className="text-xl font-semibold text-[#4A4A4A]">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#F5EDE6] transition-colors duration-200 text-[#6B5B4F]
                  focus:outline-none focus:ring-2 focus:ring-[#7EB5D6] min-w-[44px] min-h-[44px]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
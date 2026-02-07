'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import type { QuestionOption } from '@/types';
import { cn } from '@/lib/utils';
import { playTap } from '@/lib/sounds';

interface ChipSelectorProps {
  options: QuestionOption[];
  onSelect: (value: string) => void;
  allowCustom?: boolean;
}

export default function ChipSelector({ options, onSelect, allowCustom }: ChipSelectorProps) {
  const [showCustom, setShowCustom] = useState(false);
  const [customValue, setCustomValue] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <div className="flex flex-wrap gap-2">
        {options.map((opt, i) => (
          <motion.button
            key={opt.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            onClick={() => { playTap(); onSelect(opt.label); }}
            className={cn(
              'px-4 py-2.5 rounded-full text-sm font-medium border transition-all',
              'border-stone-200 text-stone-700 bg-white',
              'hover:border-sage-400 hover:bg-sage-50 hover:text-sage-700',
              'active:scale-95 hover:shadow-sm'
            )}
          >
            {opt.label}
          </motion.button>
        ))}
        {allowCustom && !showCustom && (
          <button
            onClick={() => setShowCustom(true)}
            className="px-4 py-2.5 rounded-full text-sm font-medium border border-dashed border-stone-300 text-stone-400 hover:border-sage-400 hover:text-sage-600 transition-all"
          >
            + Other
          </button>
        )}
      </div>
      {showCustom && (
        <div className="flex gap-2">
          <input
            type="text"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && customValue.trim() && onSelect(customValue.trim())}
            placeholder="Type here..."
            className="flex-1 px-3 py-2 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-sage-400"
            autoFocus
          />
          <button
            onClick={() => customValue.trim() && onSelect(customValue.trim())}
            className="px-3 py-2 bg-sage-500 text-white rounded-lg"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      )}
    </motion.div>
  );
}

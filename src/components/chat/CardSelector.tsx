'use client';

import { motion } from 'framer-motion';
import type { QuestionOption } from '@/types';
import { cn } from '@/lib/utils';
import { playTap } from '@/lib/sounds';

interface CardSelectorProps {
  options: QuestionOption[];
  onSelect: (value: string) => void;
}

export default function CardSelector({ options, onSelect }: CardSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 sm:grid-cols-3 gap-2"
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => { playTap(); onSelect(opt.label); }}
          className={cn(
            'flex flex-col items-center gap-2 p-4 rounded-xl border transition-all text-center',
            'border-stone-200 bg-white hover:border-sage-400 hover:bg-sage-50',
            'active:scale-95'
          )}
        >
          {opt.icon && <span className="text-2xl">{opt.icon}</span>}
          <span className="text-sm font-semibold text-stone-800">{opt.label}</span>
          {opt.description && (
            <span className="text-xs text-stone-500">{opt.description}</span>
          )}
        </button>
      ))}
    </motion.div>
  );
}

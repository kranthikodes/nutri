'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { QuestionOption } from '@/types';
import { cn } from '@/lib/utils';
import { playTap, playClick } from '@/lib/sounds';

interface MultiSelectProps {
  options: QuestionOption[];
  onSubmit: (values: string[]) => void;
  allowCustom?: boolean;
}

export default function MultiSelect({ options, onSubmit, allowCustom }: MultiSelectProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [customValues, setCustomValues] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState('');

  const toggle = (label: string) => {
    playTap();
    const next = new Set(selected);
    // If "None" is selected, deselect everything else
    if (label === 'None' || label === 'None / Not sure') {
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.clear();
        next.add(label);
      }
    } else {
      // Deselect "None" if selecting something else
      next.delete('None');
      next.delete('None / Not sure');
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
    }
    setSelected(next);
  };

  const addCustom = () => {
    if (customInput.trim()) {
      setCustomValues([...customValues, customInput.trim()]);
      const next = new Set(selected);
      next.delete('None');
      next.delete('None / Not sure');
      next.add(customInput.trim());
      setSelected(next);
      setCustomInput('');
    }
  };

  const handleSubmit = () => {
    if (selected.size > 0) {
      playClick();
      onSubmit(Array.from(selected));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
    >
      <div className="flex flex-wrap gap-2">
        {[...options, ...customValues.map(v => ({ id: v, label: v }))].map((opt) => {
          const isSelected = selected.has(opt.label);
          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.label)}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all',
                isSelected
                  ? 'border-sage-500 bg-sage-50 text-sage-700'
                  : 'border-stone-200 text-stone-700 bg-white hover:border-sage-300'
              )}
            >
              {isSelected && <Check className="w-3.5 h-3.5" />}
              {opt.label}
            </button>
          );
        })}
      </div>

      {allowCustom && (
        <div className="flex gap-2">
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addCustom()}
            placeholder="Add other..."
            className="flex-1 px-3 py-2 rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-sage-400"
          />
          {customInput && (
            <button
              onClick={addCustom}
              className="px-3 py-2 bg-sage-100 text-sage-700 rounded-lg text-sm font-medium"
            >
              Add
            </button>
          )}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={selected.size === 0}
        className={cn(
          'w-full py-2.5 rounded-lg text-sm font-semibold transition-colors',
          selected.size > 0
            ? 'bg-sage-500 hover:bg-sage-600 text-white'
            : 'bg-stone-100 text-stone-400 cursor-not-allowed'
        )}
      >
        Continue ({selected.size} selected)
      </button>
    </motion.div>
  );
}

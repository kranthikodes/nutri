'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { SliderConfig } from '@/types';

interface SliderInputProps {
  config: SliderConfig;
  onSubmit: (value: number) => void;
}

export default function SliderInput({ config, onSubmit }: SliderInputProps) {
  const mid = Math.round((config.min + config.max) / 2);
  const [value, setValue] = useState(mid);

  const labelEntries = config.labels ? Object.entries(config.labels) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-stone-200 p-5 max-w-md"
    >
      <div className="text-center mb-4">
        <span className="text-3xl font-bold text-sage-600">
          {value}
        </span>
        {config.unit && (
          <span className="text-lg text-stone-400 ml-1">{config.unit}</span>
        )}
      </div>

      <input
        type="range"
        min={config.min}
        max={config.max}
        step={config.step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full mb-2"
      />

      <div className="flex justify-between text-xs text-stone-400 mb-1">
        <span>{config.min}{config.unit}</span>
        <span>{config.max}{config.unit}</span>
      </div>

      {labelEntries.length > 0 && (
        <div className="flex justify-between text-xs text-stone-400 mt-2">
          {labelEntries.map(([key, label]) => (
            <span key={key}>{label}</span>
          ))}
        </div>
      )}

      <button
        onClick={() => onSubmit(value)}
        className="mt-4 w-full bg-sage-500 hover:bg-sage-600 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
      >
        Confirm
      </button>
    </motion.div>
  );
}

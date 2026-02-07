'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface TextInputProps {
  placeholder?: string;
  onSubmit: (value: string) => void;
  required?: boolean;
}

export default function TextInput({ placeholder, onSubmit, required }: TextInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (value.trim() || !required) {
      onSubmit(value.trim() || 'Not specified');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder={placeholder || 'Type your answer...'}
        className="flex-1 px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 bg-white"
        autoFocus
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-3 bg-sage-500 hover:bg-sage-600 text-white rounded-xl transition-colors"
      >
        <Send className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

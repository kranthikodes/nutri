'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { STEPS } from '@/lib/step-config';
import type { StepConfig } from '@/types';

interface StepIntroProps {
  step: StepConfig;
  stepNumber: number;
  onStart: () => void;
}

const stepEmojis = ['👤', '🏥', '🍽️', '🌍', '✨'];

export default function StepIntro({ step, stepNumber, onStart }: StepIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="mx-4 my-4"
    >
      <div className="bg-gradient-to-br from-sage-50 to-sage-100/50 rounded-2xl p-6 border border-sage-200/50 max-w-sm">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.1 }}
            className="text-4xl mb-3"
          >
            {stepEmojis[stepNumber] || '📋'}
          </motion.div>
          <div className="text-xs font-bold text-sage-500 uppercase tracking-wider mb-1">
            Section {stepNumber + 1} of {STEPS.length}
          </div>
          <h3 className="font-bold text-stone-900 text-xl mb-1">{step.title}</h3>
          <p className="text-sm text-stone-500 mb-4">{step.description}</p>
          <p className="text-xs text-stone-400 mb-4">
            {step.questions.length} quick questions · mostly tap to answer
          </p>
        </div>

        <button
          onClick={onStart}
          className="flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all w-full justify-center hover:shadow-lg"
        >
          Let&apos;s Go!
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

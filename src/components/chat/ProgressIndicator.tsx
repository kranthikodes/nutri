'use client';

import { STEPS } from '@/lib/step-config';
import { Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStep: number;
  completedSteps: number[];
  currentSubStep: number;
  totalSubSteps: number;
  showIntro: boolean;
}

export default function ProgressIndicator({
  currentStep,
  completedSteps,
  currentSubStep,
  totalSubSteps,
  showIntro,
}: ProgressIndicatorProps) {
  // Overall progress: completed steps + fraction of current step
  const completedFraction = completedSteps.length / STEPS.length;
  const currentFraction = showIntro
    ? 0
    : (currentSubStep / totalSubSteps) / STEPS.length;
  const totalProgress = Math.round((completedFraction + currentFraction) * 100);

  return (
    <div className="bg-white border-b border-stone-100 px-4 py-2.5">
      <div className="max-w-2xl mx-auto">
        {/* Mobile: enhanced progress */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-sage-600 bg-sage-50 px-2 py-0.5 rounded-full">
                {currentStep + 1}/{STEPS.length}
              </span>
              <span className="text-sm font-semibold text-stone-700">
                {STEPS[currentStep]?.title}
              </span>
            </div>
            <span className="text-xs font-bold text-sage-600">
              {totalProgress}%
            </span>
          </div>

          {/* Main progress bar */}
          <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-sage-400 to-sage-500 rounded-full"
              initial={false}
              animate={{ width: `${Math.max(totalProgress, 2)}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          {/* Sub-step dots */}
          {!showIntro && totalSubSteps > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-2">
              {Array.from({ length: totalSubSteps }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    i < currentSubStep
                      ? 'w-4 bg-sage-400'
                      : i === currentSubStep
                        ? 'w-6 bg-sage-500'
                        : 'w-1.5 bg-stone-200'
                  )}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop: full step indicator */}
        <div className="hidden md:flex items-center justify-between">
          {STEPS.map((step, i) => {
            const isCompleted = completedSteps.includes(i);
            const isCurrent = i === currentStep;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (Icons as any)[step.icon] as React.ComponentType<{ className?: string }> | undefined;

            return (
              <div key={step.id} className="flex items-center gap-2 flex-1">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300',
                      isCompleted && 'bg-sage-500 text-white',
                      isCurrent && 'bg-sage-100 text-sage-600 ring-2 ring-sage-500 ring-offset-1',
                      !isCompleted && !isCurrent && 'bg-stone-100 text-stone-400'
                    )}
                  >
                    {isCompleted ? (
                      <Check className="w-4 h-4" />
                    ) : IconComponent ? (
                      <IconComponent className="w-4 h-4" />
                    ) : (
                      <span className="text-xs font-bold">{i + 1}</span>
                    )}
                  </div>
                  <span
                    className={cn(
                      'text-xs font-medium transition-colors',
                      isCurrent && 'text-sage-700',
                      isCompleted && 'text-sage-600',
                      !isCompleted && !isCurrent && 'text-stone-400'
                    )}
                  >
                    {step.title}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={cn(
                      'flex-1 h-0.5 mx-2 rounded-full transition-colors',
                      isCompleted ? 'bg-sage-300' : 'bg-stone-100'
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

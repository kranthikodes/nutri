'use client';

import { STEPS } from '@/lib/step-config';
import { Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressIndicatorProps {
  currentStep: number;
  completedSteps: number[];
}

export default function ProgressIndicator({ currentStep, completedSteps }: ProgressIndicatorProps) {
  return (
    <div className="bg-white border-b border-stone-100 px-4 py-3">
      <div className="max-w-2xl mx-auto">
        {/* Mobile: simple text */}
        <div className="md:hidden text-center">
          <span className="text-sm text-stone-500">
            Step {currentStep + 1} of {STEPS.length}
          </span>
          <span className="text-sm font-semibold text-sage-600 ml-2">
            {STEPS[currentStep]?.title}
          </span>
          {/* Progress bar */}
          <div className="mt-2 h-1.5 bg-stone-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-sage-500 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
            />
          </div>
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

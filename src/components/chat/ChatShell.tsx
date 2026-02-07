'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Leaf, RotateCcw, FileText, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '@/hooks/useChat';
import { TOTAL_XP, LEVEL_NAMES } from '@/lib/step-config';
import ProgressIndicator from './ProgressIndicator';
import MessageList from './MessageList';
import StepIntro from './StepIntro';
import ChipSelector from './ChipSelector';
import CardSelector from './CardSelector';
import MultiSelect from './MultiSelect';
import TypingIndicator from './TypingIndicator';
import PlanViewer from './PlanViewer';

export default function ChatShell() {
  const {
    messages, flow, isStreaming, showIntro, completedSteps,
    currentStepConfig, currentQuestion, submitAnswer, startStep, resetChat,
    xp, planContent,
  } = useChat();

  const [showPlan, setShowPlan] = useState(false);

  const levelIndex = Math.min(Math.floor((xp / TOTAL_XP) * LEVEL_NAMES.length), LEVEL_NAMES.length - 1);
  const levelName = LEVEL_NAMES[levelIndex];

  const renderInput = () => {
    if (isStreaming) return null;

    if (flow.isComplete) {
      return (
        <div className="px-4 py-4 border-t border-stone-100 bg-white space-y-3">
          {planContent && (
            <button
              onClick={() => setShowPlan(true)}
              className="w-full flex items-center justify-center gap-2 bg-sage-500 hover:bg-sage-600 text-white py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-lg"
            >
              <FileText className="w-4 h-4" />
              View & Download Your Plan (PDF)
            </button>
          )}
          <button
            onClick={resetChat}
            className="w-full flex items-center justify-center gap-2 text-sm text-stone-400 hover:text-stone-600 font-medium py-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Start Over
          </button>
        </div>
      );
    }

    if (showIntro && currentStepConfig) return null;
    if (!currentQuestion) return null;

    return (
      <div className="px-4 py-3 border-t border-stone-100 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {currentQuestion.inputType === 'chips' && currentQuestion.options && (
              <ChipSelector
                options={currentQuestion.options}
                onSelect={(val) => submitAnswer(val)}
                allowCustom={currentQuestion.allowCustom}
              />
            )}

            {currentQuestion.inputType === 'cards' && currentQuestion.options && (
              <CardSelector
                options={currentQuestion.options}
                onSelect={(val) => submitAnswer(val)}
              />
            )}

            {currentQuestion.inputType === 'multi-select' && currentQuestion.options && (
              <MultiSelect
                options={currentQuestion.options}
                onSubmit={(vals) => submitAnswer(vals)}
                allowCustom={currentQuestion.allowCustom}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-100 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-stone-400 hover:text-stone-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-stone-800">NutriAI</div>
                <div className="text-xs text-sage-500">AI Nutritionist</div>
              </div>
            </div>
          </div>

          {/* XP Badge */}
          {xp > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1.5 bg-gold-50 border border-gold-200 rounded-full px-3 py-1"
            >
              <Zap className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
              <span className="text-xs font-bold text-gold-700">{xp} XP</span>
              <span className="text-xs text-gold-500">· {levelName}</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      {!flow.isComplete && (
        <ProgressIndicator
          currentStep={flow.currentStep}
          completedSteps={completedSteps}
        />
      )}

      {/* Messages */}
      <div className="flex-1 overflow-hidden flex flex-col max-w-2xl w-full mx-auto">
        <div className="flex-1 overflow-y-auto chat-scroll">
          <MessageList messages={messages} />

          {/* Step intro card */}
          {showIntro && currentStepConfig && !flow.isComplete && (
            <StepIntro
              step={currentStepConfig}
              stepNumber={flow.currentStep}
              onStart={startStep}
            />
          )}

          {/* Typing indicator */}
          {isStreaming && (
            <div className="px-4 pb-4">
              <TypingIndicator />
            </div>
          )}
        </div>

        {/* Input area */}
        {renderInput()}
      </div>

      {/* Plan viewer modal */}
      {showPlan && planContent && (
        <PlanViewer content={planContent} onClose={() => setShowPlan(false)} />
      )}
    </div>
  );
}

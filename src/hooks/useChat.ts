'use client';

import { useState, useCallback } from 'react';
import { STEPS, STEP_XP, STEP_CELEBRATIONS } from '@/lib/step-config';
import type { Message, UserProfile, FlowState } from '@/types';
import { playStepComplete, playCelebration } from '@/lib/sounds';

function createEmptyProfile(): UserProfile {
  return {
    medical: { conditions: [], allergies: [], medications: '' },
    body: { age: '', sex: '', heightCm: '', weightKg: '', activityLevel: '' },
    dietary: { dietType: '', foodsLiked: '', foodsDisliked: '', cookingSkill: '', mealPrepTime: '' },
    geographic: { location: '', city: '', monthlyBudget: '', eatingOutFrequency: '' },
    goals: { primaryGoal: '', timeline: '' },
    lifestyle: { dailyRoutine: '', stressLevel: '', habits: [] },
  };
}

function setNestedValue(obj: Record<string, unknown>, path: string, value: unknown): void {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    current = current[keys[i]] as Record<string, unknown>;
  }
  current[keys[keys.length - 1]] = value;
}

let messageCounter = 0;
function createMessage(role: 'user' | 'assistant', content: string): Message {
  return { id: `msg-${++messageCounter}`, role, content, timestamp: Date.now() };
}

export function useChat() {
  const [flow, setFlow] = useState<FlowState>({ currentStep: 0, currentSubStep: 0, isComplete: false });
  const [profile, setProfile] = useState<UserProfile>(createEmptyProfile);
  const [messages, setMessages] = useState<Message[]>([
    createMessage('assistant', "Hey! 👋 I'm NutriAI. Let's build your perfect nutrition plan in under 2 minutes.\n\nJust tap your answers — easy peasy!"),
  ]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [xp, setXp] = useState(0);
  const [planContent, setPlanContent] = useState<string | null>(null);

  const currentStepConfig = STEPS[flow.currentStep];
  const currentQuestion = currentStepConfig?.questions[flow.currentSubStep];

  const submitAnswer = useCallback(
    (value: string | string[] | number) => {
      if (!currentQuestion) return;

      const displayValue = Array.isArray(value) ? value.join(', ') : String(value);

      // Store in profile
      const profileCopy = { ...profile };
      setNestedValue(profileCopy as unknown as Record<string, unknown>, currentQuestion.fieldPath, value);
      setProfile(profileCopy);

      // Add user message
      const newMessages: Message[] = [createMessage('user', displayValue)];

      // Calculate next position
      const step = STEPS[flow.currentStep];
      const nextSubStep = flow.currentSubStep + 1;

      if (nextSubStep < step.questions.length) {
        // More questions in this step — just show next question
        const nextQ = step.questions[nextSubStep];
        newMessages.push(createMessage('assistant', nextQ.question));
        setFlow((prev) => ({ ...prev, currentSubStep: nextSubStep }));
        setShowIntro(false);
      } else {
        // Step complete — celebrate!
        const stepIdx = flow.currentStep;
        const earnedXP = STEP_XP[stepIdx];
        setXp((prev) => prev + earnedXP);
        setCompletedSteps((prev) => [...prev, stepIdx]);

        const celebration = STEP_CELEBRATIONS[stepIdx];
        newMessages.push(createMessage('assistant', `${celebration}\n\n+${earnedXP} XP earned!`));

        const nextStep = flow.currentStep + 1;
        if (nextStep < STEPS.length) {
          setFlow({ currentStep: nextStep, currentSubStep: 0, isComplete: false });
          setShowIntro(true);
          playStepComplete();
        } else {
          // All done — generate plan
          setFlow((prev) => ({ ...prev, isComplete: true }));
          playCelebration();
          setTimeout(() => generatePlan(profileCopy), 500);
        }
      }

      setMessages((prev) => [...prev, ...newMessages]);
    },
    [flow, currentQuestion, profile]
  );

  const generatePlan = async (finalProfile: UserProfile) => {
    setIsStreaming(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userProfile: finalProfile }),
      });

      if (!response.ok) throw new Error('Failed to generate plan');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader');

      const decoder = new TextDecoder();
      let content = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        content += decoder.decode(value, { stream: true });
      }

      setPlanContent(content);
      setMessages((prev) => [
        ...prev,
        createMessage('assistant', '✅ Your plan is ready!'),
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        createMessage('assistant', 'Sorry, something went wrong generating your plan. Please check your API key in .env.local and try again.'),
      ]);
    } finally {
      setIsStreaming(false);
    }
  };

  const startStep = useCallback(() => {
    const step = STEPS[flow.currentStep];
    if (step?.questions[0]) {
      setMessages((prev) => [...prev, createMessage('assistant', step.questions[0].question)]);
      setShowIntro(false);
    }
  }, [flow.currentStep]);

  const resetChat = useCallback(() => {
    messageCounter = 0;
    setFlow({ currentStep: 0, currentSubStep: 0, isComplete: false });
    setProfile(createEmptyProfile());
    setMessages([
      createMessage('assistant', "Hey! 👋 I'm NutriAI. Let's build your perfect nutrition plan in under 2 minutes.\n\nJust tap your answers — easy peasy!"),
    ]);
    setIsStreaming(false);
    setShowIntro(true);
    setCompletedSteps([]);
    setXp(0);
    setPlanContent(null);
  }, []);

  return {
    messages, flow, isStreaming, showIntro, completedSteps,
    currentStepConfig, currentQuestion, submitAnswer, startStep, resetChat,
    xp, planContent,
  };
}

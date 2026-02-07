export interface UserProfile {
  medical: {
    conditions: string[];
    allergies: string[];
    medications: string;
  };
  body: {
    age: string;
    sex: string;
    heightCm: string;
    weightKg: string;
    activityLevel: string;
  };
  dietary: {
    dietType: string;
    foodsLiked: string;
    foodsDisliked: string;
    cookingSkill: string;
    mealPrepTime: string;
  };
  geographic: {
    location: string;
    city: string;
    monthlyBudget: string;
    eatingOutFrequency: string;
  };
  goals: {
    primaryGoal: string;
    timeline: string;
  };
  lifestyle: {
    dailyRoutine: string;
    stressLevel: string;
    habits: string[];
  };
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface QuestionOption {
  id: string;
  label: string;
  icon?: string;
  description?: string;
}

export type InputMode = 'chips' | 'cards' | 'slider' | 'text' | 'multi-select' | 'none';

export interface SliderConfig {
  min: number;
  max: number;
  step: number;
  unit: string;
  labels?: Record<number, string>;
}

export interface StepQuestion {
  id: string;
  question: string;
  whyWeAsk: string;
  inputType: InputMode;
  options?: QuestionOption[];
  sliderConfig?: SliderConfig;
  placeholder?: string;
  required: boolean;
  fieldPath: string;
  allowCustom?: boolean;
}

export interface StepConfig {
  id: string;
  title: string;
  icon: string;
  description: string;
  questions: StepQuestion[];
}

export interface FlowState {
  currentStep: number;
  currentSubStep: number;
  isComplete: boolean;
}

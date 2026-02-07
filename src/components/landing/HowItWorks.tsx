'use client';

import { MessageSquare, Brain, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: MessageSquare,
    title: 'Tell Us About You',
    description:
      'Answer guided questions about your health, preferences, lifestyle, and goals. Takes just 5-7 minutes.',
    number: '01',
  },
  {
    icon: Brain,
    title: 'AI Analyzes Your Profile',
    description:
      'Our AI processes 50+ data points including medical history, regional food access, budget, and cultural preferences.',
    number: '02',
  },
  {
    icon: FileText,
    title: 'Get Your Plan',
    description:
      'Receive a detailed nutrition plan with meal ideas, macros, grocery lists, and lifestyle recommendations.',
    number: '03',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Three simple steps to a nutrition plan that&apos;s actually built for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-sage-100" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 bg-sage-50 border-2 border-sage-200 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                <step.icon className="w-7 h-7 text-sage-500" />
              </div>
              <div className="text-xs font-bold text-sage-400 uppercase tracking-wider mb-2">
                Step {step.number}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                {step.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Timer, MapPin, ClipboardCheck } from 'lucide-react';

const promises = [
  {
    icon: MapPin,
    title: 'Your City, Your Ingredients',
    description:
      'Every ingredient comes from your local sabzi mandi and kirana store. No quinoa, no avocado, no imported fancy stuff.',
  },
  {
    icon: Timer,
    title: 'Under 30 Min Recipes',
    description:
      'If you can make dal-chawal, you can make everything on this plan. Most meals take 15-20 minutes.',
  },
  {
    icon: ShoppingCart,
    title: 'Ready Grocery List',
    description:
      'Take the list straight to your market. Exact quantities, organized by category. No guessing what to buy.',
  },
  {
    icon: ClipboardCheck,
    title: 'Weekly Tracking',
    description:
      'Simple check-ins: weight, energy, did you follow the plan? See your progress week by week. Stay motivated.',
  },
];

export default function WhyItWorks() {
  return (
    <section className="py-16 bg-sage-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3"
          >
            Why People Actually Follow Through
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 max-w-lg mx-auto"
          >
            Most diet plans fail because they&apos;re not built for your real life. This one is.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white rounded-2xl p-5 border border-stone-100 text-center"
            >
              <div className="w-12 h-12 bg-sage-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-6 h-6 text-sage-500" />
              </div>
              <h3 className="font-semibold text-stone-800 text-sm mb-2">{p.title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

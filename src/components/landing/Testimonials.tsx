'use client';

import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Real Results, Real People
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            See how NutriAI has transformed nutrition for people with diverse needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="text-stone-700 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-stone-800 text-sm">{t.name}</div>
                  <div className="text-xs text-sage-600">{t.context}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

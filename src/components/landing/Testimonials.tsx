'use client';

import { Star, MapPin, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4"
          >
            Hear It From Them
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-500 max-w-2xl mx-auto"
          >
            People from across India trust NutriAI for personalized nutrition that fits their life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-sage-100 absolute top-5 right-5" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-stone-700 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-50">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-sage-100"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-stone-800 text-sm">{t.name}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-sage-600 font-medium">{t.context}</span>
                    <span className="text-stone-300">·</span>
                    <span className="inline-flex items-center gap-0.5 text-xs text-stone-400">
                      <MapPin className="w-3 h-3" />
                      {t.city}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

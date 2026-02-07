'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, TrendingDown, ArrowRight } from 'lucide-react';
import { TRANSFORMATIONS } from '@/lib/constants';

export default function TransformationResults() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-sage-50 rounded-full text-sage-700 text-sm font-medium mb-4"
          >
            <TrendingDown className="w-4 h-4" />
            Before &amp; After
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4"
          >
            Their Story Could Be Yours
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-stone-500 max-w-2xl mx-auto"
          >
            Real people. Real struggles. Real transformations.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {TRANSFORMATIONS.map((t, i) => {
            const diff = t.before - t.after;
            const diffLabel = Number.isInteger(diff) ? diff : diff.toFixed(1);
            const pct = Math.round((diff / t.before) * 100);

            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative bg-stone-50 rounded-2xl border border-stone-100 hover:border-sage-200 hover:shadow-lg transition-all group overflow-hidden"
              >
                {/* Person header with photo */}
                <div className="flex items-center gap-3 p-5 pb-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-stone-800 text-sm">{t.name}</div>
                    <div className="flex items-center gap-2 text-xs text-stone-400">
                      <span className="inline-flex items-center gap-0.5">
                        <MapPin className="w-3 h-3" />
                        {t.city}
                      </span>
                      <span className="text-stone-200">|</span>
                      <span>{t.condition}</span>
                    </div>
                  </div>
                </div>

                {/* The emotional story */}
                <div className="px-5 pb-4">
                  <p className="text-sm text-stone-500 leading-relaxed italic">
                    &ldquo;{t.story}&rdquo;
                  </p>
                </div>

                {/* The transformation - visual divider */}
                <div className="mx-5 border-t border-dashed border-stone-200 relative">
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-stone-50 px-2 text-xs font-semibold text-sage-600 uppercase tracking-wider">
                    Then NutriAI happened
                  </span>
                </div>

                {/* Big result number + bar */}
                <div className="p-5 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-sage-600 leading-none">
                        -{diffLabel}
                      </span>
                      {t.unit && <span className="text-lg font-bold text-sage-500">{t.unit}</span>}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-stone-400">
                      <Clock className="w-3 h-3" />
                      {t.duration}
                    </div>
                  </div>

                  {/* Before → After bar */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-stone-400 min-w-[2.5rem] text-right">
                        {t.before}{t.unit}
                      </span>
                      <div className="flex-1 relative h-2.5 bg-stone-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: '100%' }}
                          whileInView={{ width: `${100 - pct}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 + 0.3, duration: 0.8, ease: 'easeOut' }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-sage-400 to-sage-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs font-bold text-sage-700 min-w-[2.5rem]">
                        {t.after}{t.unit}
                      </span>
                    </div>
                  </div>

                  {/* The "now" line - positive outcome */}
                  <div className="bg-sage-50 rounded-lg px-3 py-2">
                    <p className="text-xs text-sage-700 font-medium leading-relaxed">
                      &ldquo;{t.now}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-stone-400 mb-4">
            Results vary by individual. All transformations achieved with personalized NutriAI plans + consistent effort.
          </p>
          <p className="text-stone-600 font-medium mb-4">
            Know someone who needs this?
          </p>
          <a
            href={`https://wa.me/?text=${encodeURIComponent('Yeh dekh, free mein personalized diet plan milta hai — sirf local ingredients use karta hai, no fancy stuff. Mujhe results dikh rahe hain 💪\nhttps://nutriai.app')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#20bd5a] transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Share on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

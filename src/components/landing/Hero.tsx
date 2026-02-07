'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-sage-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gold-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sage-50 border border-sage-200 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span className="text-sm text-sage-700 font-medium">
                #1 AI-Powered Nutritionist
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
              Your Personal{' '}
              <span className="text-sage-500">AI Nutritionist</span>
            </h1>

            <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
              Get a nutrition plan that actually works for{' '}
              <em>your</em> body, conditions, culture, budget, and goals. Not
              generic advice &mdash; a plan built on 50+ data points about you.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/consult"
                className="inline-flex items-center justify-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-sage-500/25 hover:-translate-y-0.5"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-50 transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-sage-500" />
                <span>50,000+ users</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-sage-500" />
                <span>Data encrypted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-stone-200/50 p-8 border border-stone-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sage-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🤖</span>
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800">NutriAI</div>
                    <div className="text-xs text-sage-500">AI Nutritionist</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-sage-50 rounded-2xl rounded-tl-sm p-4 text-sm text-stone-700 max-w-xs">
                    Based on your PCOS, vegetarian diet, and goal of losing 8kg, here&apos;s your personalized plan...
                  </div>
                  <div className="bg-stone-100 rounded-2xl rounded-tr-sm p-4 text-sm text-stone-700 ml-auto max-w-[200px]">
                    Can you include South Indian breakfast options?
                  </div>
                  <div className="bg-sage-50 rounded-2xl rounded-tl-sm p-4 text-sm text-stone-700 max-w-xs">
                    Absolutely! I&apos;ve updated your plan with idli, dosa, and upma variations...
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-2 border border-stone-100">
                <div className="text-xs text-stone-500">Personalization</div>
                <div className="text-lg font-bold text-sage-600">50+ factors</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2 border border-stone-100">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <div className="text-xs text-stone-500 mt-0.5">Rated 4.9/5</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

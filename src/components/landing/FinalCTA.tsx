import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-800/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-4 h-4 text-gold-300" />
          <span className="text-sm text-white/90 font-medium">Free consultation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Nutrition?
        </h2>

        <p className="text-lg text-sage-100 mb-10 max-w-xl mx-auto">
          Join 50,000+ people who&apos;ve discovered what personalized nutrition
          really means. It takes just 5 minutes.
        </p>

        <Link
          href="/consult"
          className="inline-flex items-center gap-2 bg-white text-sage-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-sage-50 transition-all hover:shadow-xl hover:-translate-y-0.5"
        >
          Start Your Free Plan
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="text-sm text-sage-200 mt-6">
          No sign-up required &bull; No credit card &bull; 100% free
        </p>
      </div>
    </section>
  );
}

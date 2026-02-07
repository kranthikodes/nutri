'use client';

import { CREDENTIALS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function CredentialsBar() {
  return (
    <section id="credentials" className="py-16 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm text-stone-400 uppercase tracking-wider mb-8">
            Built on research from leading institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {CREDENTIALS.map((name) => (
              <div
                key={name}
                className="text-stone-300 font-semibold text-sm md:text-base tracking-wide hover:text-stone-400 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

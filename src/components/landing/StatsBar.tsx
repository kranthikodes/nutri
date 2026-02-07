'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/constants';

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-sage-600">
      {display.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="py-16 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-stone-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

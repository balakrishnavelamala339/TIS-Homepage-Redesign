'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { SPORTS } from '@/data/content';

export default function Sports() {
  return (
    <section id="sports" className="bg-brand/5 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">Sports?</h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            It’s not just a facility. At Tulas it’s the foundation! 16+ sports curated to bring joy and discipline to
            your life.
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SPORTS.map((sport, i) => (
            <motion.li
              key={sport}
              data-cursor
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-line/10 bg-card px-4 py-5 text-center text-sm font-semibold hover:border-accent"
            >
              {sport}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import { APPLY_URL } from '@/data/content';

const HEADLINE = 'Welcome to Tulas International School'.split(' ');

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:pt-24">
      <motion.div
        aria-hidden="true"
        style={{ y: blobY }}
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-block rounded-full border border-accent/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
        >
          CBSE · Co-ed · Class 4 to 12 · Dehradun
        </motion.p>

        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] sm:text-7xl">
          {HEADLINE.map((word, i) => (
            <span key={word + i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 max-w-2xl space-y-4 text-lg text-muted"
        >
          <p>TIS is one of India’s top boarding and day schools in Dehradun, India.</p>
          <p>
            Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be
            global leaders.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <Button href={APPLY_URL} target="_blank" rel="noreferrer">Apply Now</Button>
            <Button href="#enquire" variant="ghost">Enquire Now</Button>
          </div>
        </motion.div>
      </div>

      <div aria-hidden="true" className="relative mt-16 overflow-hidden border-y border-line/10 py-5">
        <div className="flex w-max animate-marquee gap-12 font-display text-4xl font-semibold text-fg/80 sm:text-5xl">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} className="whitespace-nowrap">
              LET’S DO IT <em className="text-accent">with Tulas</em> ✦
              <span className="mx-6 inline-block h-3 w-3 rotate-45 bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

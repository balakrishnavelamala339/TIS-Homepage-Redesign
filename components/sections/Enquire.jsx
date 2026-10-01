'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { CLASSES, HELPLINE } from '@/data/content';

const field =
  'min-h-[48px] w-full rounded-xl border border-line/20 bg-bg px-4 text-base outline-none focus:border-accent';

export default function Enquire() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="enquire" className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-10 rounded-[2rem] bg-brand p-8 text-bg sm:p-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">Enquire Now!</h2>
          <p className="mt-4 text-lg opacity-80">
            Admissions are open for Class IV to XII. Our team will get back to you shortly.
          </p>
          <a href={`tel:${HELPLINE}`} className="mt-6 inline-block text-xl font-semibold text-accent">
            Admission Helpline {HELPLINE}
          </a>
        </Reveal>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.p
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="self-center font-display text-3xl text-accent"
              role="status"
            >
              Thank you! We will contact you soon.
            </motion.p>
          ) : (
            <motion.form key="form" exit={{ opacity: 0 }} onSubmit={onSubmit} className="grid gap-4 text-fg">
              <label className="sr-only" htmlFor="name">Parent name</label>
              <input id="name" required placeholder="Parent name" className={field} />
              <label className="sr-only" htmlFor="phone">Phone number</label>
              <input id="phone" required type="tel" inputMode="tel" placeholder="Phone number" className={field} />
              <label className="sr-only" htmlFor="class">Class</label>
              <select id="class" required defaultValue="" className={field}>
                <option value="" disabled>Select Class</option>
                {CLASSES.map((c) => (
                  <option key={c} value={c}>Class {c}</option>
                ))}
              </select>
              <button
                type="submit"
                className="min-h-[48px] rounded-full bg-accent px-7 font-semibold text-[#0b1d3a] transition-transform hover:-translate-y-0.5"
              >
                Enquire Now
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

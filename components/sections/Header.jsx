'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Button from '@/components/ui/Button';
import { APPLY_URL, HELPLINE, NAV } from '@/data/content';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/10 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label="Tulas International School home">
          <Image
            src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
            alt="TIS logo"
            width={44}
            height={44}
            className="h-11 w-auto"
            priority
          />
          <span className="hidden font-display text-lg font-semibold sm:block">Tulas International School</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted transition-colors hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href={APPLY_URL} target="_blank" rel="noreferrer">Apply Now</Button>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-line/30 lg:hidden"
          >
            <span className={`h-0.5 w-5 bg-fg transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-fg transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-fg transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-line/10 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium hover:bg-card">
                  {item.label}
                </a>
              ))}
              <a href={`tel:${HELPLINE}`} className="px-3 py-3 text-sm text-muted">Admissions helpline {HELPLINE}</a>
              <Button href={APPLY_URL} target="_blank" rel="noreferrer">Apply Now</Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

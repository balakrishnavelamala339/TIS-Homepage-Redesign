'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark mode"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="relative h-11 w-[76px] shrink-0 rounded-full border border-line/30 bg-card/60 p-1"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-accent text-base ${dark ? 'ml-auto' : ''}`}
      >
        {dark ? '🌙' : '☀️'}
      </motion.span>
    </button>
  );
}

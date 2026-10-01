'use client';

import { motion } from 'framer-motion';

const styles = {
  primary: 'bg-accent text-[#0b1d3a] hover:brightness-105',
  ghost: 'border border-line/30 text-fg hover:border-accent hover:text-accent',
};

export default function Button({ href, variant = 'primary', children, ...rest }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-full px-7 text-sm font-semibold tracking-wide transition-colors ${styles[variant]}`}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

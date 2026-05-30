"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = "", hover = true }: CardProps) => {
  return (
    <motion.div
      className={`bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-2xl p-6 ${className}`}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

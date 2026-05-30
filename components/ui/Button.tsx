"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2";

  const variants = {
    primary:
      "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-lg",
    secondary:
      "bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] hover:border-[var(--color-primary)]/50",
    outline:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
  };

  const Component = href ? "a" : motion.button;
  const props = href ? { href } : { onClick, whileTap: { scale: 0.95 } };

  return (
    <Component
      {...props}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </Component>
  );
};

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
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

  // If it has an href, use <a>
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  // Otherwise, use motion.button
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
    >
      {children}
    </motion.button>
  );
};
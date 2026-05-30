"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Mail, FileText, MessageCircle, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 via-[var(--color-primary-light)]/5 to-[var(--color-primary)]/10" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
            <span className="text-[var(--color-primary)] text-sm font-medium">
              Open to opportunities
            </span>
          </div>

          {/* Título principal */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
              impactful
            </span>{" "}
            together
          </h2>

          {/* Descripción */}
          <p className="text-[var(--color-gray-light)] text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m currently open to new opportunities, collaborations, and
            interesting projects. Whether you have a question or just want to
            say hi, I&apos;ll try my best to get back to you!
          </p>

          {/* Botones principales */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="primary" href="/contact">
              Get in touch <Mail size={18} />
            </Button>
            <Button variant="outline">
              View Resume <FileText size={18} />
            </Button>
          </div>

          {/* Línea divisoria */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--color-dark-border)]" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-[var(--color-dark)] text-[var(--color-gray-dark)] text-sm">
                or reach out directly
              </span>
            </div>
          </div>

          {/* Contacto directo */}
          <div className="flex flex-wrap gap-6 justify-center">
            <motion.a
              href="#"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-all duration-300 group"
            >
              <MessageCircle
                size={20}
                className="text-[var(--color-primary)]"
              />
              <span className="font-medium">WhatsApp</span>
              <ArrowRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-all duration-300 group"
            >
              <Mail size={20} className="text-[var(--color-primary)]" />
              <span className="font-medium">aguri@devlab.com</span>
              <ArrowRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-[var(--color-primary)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.5 6v10.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5V6c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5v10.5c0 .5-.5 1-1 1s-1-.5-1-1V6H8v10.5c0 1.5 1.5 3 3.5 3s3.5-1.5 3.5-3V6c0-2.5-2-4.5-4.5-4.5S6 3.5 6 6v10.5c0 3.5 3 6 6 6s6-2.5 6-6V6h-1.5z" />
              </svg>
              <span className="font-medium">aguri-devlab</span>
              <ArrowRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

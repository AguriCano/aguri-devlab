"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge de disponibilidad */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
              <span className="text-[var(--color-primary)] text-sm font-medium">
                Available for opportunities
              </span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Building high-performance
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
                {" "}
                web applications
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-[var(--color-gray-light)] text-lg mb-8 max-w-lg">
              Full Stack Developer specialized in modern technologies like
              React, Next.js and scalable backend systems.
            </p>

            {/* Botones */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">
                View Projects <ArrowRight size={18} />
              </Button>
              <Button variant="outline">
                Download Resume <Download size={18} />
              </Button>
            </div>
          </motion.div>

          {/* Columna derecha - Código animado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <pre className="text-sm text-[var(--color-gray-light)] overflow-x-auto">
                <code>{`const developer = {
  name: "Aguri Cano",
  role: "Full Stack Developer",
  stack: ["React", "Next.js", "Node.js"],
  passion: "Building scalable solutions"
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

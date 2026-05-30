"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Columna izquierda - Texto (se muestra primero en móvil) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-none text-center lg:text-left"
          >
            {/* Badge de disponibilidad */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
              <span className="text-[var(--color-primary)] text-xs sm:text-sm font-medium">
                Available for opportunities
              </span>
            </div>

            {/* Título principal - tamaños responsivos */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Building high-performance
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent block sm:inline">
                {" "}
                web applications
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-[var(--color-gray-light)] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Full Stack Developer specialized in modern technologies like
              React, Next.js and scalable backend systems.
            </p>

            {/* Botones - responsivos */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                className="w-full sm:w-auto justify-center"
              >
                View Projects <ArrowRight size={16} className="sm:size-18" />
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto justify-center"
              >
                Download Resume <Download size={16} className="sm:size-18" />
              </Button>
            </div>
          </motion.div>

          {/* Columna derecha - Código animado (se esconde en móvil muy pequeño, se muestra en tablet y desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-none hidden sm:block relative mt-8 sm:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-xl sm:rounded-2xl p-3 sm:p-4">
              {/* Ventana de código - botones */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
              </div>
              {/* Código - responsive font size */}
              <pre className="text-[10px] sm:text-xs md:text-sm text-[var(--color-gray-light)] overflow-x-auto">
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

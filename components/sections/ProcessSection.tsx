"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, TrendingUp, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Understand the problem and define clear goals",
    details: "Research, requirements analysis, success metrics definition",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Plan scalable and efficient solutions",
    details: "Architecture design, technology selection, prototyping",
  },
  {
    icon: Code,
    title: "Develop",
    description: "Build clean and maintainable code",
    details: "Agile development, code reviews, testing",
  },
  {
    icon: TrendingUp,
    title: "Optimize & Deliver",
    description: "Improve performance and ensure quality delivery",
    details: "Performance tuning, deployment, monitoring",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-[var(--color-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How I Work</h2>
          <p className="text-[var(--color-gray-light)] text-lg max-w-2xl mx-auto">
            A professional, transparent process from concept to delivery
          </p>
        </motion.div>

        {/* Timeline horizontal */}
        <div className="relative">
          {/* Línea de conexión (solo visible en desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/50 to-[var(--color-primary)]/20" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Número de paso */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="text-white" size={28} />
                  </div>
                  <div className="text-sm text-[var(--color-primary)] font-semibold mb-2">
                    Step 0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-[var(--color-gray-light)] font-medium mb-2">
                    {step.description}
                  </p>
                  <p className="text-[var(--color-gray-dark)] text-sm">
                    {step.details}
                  </p>
                </div>

                {/* Check de completado */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:block">
                  <CheckCircle
                    size={20}
                    className="text-[var(--color-primary)] opacity-50"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beneficios adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-full text-sm">
              📋 Weekly updates
            </span>
            <span className="px-4 py-2 bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-full text-sm">
              🧪 Quality assurance
            </span>
            <span className="px-4 py-2 bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-full text-sm">
              📄 Documentation
            </span>
            <span className="px-4 py-2 bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-full text-sm">
              🚀 Post-launch support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

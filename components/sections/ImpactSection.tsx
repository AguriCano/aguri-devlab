"use client";

import { motion } from "framer-motion";
import { Zap, Rocket, Brain, TrendingUp } from "lucide-react";
import { Card } from "../ui/Card";

const impacts = [
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Improved application performance by 40% through clean architecture and optimization techniques",
    color: "from-yellow-500 to-orange-500",
    stat: "40% faster",
  },
  {
    icon: Rocket,
    title: "Scalable Backend",
    description:
      "Built scalable backend systems and APIs handling thousands of concurrent requests",
    color: "from-blue-500 to-cyan-500",
    stat: "10k+ requests/sec",
  },
  {
    icon: Brain,
    title: "Process Automation",
    description:
      "Created automation systems saving 20+ hours weekly on repetitive tasks",
    color: "from-purple-500 to-pink-500",
    stat: "20+ hrs/week",
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    description:
      "Solutions that directly contribute to revenue growth and operational efficiency",
    color: "from-green-500 to-emerald-500",
    stat: "ROI +300%",
  },
];

export const ImpactSection = () => {
  return (
    <section className="py-24 bg-[var(--color-dark-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Bring</h2>
          <p className="text-[var(--color-gray-light)] text-lg max-w-2xl mx-auto">
            Real impact through technical excellence and business understanding
          </p>
        </motion.div>

        {/* Grid de impactos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                {/* Icono con gradiente */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${impact.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <impact.icon className="text-white" size={32} />
                </div>

                {/* Estadística destacada */}
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                  {impact.stat}
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold mb-2">{impact.title}</h3>

                {/* Descripción */}
                <p className="text-[var(--color-gray-light)] text-sm">
                  {impact.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

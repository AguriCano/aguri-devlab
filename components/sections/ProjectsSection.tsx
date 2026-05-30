"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ProjectsSection = () => {
  const featuredProjects = projects.slice(0, 3);

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-[var(--color-gray-light)] text-lg max-w-2xl mx-auto">
            A collection of applications focused on performance, scalability,
            and real-world problem solving.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                {/* Imagen placeholder */}
                <div className="h-48 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                {/* Descripción */}
                <p className="text-[var(--color-gray-light)] mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[var(--color-dark)] border border-[var(--color-dark-border)] rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botón */}
                <Link href={`/projects/${project.slug}`}>
                  <Button variant="secondary" className="w-full">
                    View Case Study <ArrowRight size={16} />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Botón para ver todos */}
        <div className="text-center">
          <Link href="/projects">
            <Button variant="outline">
              View All Projects <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

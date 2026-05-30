import { projects } from "@/lib/projects";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Projects | Aguri Cano",
  description:
    "Explore my portfolio of web applications and software projects.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la página */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-[var(--color-gray-light)] text-base md:text-lg max-w-2xl mx-auto">
            A collection of applications focused on performance, scalability,
            and real-world problem solving.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={project.slug} hover>
              {/* Imagen placeholder */}
              <div className="h-48 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>

              {/* Descripción */}
              <p className="text-[var(--color-gray-light)] mb-4 text-sm line-clamp-2">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

// Generar rutas estáticas para cada proyecto
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón volver */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--color-gray-light)] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to projects
        </Link>

        {/* Imagen destacada */}
        <div className="h-48 sm:h-64 md:h-80 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 rounded-2xl mb-6 flex items-center justify-center">
          <span className="text-7xl sm:text-8xl md:text-9xl">🚀</span>
        </div>

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {project.title}
        </h1>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-lg text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Contenido del caso de estudio */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Problem</h2>
            <p className="text-[var(--color-gray-light)] leading-relaxed">
              {project.problem ||
                "Understanding user needs and business requirements was the first step. After analyzing the existing workflow, I identified key areas that needed improvement."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Solution</h2>
            <p className="text-[var(--color-gray-light)] leading-relaxed">
              {project.solution ||
                "I designed and built a scalable solution using modern technologies. The architecture focuses on performance, maintainability, and user experience."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Result</h2>
            <p className="text-[var(--color-gray-light)] leading-relaxed">
              {project.result ||
                "The solution delivered measurable impact, improving efficiency and user satisfaction. The system is now handling production traffic successfully."}
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Button variant="primary" href={project.demoUrl || "#"}>
              Live Demo <ExternalLink size={18} />
            </Button>
            <Button variant="secondary" href={project.githubUrl || "#"}>
              GitHub <Github size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

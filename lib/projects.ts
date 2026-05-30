export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  problem?: string;
  solution?: string;
  result?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "automotive-platform",
    title: "Automotive Service Platform",
    description: "Plataforma web que optimiza operaciones de taller mecánico, reduciendo tiempos manuales en un 40%.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/projects/automotive.jpg",
    problem: "Procesos manuales causaban pérdida del 40% del tiempo",
    solution: "Sistema automatizado de gestión de citas e inventario",
    result: "40% menos trabajo manual, 99% de satisfacción del cliente",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Dashboard en tiempo real para visualización de métricas y toma de decisiones basada en datos.",
    techStack: ["Next.js", "Chart.js", "PostgreSQL", "Redis"],
    image: "/projects/dashboard.jpg",
    problem: "Sin visibilidad en tiempo real de métricas del negocio",
    solution: "Dashboard con análisis predictivo en tiempo real",
    result: "Toma de decisiones 30% más rápida",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    slug: "automation-system",
    title: "Process Automation System",
    description: "Sistema de automatización que ahorra más de 20 horas semanales en tareas repetitivas.",
    techStack: ["Python", "FastAPI", "Celery", "RabbitMQ"],
    image: "/projects/automation.jpg",
    problem: "Tareas repetitivas consumían recursos del equipo",
    solution: "Workflows inteligentes automatizados",
    result: "20+ horas ahorradas semanalmente, 99.9% precisión",
    demoUrl: "#",
    githubUrl: "#"
  }
];
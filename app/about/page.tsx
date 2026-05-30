import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Download, Code, Rocket, Coffee, Award, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About | Aguri Cano",
  description:
    "Learn about my journey, skills, and passion for software development.",
};

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
  },
  { category: "Tools & Cloud", items: ["Docker", "Git", "AWS", "Vercel"] },
];

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable, readable, and efficient code is my priority.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "I stay updated with the latest technologies and best practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great software is built by teams that communicate effectively.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "I never compromise on quality, testing, and performance.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-[var(--color-gray-light)] text-base md:text-lg max-w-2xl mx-auto">
            Get to know the developer behind the code
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Columna izquierda - Historia */}
          <div>
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <div className="space-y-4 text-[var(--color-gray-light)] leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with a strong focus on
                building scalable, high-performance web applications that solve
                real-world problems.
              </p>
              <p>
                My journey in software development started with curiosity about
                how things work on the web. Since then, I've worked on various
                projects, from small business websites to complex enterprise
                applications.
              </p>
              <p>
                I believe that great software is not just about writing code —
                it's about understanding user needs, creating intuitive
                experiences, and delivering measurable value.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source,
                learning new technologies, and sharing knowledge with the
                developer community.
              </p>
            </div>

            {/* Botón de CV */}
            <div className="mt-8">
              <Button variant="outline">
                Download CV <Download size={18} />
              </Button>
            </div>
          </div>

          {/* Columna derecha - Stats y contacto rápido */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card hover className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  3+
                </div>
                <p className="text-[var(--color-gray-light)] text-sm">
                  Years Experience
                </p>
              </Card>
              <Card hover className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  15+
                </div>
                <p className="text-[var(--color-gray-light)] text-sm">
                  Projects Completed
                </p>
              </Card>
              <Card hover className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  10+
                </div>
                <p className="text-[var(--color-gray-light)] text-sm">
                  Happy Clients
                </p>
              </Card>
              <Card hover className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  ∞
                </div>
                <p className="text-[var(--color-gray-light)] text-sm">
                  Coffee Cups
                </p>
              </Card>
            </div>

            {/* Cita o filosofía */}
            <Card>
              <div className="flex items-start gap-3">
                <Coffee
                  size={24}
                  className="text-[var(--color-primary)] flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="font-bold mb-2">My Philosophy</h3>
                  <p className="text-[var(--color-gray-light)] text-sm">
                    "Code is a tool to solve problems. The best solutions are
                    simple, maintainable, and built with the end-user in mind."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <h3 className="text-lg font-bold mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-[var(--color-dark)] border border-[var(--color-dark-border)] rounded-lg text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">What I Value</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} hover>
                <value.icon
                  size={32}
                  className="text-[var(--color-primary)] mb-3"
                />
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-[var(--color-gray-light)] text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

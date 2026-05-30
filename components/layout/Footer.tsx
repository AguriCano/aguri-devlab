import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-dark-surface)] border-t border-[var(--color-dark-border)] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Aguri Cano</h3>
            <p className="text-[var(--color-gray-light)]">
              Full Stack Developer
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-[var(--color-gray-light)] hover:text-[var(--color-primary)] transition-colors"
              target="_blank"
            >
              <Github size={24} />
            </Link>
            <Link
              href="#"
              className="text-[var(--color-gray-light)] hover:text-[var(--color-primary)] transition-colors"
              target="_blank"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="#"
              className="text-[var(--color-gray-light)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Mail size={24} />
            </Link>
          </div>

          <p className="text-[var(--color-gray-dark)] text-sm">
            © 2026 Aguri Cano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <ImpactSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
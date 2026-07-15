import type { Metadata } from "next";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { EvidenceSection } from "@/components/evidence/evidence-section";
import { AgencySection } from "@/components/agency/agency-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EvidenceSection />
      <AgencySection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

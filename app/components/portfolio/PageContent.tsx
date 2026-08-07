"use client";

import clsx from "clsx";
import { useView } from "@/app/components/portfolio/ViewContext";
import HeroSection from "@/app/components/portfolio/HeroSection";
import AboutSection from "@/app/components/portfolio/AboutSection";
import SkillsSection from "@/app/components/portfolio/SkillsSection";
import ProjectsSection from "@/app/components/portfolio/ProjectsSection";
import ContactSection from "@/app/components/portfolio/ContactSection";

export default function PageContent() {
  const { view } = useView();
  return (
    <main
      className={clsx(
        "pt-14 transition-colors duration-200 max-w-screen-xl mx-auto",
        view === "neovim" ? "bg-[var(--tn-bg)]" : "bg-[#FBFBFA]"
      )}
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

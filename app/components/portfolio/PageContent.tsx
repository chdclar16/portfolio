"use client";

import clsx from "clsx";
import { useView } from "@/app/components/portfolio/ViewContext";
import HeroSection from "@/app/components/portfolio/HeroSection";
import AboutSection from "@/app/components/portfolio/AboutSection";
import SkillsSection from "@/app/components/portfolio/SkillsSection";
import ProjectsSection from "@/app/components/portfolio/ProjectsSection";

export default function PageContent() {
  const { view } = useView();
  return (
    <main
      className={clsx(
        "pt-14 transition-colors duration-200",
        view === "neovim" ? "bg-[var(--tn-bg)]" : "bg-white"
      )}
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}

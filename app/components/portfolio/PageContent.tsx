"use client";

import clsx from "clsx";
import { useView } from "@/app/components/portfolio/ViewContext";
import HeroSection from "@/app/components/portfolio/HeroSection";

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
    </main>
  );
}

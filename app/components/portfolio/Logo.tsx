import clsx from "clsx";
import type { View } from "@/types/portfolio";
import portfolioData from "@/data/portfolioData";

interface LogoProps {
  view: View;
}

export function Logo({ view }: LogoProps) {
  const { name } = portfolioData.profile;
  const isNeovim = view === "neovim";

  return (
    <span
      className={clsx({
        "font-jetbrains text-sm text-[var(--tn-blue)]": isNeovim,
        "font-inter text-base font-semibold tracking-tight text-gray-900": !isNeovim,
      })}
    >
      {isNeovim ? `${name.toLowerCase().replace(" ", "-")}.nvim` : name}
    </span>
  );
}

import type { View } from "@/types/portfolio";
import portfolioData from "@/data/portfolioData";

interface LogoProps {
  view: View;
}

export function Logo({ view }: LogoProps) {
  const { name } = portfolioData.profile;

  if (view === "neovim") {
    return (
      <span className="font-jetbrains text-sm" style={{ color: "var(--tn-blue)" }}>
        {name.toLowerCase().replace(" ", "-")}.nvim
      </span>
    );
  }

  return (
    <span className="font-inter text-base font-semibold tracking-tight text-gray-900">
      {name}
    </span>
  );
}

"use client";

import clsx from "clsx";
import { useView } from "./ViewContext";
import type { View } from "@/types/portfolio";

const labels: Record<View, string> = {
  editorial: "Editorial",
  neovim: "Neovim",
};

export function ViewToggle() {
  const { view, setView } = useView();
  const views: View[] = ["editorial", "neovim"];
  const isNeovim = view === "neovim";

  return (
    <div
      className={clsx("flex items-center gap-0.5 p-0.5", {
        "rounded-[4px] border border-[#EAEAEA] bg-[#F7F6F3]": !isNeovim,
        "rounded font-jetbrains text-xs bg-[var(--tn-bg-highlight)]": isNeovim,
      })}
    >
      {views.map((v) => {
        const isActive = view === v;
        return (
          <button
            key={v}
            onClick={() => setView(v)}
            className={clsx("transition-colors", {
              "rounded-[4px] px-3 py-1 text-xs font-medium font-inter": !isNeovim,
              "px-3 py-1.5 rounded": isNeovim,
              "bg-[var(--ed-accent)] text-white": !isNeovim && isActive,
              "text-[var(--ed-muted)]": !isNeovim && !isActive,
              "text-[var(--tn-blue)] bg-[var(--tn-bg-sel)]": isNeovim && isActive,
              "text-[var(--tn-comment)]": isNeovim && !isActive,
            })}
          >
            {isNeovim ? labels[v].toLowerCase() : labels[v]}
          </button>
        );
      })}
    </div>
  );
}

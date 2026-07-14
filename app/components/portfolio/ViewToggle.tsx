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
        "rounded-full border border-gray-200 bg-gray-50": !isNeovim,
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
              "rounded-full px-3 py-1 text-xs font-medium font-inter": !isNeovim,
              "px-3 py-1.5 rounded": isNeovim,
              "bg-[var(--ed-accent)] text-white": !isNeovim && isActive,
              "text-gray-500": !isNeovim && !isActive,
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

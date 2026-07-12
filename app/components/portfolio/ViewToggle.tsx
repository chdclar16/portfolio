"use client";

import { useView } from "./ViewContext";
import type { View } from "@/types/portfolio";

const labels: Record<View, string> = {
  editorial: "Editorial",
  neovim: "Neovim",
};

export function ViewToggle() {
  const { view, setView } = useView();
  const views: View[] = ["editorial", "neovim"];

  if (view === "neovim") {
    return (
      <div
        className="flex items-center gap-0.5 rounded font-jetbrains text-xs p-0.5"
        style={{ backgroundColor: "var(--tn-bg-highlight)" }}
      >
        {views.map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className="px-3 py-1.5 rounded transition-colors"
            style={
              view === v
                ? { color: "var(--tn-blue)", backgroundColor: "var(--tn-bg-sel)" }
                : { color: "var(--tn-comment)" }
            }
          >
            {labels[v].toLowerCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-gray-200 bg-gray-50 p-0.5">
      {views.map((v) => (
        <button
          key={v}
          onClick={() => setView(v)}
          className="rounded-full px-3 py-1 text-xs font-medium font-inter transition-colors"
          style={
            view === v
              ? { backgroundColor: "var(--ed-accent)", color: "#ffffff" }
              : { color: "#6b7280" }
          }
        >
          {labels[v]}
        </button>
      ))}
    </div>
  );
}

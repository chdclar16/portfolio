"use client";

import { Logo } from "./Logo";
import { ViewToggle } from "./ViewToggle";
import { useView } from "./ViewContext";

export function Header() {
  const { view } = useView();
  const isNeovim = view === "neovim";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between px-6 border-b"
      style={
        isNeovim
          ? { backgroundColor: "var(--tn-panel)", borderColor: "var(--tn-border)" }
          : { backgroundColor: "#ffffff", borderColor: "#e5e7eb" }
      }
    >
      <Logo view={view} />
      <ViewToggle />
    </header>
  );
}

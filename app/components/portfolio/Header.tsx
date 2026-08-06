"use client";

import clsx from "clsx";
import { Logo } from "./Logo";
import { ViewToggle } from "./ViewToggle";
import { useView } from "./ViewContext";

export function Header() {
  const { view } = useView();
  const isNeovim = view === "neovim";

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between px-6 border-b",
        {
          "bg-white border-gray-200": !isNeovim,
          "bg-[var(--tn-panel)] border-[var(--tn-border)]": isNeovim,
        }
      )}
    >
      <Logo view={view} />
      <ViewToggle />
    </header>
  );
}

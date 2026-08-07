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
        "fixed inset-x-0 top-0 z-50 h-14 border-b",
        {
          "bg-white border-gray-200": !isNeovim,
          "bg-[var(--tn-panel)] border-[var(--tn-border)]": isNeovim,
        }
      )}
    >
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-6">
        <Logo view={view} />
        <ViewToggle />
      </div>
    </header>
  );
}

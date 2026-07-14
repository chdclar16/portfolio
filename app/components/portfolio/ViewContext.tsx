"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { View } from "@/types/portfolio";

interface ViewContextValue {
  view: View;
  setView: (v: View) => void;
}

const ViewContext = createContext<ViewContextValue | null>(null);

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [view, setViewState] = useState<View>("editorial");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-view") as View | null;
    if (stored === "editorial" || stored === "neovim") setViewState(stored);
  }, []);

  function setView(v: View) {
    setViewState(v);
    localStorage.setItem("portfolio-view", v);
  }

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const ctx = useContext(ViewContext);
  if (!ctx) throw new Error("useView must be used within ViewProvider");
  return ctx;
}

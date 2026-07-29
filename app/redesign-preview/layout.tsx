import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ViewProvider } from "@/app/components/portfolio/ViewContext";
import { tokyonight, editorial } from "@/data/theme";
import "@/styles/portfolio.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Portfolio Preview — Chad Manuel",
};

const cssVars = {
  "--tn-bg": tokyonight.bg,
  "--tn-bg-dark": tokyonight.bgDark,
  "--tn-bg-highlight": tokyonight.bgHighlight,
  "--tn-bg-sel": tokyonight.bgSel,
  "--tn-panel": tokyonight.panel,
  "--tn-border": tokyonight.border,
  "--tn-fg": tokyonight.fg,
  "--tn-fg-dim": tokyonight.fgDim,
  "--tn-comment": tokyonight.comment,
  "--tn-gutter": tokyonight.gutter,
  "--tn-blue": tokyonight.blue,
  "--tn-cyan": tokyonight.cyan,
  "--tn-green": tokyonight.green,
  "--tn-magenta": tokyonight.magenta,
  "--tn-orange": tokyonight.orange,
  "--tn-red": tokyonight.red,
  "--ed-accent":      editorial.accent,
  "--ed-accent-hover":editorial.accentHover,
  "--ed-canvas":      editorial.canvas,
  "--ed-surface":     editorial.surface,
  "--ed-border":      editorial.border,
  "--ed-heading":     editorial.heading,
  "--ed-body":        editorial.body,
  "--ed-muted":       editorial.muted,
} as React.CSSProperties;

export default function RedesignPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`} style={cssVars}>
      <ViewProvider>{children}</ViewProvider>
    </div>
  );
}

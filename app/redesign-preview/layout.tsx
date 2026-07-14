import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ViewProvider } from "@/app/components/portfolio/ViewContext";
import { tokyonight, editorial } from "@/data/theme";
import "@/styles/portfolio.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
  "--ed-accent": editorial.accent,
} as React.CSSProperties;

export default function RedesignPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${jetbrainsMono.variable}`} style={cssVars}>
      <ViewProvider>{children}</ViewProvider>
    </div>
  );
}

"use client";

import clsx from "clsx";
import type { ReactNode } from "react";

const filetypeColor: Record<string, string> = {
  js:   "text-[var(--tn-orange)]",
  ts:   "text-[var(--tn-blue)]",
  md:   "text-[var(--tn-green)]",
  json: "text-[var(--tn-cyan)]",
  sh:   "text-[var(--tn-green)]",
  lua:  "text-[var(--tn-magenta)]",
};

interface NvimBufferProps {
  filename: string;
  filetype: string;
  children: ReactNode;
  className?: string;
}

export default function NvimBuffer({ filename, filetype, children, className }: NvimBufferProps) {
  return (
    <div className={clsx("bg-[var(--tn-bg)] text-[var(--tn-fg)] font-jetbrains text-sm", className)}>
      <div className="flex bg-[var(--tn-bg-dark)] border-b border-[var(--tn-border)]">
        <div className="flex items-center px-4 py-1.5 bg-[var(--tn-bg)] border-r border-[var(--tn-border)] text-xs">
          <span className={filetypeColor[filetype] ?? "text-[var(--tn-fg)]"}>{filename}</span>
        </div>
        <div className="flex-1" />
      </div>

      {children}

      <div className="flex items-center bg-[var(--tn-blue)] text-[var(--tn-bg-dark)] px-3 py-0.5 text-xs font-bold">
        <span className="bg-[var(--tn-bg-dark)] text-[var(--tn-blue)] px-2 py-0.5 rounded-sm mr-3">
          NORMAL
        </span>
        <span className="flex-1">{filename}</span>
        <span>utf-8</span>
      </div>
    </div>
  );
}

interface NvimLineProps {
  lineNumber: number;
  children?: ReactNode;
}

export function NvimLine({ lineNumber, children }: NvimLineProps) {
  return (
    <div className="flex leading-6">
      <span className="select-none text-right text-[var(--tn-gutter)] w-10 pr-4 shrink-0 text-xs">
        {lineNumber}
      </span>
      <span className="flex-1">
        {children ?? <span className="text-[var(--tn-gutter)]">~</span>}
      </span>
    </div>
  );
}

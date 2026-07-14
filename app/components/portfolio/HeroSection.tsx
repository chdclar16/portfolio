"use client";

import Link from "next/link";
import clsx from "clsx";
import { useView } from "@/app/components/portfolio/ViewContext";
import NvimBuffer, { NvimLine } from "@/app/components/portfolio/NvimBuffer";
import portfolioData from "@/data/portfolioData";

const { profile } = portfolioData;

const Kw  = ({ children }: { children: string }) => <span className="text-[var(--tn-magenta)]">{children}</span>;
const Str = ({ children }: { children: string }) => <span className="text-[var(--tn-green)]">&quot;{children}&quot;</span>;
const Key = ({ children }: { children: string }) => <span className="text-[var(--tn-cyan)]">{children}</span>;
const Fn  = ({ children }: { children: string }) => <span className="text-[var(--tn-blue)]">{children}</span>;
const Cm  = ({ children }: { children: string }) => <span className="text-[var(--tn-comment)]">{children}</span>;
const Pu  = ({ children }: { children: string }) => <span className="text-[var(--tn-fg-dim)]">{children}</span>;

function NvimHero() {
  const lines = [
    <Cm>-- chad-manuel.nvim · init.lua</Cm>,
    <Cm>-- ───────────────────────────────────────────</Cm>,
    null,
    <><Kw>local</Kw> <Fn>M</Fn> <Pu>= {"{}"}</Pu></>,
    null,
    <><Fn>M</Fn><Pu>.</Pu><Key>profile</Key> <Pu>= {"{"}</Pu></>,
    <span className="pl-6"><Key>name</Key>     <Pu>= </Pu><Str>Chad Manuel</Str><Pu>,</Pu></span>,
    <span className="pl-6"><Key>role</Key>     <Pu>= </Pu><Str>Full Stack Developer</Str><Pu>,</Pu></span>,
    <span className="pl-6"><Key>location</Key> <Pu>= </Pu><Str>SF Bay Area, CA</Str><Pu>,</Pu></span>,
    <span className="pl-6"><Key>tagline</Key>  <Pu>= </Pu><Str>{profile.tagline}</Str><Pu>,</Pu></span>,
    <Pu>{"}"}</Pu>,
    null,
    <><Kw>return</Kw> <Fn>M</Fn></>,
    null,
    null,
    null,
  ];

  return (
    <NvimBuffer filename="init.lua" filetype="lua" className="min-h-[calc(100vh-56px)] flex flex-col">
      <div className="flex-1 px-2 py-4">
        {lines.map((content, index) => (
          <NvimLine key={index} lineNumber={index + 1}>
            {content}
          </NvimLine>
        ))}
      </div>
    </NvimBuffer>
  );
}

function EditorialHero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-56px)] flex items-center px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-2xl">
        <p className="font-inter text-xs tracking-widest uppercase text-[var(--ed-accent)] mb-5">
          {profile.eyebrow}
        </p>
        <h1 className="font-inter text-5xl md:text-7xl font-bold text-gray-900 leading-none mb-6">
          {profile.name}
        </h1>
        <p className="font-inter text-xl md:text-2xl text-gray-500 leading-relaxed mb-4">
          {profile.tagline}
        </p>
        <p className="font-inter text-base text-gray-400 leading-relaxed mb-10 max-w-lg">
          {profile.bio}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="font-inter px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Get in touch
          </a>
          <Link
            href={profile.resumeUrl}
            target="_blank"
            className="font-inter px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-500 transition-colors"
          >
            Resume ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  const { view } = useView();
  return view === "neovim" ? <NvimHero /> : <EditorialHero />;
}

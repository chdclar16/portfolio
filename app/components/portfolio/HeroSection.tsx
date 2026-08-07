"use client";

import Image from "next/image";
import Link from "next/link";
import { useView } from "@/app/components/portfolio/ViewContext";
import NvimBuffer, { NvimLine } from "@/app/components/portfolio/NvimBuffer";
import FadeIn from "@/app/components/portfolio/FadeIn";
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
      className="relative min-h-[calc(100vh-56px)] flex items-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(255,245,220,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 min-w-0">
          <FadeIn>
            <p className="font-inter text-xs tracking-widest uppercase text-[var(--ed-muted)] mb-5">
              {profile.eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h1
              className="font-serif text-5xl md:text-7xl text-[var(--ed-heading)] mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
            >
              {profile.name}
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="font-inter text-xl md:text-2xl text-[var(--ed-muted)] leading-relaxed mb-4">
              {profile.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={220}>
            <p className="font-inter text-base text-[var(--ed-muted)] leading-relaxed mb-10 max-w-lg" style={{ lineHeight: "1.6" }}>
              {profile.bio}
            </p>
          </FadeIn>
          <FadeIn delay={280}>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="font-inter px-6 py-3 rounded-[4px] bg-[var(--ed-accent)] text-white text-sm font-medium transition-colors"
                style={{ transition: "background-color 200ms, transform 100ms" }}
                onMouseEnter={element => (element.currentTarget.style.backgroundColor = "var(--ed-accent-hover)")}
                onMouseLeave={element => (element.currentTarget.style.backgroundColor = "var(--ed-accent)")}
              >
                Get in touch
              </a>
              <Link
                href={profile.resumeUrl}
                target="_blank"
                className="font-inter px-6 py-3 rounded-[4px] border border-[var(--ed-border)] text-[var(--ed-body)] text-sm font-medium transition-colors hover:border-[#aaa]"
              >
                Resume ↗
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={120}>
          <div className="flex-shrink-0 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-[var(--ed-border)] flex items-end justify-center bg-white">
            <Image
              src="/avatar.webp"
              alt="Chad Manuel"
              width={320}
              height={320}
              className="w-[88%] h-[88%] object-contain"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function HeroSection() {
  const { view } = useView();
  return view === "neovim" ? <NvimHero /> : <EditorialHero />;
}

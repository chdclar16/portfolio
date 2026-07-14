"use client";

import clsx from "clsx";
import { useView } from "@/app/components/portfolio/ViewContext";
import NvimBuffer, { NvimLine } from "@/app/components/portfolio/NvimBuffer";
import portfolioData from "@/data/portfolioData";

const { profile } = portfolioData;

const H1 = ({ children }: { children: string }) => <span className="text-[var(--tn-orange)] font-bold"># {children}</span>;
const H2 = ({ children }: { children: string }) => <span className="text-[var(--tn-orange)]">## {children}</span>;
const Bold = ({ children }: { children: string }) => <span className="text-[var(--tn-cyan)] font-semibold">**{children}**</span>;
const Cm  = ({ children }: { children: string }) => <span className="text-[var(--tn-comment)]">{children}</span>;
const Pu  = ({ children }: { children: string }) => <span className="text-[var(--tn-fg-dim)]">{children}</span>;

function NvimAbout() {
  const lines = [
    <H1>About Me</H1>,
    null,
    <Pu>I&apos;m a Full Stack Developer from the <Bold>SF Bay Area</Bold>,</Pu>,
    <Pu>California. Transitioned from tech operations into software</Pu>,
    <Pu>development — open to full stack, front-end, and back-end roles.</Pu>,
    null,
    <H2>Background</H2>,
    null,
    <Pu>I jumped headfirst into software development after years in</Pu>,
    <Pu>tech operations. I love crafting digital solutions and making</Pu>,
    <Pu>things happen in the tech universe.</Pu>,
    null,
    <><Cm>---</Cm></>,
    null,
    <><Pu>✉ </Pu><span className="text-[var(--tn-blue)] underline">{profile.email}</span></>,
    <><Pu>⌂ </Pu><span className="text-[var(--tn-blue)] underline">{profile.socials.github}</span></>,
    <><Pu>⬡ </Pu><span className="text-[var(--tn-blue)] underline">{profile.socials.linkedin}</span></>,
    null,
    null,
  ];

  return (
    <NvimBuffer filename="about.md" filetype="md">
      <div className="px-2 py-4">
        {lines.map((content, index) => (
          <NvimLine key={index} lineNumber={index + 1}>
            {content}
          </NvimLine>
        ))}
      </div>
    </NvimBuffer>
  );
}

function EditorialAbout() {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-3xl">
        <p className="font-inter text-xs tracking-widest uppercase text-[var(--ed-accent)] mb-4">
          About
        </p>
        <h2 className="font-inter text-4xl font-bold text-gray-900 mb-8">
          About Me
        </h2>
        <div className="space-y-4 font-inter text-lg text-gray-500 leading-relaxed max-w-2xl">
          <p>
            I&apos;m a Full Stack Developer from the San Francisco Bay Area, California.
            I transitioned from tech operations into software development and haven&apos;t
            looked back since.
          </p>
          <p>
            I&apos;m passionate about crafting digital solutions and making things happen.
            Open to full stack, front-end, and back-end roles on forward-thinking teams.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href={profile.socials.github}
            target="_blank"
            className="font-inter text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-4"
          >
            GitHub ↗
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            className="font-inter text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-4"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default function AboutSection() {
  const { view } = useView();
  return view === "neovim" ? <NvimAbout /> : <EditorialAbout />;
}

"use client";

import { useView } from "@/app/components/portfolio/ViewContext";
import NvimBuffer, { NvimLine } from "@/app/components/portfolio/NvimBuffer";
import FadeIn from "@/app/components/portfolio/FadeIn";
import portfolioData from "@/data/portfolioData";

const { profile } = portfolioData;

const Kw  = ({ children }: { children: string }) => <span className="text-[var(--tn-magenta)]">{children}</span>;
const Str = ({ children }: { children: string }) => <span className="text-[var(--tn-green)]">&quot;{children}&quot;</span>;
const Fn  = ({ children }: { children: string }) => <span className="text-[var(--tn-blue)]">{children}</span>;
const Cm  = ({ children }: { children: string }) => <span className="text-[var(--tn-comment)]">{children}</span>;
const Pu  = ({ children }: { children: string }) => <span className="text-[var(--tn-fg-dim)]">{children}</span>;

const shLines = [
  <Cm>#!/bin/bash</Cm>,
  <Cm># contact.sh — reach out</Cm>,
  null,
  <><Kw>EMAIL</Kw><Pu>=</Pu><Str>{profile.email}</Str></>,
  <><Kw>GITHUB</Kw><Pu>=</Pu><Str>{profile.socials.github}</Str></>,
  <><Kw>LINKEDIN</Kw><Pu>=</Pu><Str>{profile.socials.linkedin}</Str></>,
  <><Kw>RESUME</Kw><Pu>=</Pu><Str>{profile.resumeUrl}</Str></>,
  null,
  <><Fn>open_link</Fn><Pu>() {"{"}</Pu></>,
  <span className="pl-4"><Fn>xdg-open</Fn> <Pu>&quot;$</Pu><Kw>1</Kw><Pu>&quot;</Pu></span>,
  <Pu>{"}"}</Pu>,
  null,
  <Cm># To connect:</Cm>,
  <><Fn>open_link</Fn> <Str>mailto:{profile.email}</Str></>,
  null,
  null,
];

function NvimContact() {
  return (
    <NvimBuffer filename="contact.sh" filetype="sh">
      <div className="px-2 py-4">
        {shLines.map((content, index) => (
          <NvimLine key={index} lineNumber={index + 1}>
            {content}
          </NvimLine>
        ))}
      </div>
    </NvimBuffer>
  );
}

function EditorialContact() {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 border-t border-[var(--ed-border)]">
      <div className="max-w-2xl">
        <FadeIn>
          <p className="font-inter text-xs tracking-widest uppercase text-[var(--ed-muted)] mb-4">
            Contact
          </p>
          <h2
            className="font-serif text-4xl text-[var(--ed-heading)] mb-6"
            style={{ letterSpacing: "-0.02em", lineHeight: "1.1" }}
          >
            Get in touch
          </h2>
          <p className="font-inter text-lg text-[var(--ed-muted)] mb-10" style={{ lineHeight: "1.6" }}>
            Open to new opportunities. If you&apos;d like to work together or just
            want to say hello, reach out directly.
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <a
            href={`mailto:${profile.email}`}
            className="font-inter inline-block px-6 py-3 rounded-[4px] bg-[var(--ed-accent)] text-white text-sm font-medium mb-8 transition-colors"
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--ed-accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--ed-accent)")}
          >
            {profile.email}
          </a>
        </FadeIn>
        <FadeIn delay={180}>
          <div className="flex flex-wrap gap-6 border-t border-[var(--ed-border)] pt-8">
            <a
              href={profile.socials.github}
              target="_blank"
              className="font-inter text-sm text-[var(--ed-muted)] hover:text-[var(--ed-heading)] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              className="font-inter text-sm text-[var(--ed-muted)] hover:text-[var(--ed-heading)] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              className="font-inter text-sm text-[var(--ed-muted)] hover:text-[var(--ed-heading)] transition-colors"
            >
              Resume ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function ContactSection() {
  const { view } = useView();
  return view === "neovim" ? <NvimContact /> : <EditorialContact />;
}

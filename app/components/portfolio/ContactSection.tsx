"use client";

import { useView } from "@/app/components/portfolio/ViewContext";
import NvimBuffer, { NvimLine } from "@/app/components/portfolio/NvimBuffer";
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
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 border-t border-gray-100">
      <div className="max-w-2xl">
        <p className="font-inter text-xs tracking-widest uppercase text-[var(--ed-accent)] mb-4">
          Contact
        </p>
        <h2 className="font-inter text-4xl font-bold text-gray-900 mb-6">
          Get in touch
        </h2>
        <p className="font-inter text-lg text-gray-500 leading-relaxed mb-10">
          Open to new opportunities. If you&apos;d like to work together or just want
          to say hello, feel free to reach out.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="font-inter text-sm font-medium text-gray-900 hover:text-[var(--ed-accent)] transition-colors"
          >
            {profile.email} ↗
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            className="font-inter text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            className="font-inter text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            className="font-inter text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ContactSection() {
  const { view } = useView();
  return view === "neovim" ? <NvimContact /> : <EditorialContact />;
}

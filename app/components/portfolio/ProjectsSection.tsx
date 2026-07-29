"use client";

import Link from "next/link";
import { useView } from "@/app/components/portfolio/ViewContext";
import NvimBuffer, { NvimLine } from "@/app/components/portfolio/NvimBuffer";
import FadeIn from "@/app/components/portfolio/FadeIn";
import portfolioData from "@/data/portfolioData";
import type { ReactNode } from "react";

const { projects } = portfolioData;

const Kw   = ({ children }: { children: string }) => <span className="text-[var(--tn-magenta)]">{children}</span>;
const Str  = ({ children }: { children: string }) => <span className="text-[var(--tn-green)]">&quot;{children}&quot;</span>;
const Key  = ({ children }: { children: string }) => <span className="text-[var(--tn-cyan)]">{children}</span>;
const Fn   = ({ children }: { children: string }) => <span className="text-[var(--tn-blue)]">{children}</span>;
const Pu   = ({ children }: { children: string }) => <span className="text-[var(--tn-fg-dim)]">{children}</span>;
const Cm   = ({ children }: { children: string }) => <span className="text-[var(--tn-comment)]">{children}</span>;
const Num  = ({ children }: { children: string }) => <span className="text-[var(--tn-orange)]">{children}</span>;

function buildProjectLines(): Array<ReactNode> {
  const lines: Array<ReactNode> = [
    <Cm>// projects.js</Cm>,
    null,
    <><Kw>const</Kw> <Fn>projects</Fn> <Pu>= [</Pu></>,
  ];

  projects.forEach((project, projectIndex) => {
    const isLast = projectIndex === projects.length - 1;
    lines.push(<span className="pl-4"><Pu>{"{"}</Pu></span>);
    lines.push(<span className="pl-8"><Key>title</Key><Pu>: </Pu><Str>{project.title}</Str><Pu>,</Pu></span>);
    lines.push(<span className="pl-8"><Key>stack</Key><Pu>: [</Pu>{project.stack.map((tech, techIndex) => (
      <span key={tech}><Str>{tech}</Str>{techIndex < project.stack.length - 1 && <Pu>, </Pu>}</span>
    ))}<Pu>],</Pu></span>);
    lines.push(<span className="pl-8"><Key>github</Key><Pu>: </Pu><Str>{project.githubUrl}</Str><Pu>,</Pu></span>);
    lines.push(<span className="pl-4"><Pu>{"}"}{!isLast ? "," : ""}</Pu></span>);
    if (!isLast) lines.push(null);
  });

  lines.push(<Pu>]</Pu>);
  lines.push(null);
  return lines;
}

function NvimProjects() {
  const lines = buildProjectLines();
  return (
    <NvimBuffer filename="projects.js" filetype="js">
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

function ProjectCard({
  project,
  featured = false,
  delay = 0,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay} className="h-full">
      <div
        className="group h-full flex flex-col p-8 border border-[var(--ed-border)] rounded-[12px] transition-shadow duration-200"
        style={{ background: "var(--ed-surface)" }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)")}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
      >
        <div className="flex-1">
          <h3
            className={`font-inter font-semibold text-[var(--ed-heading)] mb-3 ${featured ? "text-xl" : "text-lg"}`}
          >
            {project.title}
          </h3>
          <p className="font-inter text-sm text-[var(--ed-muted)] leading-relaxed mb-5" style={{ lineHeight: "1.6" }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-inter text-xs px-2.5 py-1 rounded-full bg-[#F7F6F3] text-[var(--ed-muted)]"
                style={{ letterSpacing: "0.02em" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={project.githubUrl}
          target="_blank"
          className="font-inter text-sm text-[var(--ed-heading)] font-medium hover:opacity-60 transition-opacity"
        >
          View on GitHub ↗
        </Link>
      </div>
    </FadeIn>
  );
}

function EditorialProjects() {
  const [first, second, ...rest] = projects;
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24 border-t border-[var(--ed-border)]">
      <div className="max-w-4xl">
        <FadeIn>
          <p className="font-inter text-xs tracking-widest uppercase text-[var(--ed-muted)] mb-4">
            Work
          </p>
          <h2
            className="font-serif text-4xl text-[var(--ed-heading)] mb-12"
            style={{ letterSpacing: "-0.02em", lineHeight: "1.1" }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Bento: first card spans 2 cols, remaining fill */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {first && (
            <div className="md:col-span-2">
              <ProjectCard project={first} featured delay={80} />
            </div>
          )}
          {second && <ProjectCard project={second} delay={160} />}
          {rest.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={160 + (index + 1) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectsSection() {
  const { view } = useView();
  return view === "neovim" ? <NvimProjects /> : <EditorialProjects />;
}

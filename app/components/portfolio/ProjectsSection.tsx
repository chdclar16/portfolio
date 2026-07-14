"use client";

import Link from "next/link";
import { useView } from "@/app/components/portfolio/ViewContext";
import NvimBuffer, { NvimLine } from "@/app/components/portfolio/NvimBuffer";
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

function EditorialProjects() {
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24 border-t border-gray-100">
      <div className="max-w-4xl">
        <p className="font-inter text-xs tracking-widest uppercase text-[var(--ed-accent)] mb-4">
          Work
        </p>
        <h2 className="font-inter text-4xl font-bold text-gray-900 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
            >
              <h3 className="font-inter text-lg font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="font-inter text-sm text-gray-500 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-inter text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.githubUrl}
                target="_blank"
                className="font-inter text-sm text-[var(--ed-accent)] hover:underline"
              >
                View on GitHub ↗
              </Link>
            </div>
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

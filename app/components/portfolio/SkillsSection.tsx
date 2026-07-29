"use client";

import { useView } from "@/app/components/portfolio/ViewContext";
import NvimBuffer, { NvimLine } from "@/app/components/portfolio/NvimBuffer";
import FadeIn from "@/app/components/portfolio/FadeIn";
import portfolioData from "@/data/portfolioData";

const { skills } = portfolioData;

const Str  = ({ children }: { children: string }) => <span className="text-[var(--tn-green)]">&quot;{children}&quot;</span>;
const Key  = ({ children }: { children: string }) => <span className="text-[var(--tn-cyan)]">&quot;{children}&quot;</span>;
const Pu   = ({ children }: { children: string }) => <span className="text-[var(--tn-fg-dim)]">{children}</span>;
const Cm   = ({ children }: { children: string }) => <span className="text-[var(--tn-comment)]">{children}</span>;

function buildJsonLines() {
  const entries = [
    skills.frontend,
    skills.backend,
    skills.other,
  ];

  const lines: Array<React.ReactNode> = [
    <Cm>// tech stack</Cm>,
    <Pu>{"{"}</Pu>,
  ];

  entries.forEach((category, catIndex) => {
    const isLast = catIndex === entries.length - 1;
    lines.push(
      <span className="pl-4"><Key>{category.label.toLowerCase()}</Key><Pu>: [</Pu></span>
    );
    category.skills.forEach((skill, skillIndex) => {
      const isLastSkill = skillIndex === category.skills.length - 1;
      lines.push(
        <span className="pl-8"><Str>{skill}</Str>{!isLastSkill && <Pu>,</Pu>}</span>
      );
    });
    lines.push(
      <span className="pl-4"><Pu>]{!isLast ? "," : ""}</Pu></span>
    );
  });

  lines.push(<Pu>{"}"}</Pu>);
  lines.push(null);
  return lines;
}

function NvimSkills() {
  const lines = buildJsonLines();
  return (
    <NvimBuffer filename="skills.json" filetype="json">
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

function EditorialSkills() {
  const categories = [skills.frontend, skills.backend, skills.other];
  return (
    <section id="skills" className="px-6 md:px-16 lg:px-24 py-16 border-t border-[var(--ed-border)]">
      <div className="max-w-3xl">
        <FadeIn>
          <p className="font-inter text-xs tracking-widest uppercase text-[var(--ed-muted)] mb-4">
            Skills
          </p>
          <h2
            className="font-serif text-4xl text-[var(--ed-heading)] mb-10"
            style={{ letterSpacing: "-0.02em", lineHeight: "1.1" }}
          >
            Tech Stack
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <FadeIn key={category.label} delay={80 + index * 80}>
              <h3 className="font-inter text-xs tracking-widest uppercase text-[var(--ed-muted)] mb-4">
                {category.label}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-inter text-sm text-[var(--ed-body)] flex items-center gap-2.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--ed-muted)] shrink-0 opacity-50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SkillsSection() {
  const { view } = useView();
  return view === "neovim" ? <NvimSkills /> : <EditorialSkills />;
}

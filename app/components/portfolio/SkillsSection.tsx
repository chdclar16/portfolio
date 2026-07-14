"use client";

import { useView } from "@/app/components/portfolio/ViewContext";
import NvimBuffer, { NvimLine } from "@/app/components/portfolio/NvimBuffer";
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
    <section id="skills" className="px-6 md:px-16 lg:px-24 py-16 border-t border-gray-100">
      <div className="max-w-3xl">
        <p className="font-inter text-xs tracking-widest uppercase text-[var(--ed-accent)] mb-4">
          Skills
        </p>
        <h2 className="font-inter text-4xl font-bold text-gray-900 mb-10">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((category) => (
            <div key={category.label}>
              <h3 className="font-inter text-xs tracking-widest uppercase text-gray-400 mb-4">
                {category.label}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-inter text-sm text-gray-600 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--ed-accent)] shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
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

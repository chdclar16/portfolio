export type View = "editorial" | "neovim";

export type FileType = "js" | "md" | "json" | "sh";

export interface Buffer {
  filename: string;
  filetype: FileType;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface Profile {
  name: string;
  eyebrow: string;
  tagline: string;
  bio: string;
  email: string;
  resumeUrl: string;
  socials: SocialLinks;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface Skills {
  frontend: SkillCategory;
  backend: SkillCategory;
  other: SkillCategory;
}

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  skills: Skills;
  neovimBuffers: Buffer[];
}

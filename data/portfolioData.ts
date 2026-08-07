import type { PortfolioData } from "../types/portfolio";

const portfolioData: PortfolioData = {
  profile: {
    name: "Chad Manuel",
    eyebrow: "full stack developer · sf bay area",
    tagline: "I build digital solutions that make things happen.",
    bio: "Transitioned from tech operations into software development. Open to full stack, front-end, and back-end roles.",
    email: "chad.manuel2013@gmail.com",
    resumeUrl:
      "https://drive.google.com/file/d/1htZlZl3Pe9-41mjQYVqclXjXWl4Mp8zZ/view",
    socials: {
      github: "https://github.com/chdclar16",
      linkedin: "https://www.linkedin.com/in/chadmanuel/",
    },
  },

  projects: [
    {
      id: 1,
      title: "Pass Pro",
      description:
        "Ecommerce platform for buying tickets and empowering event hosts to create and sell tickets for their own events.",
      stack: ["React", "Redux"],
      githubUrl: "https://github.com/chdclar16/pass-pro",
    },
    {
      id: 2,
      title: "Conference Companion",
      description:
        "All-in-one tool for managing conferences and events — create, schedule, and track workshops and meetings. Uses the Pexels API for imagery.",
      stack: ["Next.js"],
      githubUrl: "https://github.com/chdclar16/ConferenceCompanion",
    },
    {
      id: 3,
      title: "Car Car",
      description:
        "Dealership management system for tracking car inventory, sales, and maintenance schedules in one place.",
      stack: ["React", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/chdclar16/CarCar",
    },
    {
      id: 4,
      title: "Omega Strikers Bot",
      description:
        "Discord bot that provides character information and build recommendations for the game Omega Strikers.",
      stack: ["Node.js"],
      githubUrl: "https://github.com/chdclar16/omega-striker-build-bot",
    },
  ],

  skills: {
    frontend: {
      label: "Frontend",
      skills: ["React", "Next.js", "Redux / RTK", "Tailwind CSS", "Bootstrap"],
    },
    backend: {
      label: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "FastAPI", "REST APIs"],
    },
    other: {
      label: "Other",
      skills: ["Git", "neovim", "tmux", "PostgreSQL", "MongoDB", "Docker", "TypeScript"],
    },
  },

  neovimBuffers: [
    { filename: "projects.js", filetype: "js",   label: "projects.js" },
    { filename: "about.md",    filetype: "md",   label: "about.md"    },
    { filename: "skills.json", filetype: "json", label: "skills.json" },
    { filename: "contact.sh",  filetype: "sh",   label: "contact.sh"  },
  ],
};

export default portfolioData;

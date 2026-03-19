export type Profile = {
  name: string;
  role: string;
  about: string;
  location?: string;
  email?: string;
  links?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
};

export const profile: Profile = {
  name: "Asmae Aabasse",
  role: "IA • SIG • DevSecOps • Android",
  about:
    "Portfolio de projets et certifications, orienté IA appliquée, SIG et pratiques DevSecOps.",
  location: "Maroc",
  email: "a.asmae8765@gmail.com",
  links: {
    github: "https://github.com/asmae202",
    linkedin: "https://www.linkedin.com/in/asmae-a-118a043b5",
  },
};
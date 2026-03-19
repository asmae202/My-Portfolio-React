export type Experience = {
  title: string;
  company?: string;
  location?: string;
  start: string; // "YYYY-MM"
  end?: string; // "YYYY-MM" | undefined = présent
  highlights: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    title: "Projets IA & SIG",
    company: "Portfolio",
    location: "Maroc",
    start: "2024-01",
    highlights: [
      "Mise en place de prototypes IA (classification/détection) et visualisations.",
      "Intégration web (React + TypeScript) avec UI moderne et accessible.",
      "Focus qualité: structure, lint, build propre, documentation minimale.",
    ],
    tags: ["IA", "SIG", "React", "TypeScript"],
  },
];


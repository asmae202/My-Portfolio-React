export type Project = {
  title: string;
  summary: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Détection d’objets (CNN) sur drone",
    summary: "Pipeline d’entraînement et inférence embarquée pour vision sur UAV.",
    tags: ["Deep Learning", "Computer Vision"],
    repo: "https://github.com/ton-compte/ton-projet",
  },
  {
    title: "Dashboard SIG",
    summary: "Visualisation de couches géospatiales et requêtes attributaires.",
    tags: ["SIG", "Web"],
    link: "https://example.com",
  },
];


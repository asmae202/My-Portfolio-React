import { motion } from "framer-motion";
import { Rocket, Github } from "lucide-react";

const projects = [
  {
    title: "Gestion des incidents réseau",
    description:
      "Application Java desktop permettant d'optimiser la gestion et le suivi des incidents au sein d'une organisation.",
    technologies: ["JDBC", "Java Swing", "NetBeans", "JFreeChart"],
    github: "https://github.com/asmae202/Gestion_des_Incidents_Reseau",
  },
  {
    title: "Blog full stack Laravel",
    description:
      "Site dynamique avec pages ergonomiques et esthétiques, combinant front-end et back-end avec Laravel.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "MVC"],
    github: "https://github.com/asmae202/Blog-full-stack-Laravel",
  },
  {
    title: "Système de gestion de projets (Spring Boot)",
    description:
      "API REST pour gérer projets, employés, phases, livrables et facturation, avec relations JPA et règles métier.",
    technologies: ["Spring Boot", "Hibernate", "MySQL", "JPA"],
    github: "https://github.com/asmae202/Projet_springboot",
  },
  {
    title: "Réseau simulation",
    description:
      "Simulation d’un réseau informatique pour la communication entre un siège et plusieurs agences.",
    technologies: ["Cisco Packet Tracer", "DNS", "DHCP", "Serveur web"],
    github: "https://github.com/asmae202/Reseau_Simulation",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 drop-shadow-[0_0_18px_rgba(16,185,129,0.25)]">
            Projets récents
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Quelques travaux sélectionnés qui montrent mon approche du développement.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <Rocket className="h-6 w-6 text-accent" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.github ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition transform hover:-translate-y-0.5"
                  >
                    <Github className="h-4 w-4" /> Voir sur GitHub
                  </motion.a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

import { Code2, Layers, Server, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: Code2, color: "#61dafb" },
  { name: "MySQL", icon: Server, color: "#4479A1" },
  { name: "Bootstrap", icon: Layers, color: "#7952B3" },
  { name: "HTML", icon: Code2, color: "#E34F26" },
  { name: "CSS", icon: Sparkles, color: "#2965F1" },
  { name: "JavaScript", icon: Code2, color: "#F7DF1E" },
  { name: "JEE", icon: Server, color: "#2A2F45" },
  { name: "Oracle", icon: Server, color: "#F80000" },
  { name: "Spring Boot", icon: Server, color: "#6DB33F" },
  { name: "Hibernate", icon: Server, color: "#59666C" },
  { name: "Tailwind", icon: Sparkles, color: "#38B2AC" },
];

const repeatedSkills = [...skills, ...skills];

export default function Skills() {

  return (
    <motion.section
      id="skills"
      className="relative py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 drop-shadow-[0_0_18px_rgba(99,102,241,0.3)]">
            Compétences
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Technologies et outils clés utilisés pour construire des applications modernes.
          </p>
        </div>

        <div className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/70 px-3 py-6 glass">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background" />
            <div className="flex w-[200%] flex-nowrap gap-4 animate-marquee">
              {repeatedSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    className="min-w-[220px] flex-shrink-0 rounded-2xl border border-border bg-background/60 p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <span
                        className="grid h-14 w-14 place-items-center rounded-2xl"
                        style={{ background: skill.color + "22" }}
                      >
                        <Icon size={26} color={skill.color} />
                      </span>
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

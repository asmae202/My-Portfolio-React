import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationItems = [
  {
    title:
      "Licence (Faculté des sciences techniques Marrakech) : système informatique répartis",
    icon: GraduationCap,
  },
  {
    title:
      "DEUST (Faculté des sciences et techniques Marrakech) : Math, Informatique, Physique, Chimie (MIPC)",
    icon: GraduationCap,
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      className="relative py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 drop-shadow-[0_0_18px_rgba(124,58,237,0.3)]">
            Parcours
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Un aperçu des étapes marquantes qui ont façonné mon profil technique.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {educationItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="relative rounded-3xl border border-transparent bg-gradient-to-br from-purple-600/15 via-indigo-600/10 to-transparent p-px shadow-lg shadow-purple-500/10 transition-transform hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="rounded-3xl bg-card/70 p-6 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-500/20 text-purple-300">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

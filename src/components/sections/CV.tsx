import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CV() {
  return (
    <motion.section
      id="cv"
      className="relative py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="cv"
          description="Télécharge mon CV au format PDF ou consulte-le rapidement dans un nouvel onglet."
        >
          Mon CV et mes projets
        </SectionHeading>

        <div className="mt-8 grid gap-6 rounded-3xl border border-border bg-card/70 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">Mon CV professionnel</h3>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Retrouvez ma formation, mes projets et expériences détaillés dans ce CV.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/cv/Asmae_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Télécharger mon CV
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/cv/Asmae_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-muted"
              >
                <ExternalLink className="h-4 w-4" /> Voir mon CV
              </motion.a>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-background/60 p-4 md:p-5">
            <div className="mb-3 flex items-center gap-2">
              <h3 className="text-lg font-semibold text-foreground">Mes projets</h3>
              <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-300">GitHub</span>
            </div>
            <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              <li>
                <a
                  href="https://github.com/asmae202/Gestion_des_Incidents_Reseau"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg px-3 py-2 font-medium text-blue-300 transition hover:text-blue-100 hover:underline"
                >
                  Gestion des incidents réseaux
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/asmae202/Blog-full-stack-Laravel"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg px-3 py-2 font-medium text-blue-300 transition hover:text-blue-100 hover:underline"
                >
                  Blog full stack Laravel
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/asmae202/Reseau_Simulation"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg px-3 py-2 font-medium text-blue-300 transition hover:text-blue-100 hover:underline"
                >
                  Réseau simulation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/asmae202/Projet_springboot"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg px-3 py-2 font-medium text-blue-300 transition hover:text-blue-100 hover:underline"
                >
                  Projet Spring Boot
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

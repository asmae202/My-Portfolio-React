import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 drop-shadow-[0_0_18px_rgba(99,102,241,0.3)]">
            À propos
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Qui suis-je?
            <br />
            Je suis Asmae AABASSE, étudiante en informatique, passionnée par le développement logiciel et la création d’applications web. Je m’intéresse particulièrement au développement de sites web et d’applications modernes en utilisant des technologies de développement front-end et back-end.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card/70 p-8 shadow-xl glass">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Au cours de ma formation et de mes projets personnels, j’ai acquis des compétences dans la conception et le développement d’applications web complètes. Je travaille sur la création d’interfaces utilisateurs interactives et responsives côté front-end, ainsi que sur le développement de la logique métier et des API côté back-end. J’ai notamment travaillé avec des technologies comme Java, Spring Boot, les API REST, ainsi que différents outils et frameworks du développement web.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Je m’intéresse également à la conception d’architectures logicielles, à la gestion des bases de données et à l’optimisation des performances des applications. Mes projets m’ont permis de développer des compétences en résolution de problèmes, en organisation du code et en bonnes pratiques de développement.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Motivé par l’apprentissage continu, je cherche constamment à améliorer mes compétences techniques et à découvrir de nouvelles technologies. Mon objectif est de participer à des projets innovants et de contribuer à la création de solutions numériques utiles, performantes et bien conçues.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

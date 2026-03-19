import { useEffect, type ReactNode } from "react";
import NextHead from "next/head";
import { motion } from "framer-motion";
import { FaDatabase, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import {
  SiBootstrap,
  SiCss,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com", Icon: FaGithub },
  { label: "Email", href: "mailto:youremail@example.com", Icon: FiMail },
] as const;

const skills = [
  { name: "React", Icon: SiReact, color: "text-sky-500" },
  { name: "MySQL", Icon: SiMysql, color: "text-sky-600" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "text-violet-600" },
  { name: "HTML", Icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", Icon: SiCss, color: "text-blue-600" },
  { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500" },
  { name: "JEE", Icon: FaJava, color: "text-red-500" },
  { name: "Oracle", Icon: FaDatabase, color: "text-red-600" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "text-green-600" },
  { name: "Hibernate", Icon: SiHibernate, color: "text-amber-600" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "text-cyan-500" },
] as const;

const projects = [
  {
    title: "Plateforme de gestion (full-stack)",
    description:
      "Implémentation d’API REST, authentification/autorisation, validations côté serveur, pagination, et intégration front pour la consommation des endpoints.",
    tech: ["Spring Boot", "Hibernate", "Oracle", "React", "Tailwind"],
    repo: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Système de suivi & reporting",
    description:
      "Conception de la couche service, normalisation des modèles, requêtes SQL optimisées, et exposition d’indicateurs via endpoints dédiés.",
    tech: ["JEE", "MySQL", "Bootstrap", "JavaScript"],
    repo: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Application CRUD + recherche",
    description:
      "CRUD robuste avec filtres, tri, recherche, gestion d’erreurs, et composants UI réutilisables avec micro-interactions.",
    tech: ["React", "Tailwind", "JavaScript"],
    repo: "https://github.com",
    demo: "https://example.com",
  },
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative snap-start min-h-screen w-full px-6 py-24 md:px-10", className)}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-black/60 dark:text-white/70">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function DecorativeBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 -right-32 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl"
        animate={{ x: [0, -35, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function SkillsSlider() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[var(--background)] to-transparent" />

      <div className="flex gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex min-w-full shrink-0 animate-marquee gap-4 py-2">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/40"
            >
              <s.Icon className={cn("h-6 w-6", s.color)} />
              <span className="text-sm font-semibold tracking-tight">{s.name}</span>
            </div>
          ))}
        </div>
        <div className="flex min-w-full shrink-0 animate-marquee gap-4 py-2" aria-hidden>
          {skills.map((s) => (
            <div
              key={`dup-${s.name}`}
              className="group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/40"
            >
              <s.Icon className={cn("h-6 w-6", s.color)} />
              <span className="text-sm font-semibold tracking-tight">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CodeCard() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600/50 via-fuchsia-600/40 to-cyan-500/40 blur-xl"
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 backdrop-blur-xl">
        <div className="flex items-center gap-2 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs font-medium text-black/50 dark:text-white/60">
            portfolio.tsx
          </span>
        </div>
        <motion.pre
          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-black/90 p-4 text-xs leading-6 text-white/90 font-mono"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {`const sections = ["Home","A propos","Skills","Education","Projects","Contact"];

export function Portfolio() {
  return (
    <main className="snap-y snap-mandatory">
      {sections.map((id) => (
        <section key={id} id={id} className="min-h-screen snap-start" />
      ))}
    </main>
  );
}`}
        </motion.pre>
      </div>
    </motion.div>
  );
}

export function PortfolioPage() {
  useEffect(() => {
    void import("aos").then(({ default: aos }) => {
      aos.init({
        duration: 850,
        once: true,
        offset: 80,
        easing: "ease-out-cubic",
      });
    });
  }, []);

  return (
    <div className="relative">
      <NextHead>
        <title>Portfolio | Full-stack</title>
        <meta
          name="description"
          content="Portfolio moderne, interactif et responsive (Next.js, Tailwind, Framer Motion, Shadcn UI, AOS)."
        />
      </NextHead>

      <div className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--card)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="text-sm font-semibold tracking-tight hover:opacity-80"
          >
            Mon Portfolio
          </button>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {[
              ["home", "Home"],
              ["about", "A propos"],
              ["skills", "Skills"],
              ["education", "Education"],
              ["projects", "Projects"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToId(id)}
                className="text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white"
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-white/40 text-foreground transition hover:-translate-y-0.5 hover:bg-white/60 dark:bg-white/10 dark:hover:bg-white/15"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <main className="relative h-screen snap-y snap-mandatory overflow-y-auto pt-16">
        <DecorativeBlobs />

        <section id="home" className="relative snap-start min-h-screen px-6 py-24 md:px-10">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <p
                className="text-sm font-semibold tracking-[0.2em] text-black/60 dark:text-white/70"
                data-aos="fade-up"
              >
                HOME
              </p>
              <h1
                className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl"
                data-aos="fade-up"
                data-aos-delay="60"
              >
                Portfolio moderne & interactif
              </h1>
              <p
                className="mt-5 max-w-xl text-base leading-7 text-black/70 dark:text-white/70"
                data-aos="fade-up"
                data-aos-delay="110"
              >
                Développeur orienté produits, avec une approche propre sur l’architecture, l’API
                design, les performances et la qualité de code.
              </p>

              <div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <Button variant="gradient" size="lg" onClick={() => scrollToId("contact")}>
                  Contactez-moi <FiArrowRight className="h-5 w-5" />
                </Button>
                <a href="/cv.pdf" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="lg">
                    CV
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative" data-aos="zoom-in" data-aos-delay="120">
              <CodeCard />
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="A PROPOS" title="Qui je suis">
          <div className="grid gap-6 md:grid-cols-12">
            <Card className="md:col-span-7" data-aos="fade-up">
              <CardHeader>
                <CardTitle>Profil</CardTitle>
                <CardDescription>Une description concise, technique, et orientée valeur.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-7 text-black/70 dark:text-white/70">
                <p>
                  J’aime construire des applications web robustes, avec une séparation claire des
                  responsabilités, une gestion d’état maîtrisée, et une UX fluide grâce à des
                  micro-interactions (Framer Motion, AOS).
                </p>
                <p>
                  Côté back-end, je privilégie des API REST bien structurées, une couche service
                  testable, et des accès données optimisés (JEE/Spring Boot, Hibernate, SQL).
                </p>
              </CardContent>
            </Card>

            <div className="md:col-span-5 grid gap-6">
              <Card data-aos="fade-up" data-aos-delay="80">
                <CardHeader>
                  <CardTitle>Focus</CardTitle>
                  <CardDescription>Ce que je vise dans chaque projet.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="violet">API Design</Badge>
                  <Badge variant="cyan">Performance</Badge>
                  <Badge variant="amber">Qualité</Badge>
                  <Badge>Tests</Badge>
                  <Badge>DX</Badge>
                </CardContent>
              </Card>

              <Card data-aos="fade-up" data-aos-delay="120">
                <CardHeader>
                  <CardTitle>Stack</CardTitle>
                  <CardDescription>Front + back, au quotidien.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind", "Spring Boot", "Hibernate", "MySQL/Oracle"].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="SKILLS" title="Compétences & technologies" className="flex items-center">
          <div className="grid gap-8">
            <p className="max-w-2xl text-sm leading-7 text-black/70 dark:text-white/70" data-aos="fade-up">
              Un aperçu rapide des technologies que j’utilise. La liste défile horizontalement en continu, avec les couleurs/logos pour une lecture immédiate.
            </p>
            <div data-aos="fade-up" data-aos-delay="80">
              <SkillsSlider />
            </div>
          </div>
        </Section>

        <Section id="education" eyebrow="EDUCATION" title="Parcours">
          <div className="grid gap-6 md:grid-cols-2">
            <Card data-aos="fade-up">
              <CardHeader>
                <CardTitle>Licence</CardTitle>
                <CardDescription>Faculté des sciences techniques Marrakech</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-black/70 dark:text-white/70">
                système informatique répartis
              </CardContent>
            </Card>

            <Card data-aos="fade-up" data-aos-delay="80">
              <CardHeader>
                <CardTitle>DEUST</CardTitle>
                <CardDescription>Faculté des sciences et techniques Marrakech</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-black/70 dark:text-white/70">
                Math, Informatique, Physique, Chimie (MIPC)
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="projects" eyebrow="PROJECTS" title="Projets">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                data-aos="fade-up"
                data-aos-delay={idx * 70}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription>{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge
                          key={t}
                          variant={
                            t.includes("React") || t.includes("Tailwind")
                              ? "cyan"
                              : t.includes("Spring") || t.includes("Hibernate")
                                ? "violet"
                                : "default"
                          }
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center gap-3">
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        <Button variant="outline" size="sm">
                          Repo
                        </Button>
                      </a>
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <Button variant="secondary" size="sm">
                          Demo
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="CONTACT" title="On collabore ?">
          <div className="grid gap-8 md:grid-cols-12">
            <Card className="md:col-span-7" data-aos="fade-up">
              <CardHeader>
                <CardTitle>Envoyer un message</CardTitle>
                <CardDescription>Réponse rapide, échanges clairs, scope maîtrisé.</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    const name = String(data.get("name") ?? "");
                    const email = String(data.get("email") ?? "");
                    const message = String(data.get("message") ?? "");
                    const subject = encodeURIComponent(`Portfolio — message de ${name || "contact"}`);
                    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
                    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold tracking-wide text-black/60 dark:text-white/70">
                        Nom
                      </label>
                      <Input name="name" placeholder="Votre nom" required />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold tracking-wide text-black/60 dark:text-white/70">
                        Email
                      </label>
                      <Input name="email" type="email" placeholder="vous@exemple.com" required />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-xs font-semibold tracking-wide text-black/60 dark:text-white/70">
                      Message
                    </label>
                    <Textarea name="message" placeholder="Décrivez votre besoin..." required />
                  </div>

                  <div className="pt-1">
                    <Button variant="gradient" size="lg" type="submit" className="w-full sm:w-auto">
                      Envoyer message <FiArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="md:col-span-5 grid gap-6" data-aos="fade-up" data-aos-delay="80">
              <Card>
                <CardHeader>
                  <CardTitle>Infos</CardTitle>
                  <CardDescription>Email, localisation, et réseaux.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 text-sm text-black/70 dark:text-white/70">
                  <div className="flex items-center gap-3">
                    <FiMail className="h-5 w-5" />
                    <a className="hover:underline" href="mailto:youremail@example.com">
                      youremail@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMapPin className="h-5 w-5" />
                    <span>Marrakech, Maroc</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaGithub className="h-5 w-5" />
                    <a className="hover:underline" href="https://github.com" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLinkedinIn className="h-5 w-5" />
                    <a className="hover:underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}


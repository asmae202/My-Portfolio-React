import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.indigo.500/.28),transparent_60%)] blur-3xl animate-float-slow" />
        <div className="absolute -top-24 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.fuchsia.500/.20),transparent_60%)] blur-3xl animate-drift" />
        <div className="absolute top-32 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.cyan.500/.18),transparent_60%)] blur-3xl animate-drift" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,theme(colors.background),theme(colors.background))]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-12">
        <motion.div
          className="space-y-6 md:col-span-7"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            <motion.span
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="text-4xl"
                animate={{ rotate: [0, 16, -12, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                👋
              </motion.span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                Bonjour,
              </motion.span>
            </motion.span>
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 drop-shadow-[0_0_18px_rgba(99,102,241,0.3)]"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            >
              je suis <span className="text-white">Asmae AABASSE</span>
            </motion.span>
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
            >
              Étudiante en système informatique répartis
            </motion.span>
          </h1>

          <motion.p
            className="text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
          >
            Je conçois des expériences web fluides et modernes avec une attention
            particulière pour la qualité, la performance et l’accessibilité.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: "easeOut" }}
          >
            <Button asChild>
              <a href="#contact" className="bg-primary text-primary-foreground">
                Contact
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/cv.pdf" target="_blank" rel="noreferrer">
                CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: "easeOut" }}
          >
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground hover:scale-105"
              href="mailto:a.asmae8765@gmail.com"
            >
              <Mail className="h-4 w-4" />
              a.asmae8765@gmail.com
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground hover:scale-105"
              href="https://github.com/asmae202"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground hover:scale-105"
              href="https://www.linkedin.com/in/asmae-a-"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-5 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="w-full max-w-md"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          >
            <DotLottieReact
              src="https://lottie.host/524cc776-9a1c-45ff-9733-7f778c11b82e/35rB9slP4g.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

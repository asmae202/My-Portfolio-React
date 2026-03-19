// src/pages/Home.tsx
import { Helmet } from "react-helmet-async";

import About from "@/components/sections/About";
import CV from "@/components/sections/CV";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Asmae AABASSE · Portfolio</title>
        <meta
          name="description"
          content="Portfolio professionnel d'Asmae AABASSE — étudiante en système informatique répartis spécialisée en développement web et architecture logicielle."
        />
      </Helmet>

      <Hero />

      <About />
      <Skills />
      <Projects />
      <CV />
      <Education />
      <Contact />
    </>
  );
}
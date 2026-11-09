import { Navbar } from "../components/Navbar";
import { Section } from "../components/Section";
import { TitleSection } from "../components/TitleSection";
import Footer from "../components/Footer";
import { About } from "./About";
import { Experience } from "./Experience";
import { Technologies } from "./Technologies";
import { Projects } from "./Projects";
import Contact from "./Contact";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

type PortfolioProps = {
  onBack: () => void;
};

export function Portfolio({ onBack }: PortfolioProps) {
  const { language } = useContext(LanguageContext);
  const isSpanish = language === "es-ES";

  return (
    <div className="relative min-h-screen bg-day dark:bg-night bg-grid font-sans">
      <Navbar />
      <div className="relative overflow-hidden z-10">
        <span
          className="glow glow-drift -top-44 -left-40 w-[560px] h-[560px]"
          aria-hidden="true"
          style={{ background: "radial-gradient(closest-side, rgba(190,49,68,.19), transparent 72%)" }}
        ></span>
        <span
          className="glow glow-drift-rev top-[460px] -right-56 w-[640px] h-[640px]"
          aria-hidden="true"
          style={{ background: "radial-gradient(closest-side, rgba(224,86,107,.08), transparent 72%)" }}
        ></span>
        <span
          className="glow glow-drift-slow bottom-64 -left-52 w-[520px] h-[520px]"
          aria-hidden="true"
          style={{ background: "radial-gradient(closest-side, rgba(190,49,68,.12), transparent 72%)" }}
        ></span>

        <main className="px-4">
          <Section id="presentation" className="py-16 md:py-24">
            <About />
          </Section>
          <div className="space-y-24 pb-10">
            <Section id="experience">
              <TitleSection num="01.">{isSpanish ? "Experiencia" : "Experience"}</TitleSection>
              <Experience />
            </Section>
            <Section id="technologies">
              <TitleSection num="02.">{isSpanish ? "Tecnologías" : "Technologies"}</TitleSection>
              <p className="mb-8 -mt-2 text-[15px] text-day-mute dark:text-night-mute max-w-xl">
                {isSpanish
                  ? "Herramientas con las que construyo productos a diario, del frontend a la base de datos."
                  : "Tools I build products with every day, from frontend to database."}
              </p>
              <Technologies />
            </Section>
            <Section id="projects">
              <TitleSection num="03.">{isSpanish ? "Proyectos" : "Projects"}</TitleSection>
              <Projects />
            </Section>
            <Section id="contact">
              <Contact />
            </Section>
          </div>
        </main>
        <Footer onBack={onBack} />
      </div>
    </div>
  );
}

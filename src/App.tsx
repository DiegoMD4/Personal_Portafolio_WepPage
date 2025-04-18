import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
/* import { ThemeButtons } from "./components/ThemeButtons"; */
import { TitleSection } from "./components/TitleSection";
import { About } from "./page/About";
import { Experience } from "./page/Experience";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Projects } from "./page/Projects";
import useScrollEffects from "./hooks/useScroll";
import { Skills } from "./page/Skills";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

function App() {
  useScrollEffects();
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Navbar></Navbar>
      <main className="px-4">
        <Section id="presentation" className="py-16 md:py-36">
          <About />
        </Section>
        <div className="space-y-24">
          <Section id="experience">
            <TitleSection>
              <HiOutlineBriefcase className="size-8" />
              {language === "es-ES" ? "Experiencia" : "Experience"}
            </TitleSection>
            <Experience />
            <h3 className="mt-10 flex items-center mb-6 text-xl font-semibold gap-x-3 text-black/80 dark:text-white">
              {language === "es-ES"
                ? "Experiencia en las siguientes tecnologías: "
                : "Experience in the following technologies:"}
            </h3>
            <div className="mt-8">
              <Skills />
            </div>
          </Section>
          <Section id="projects">
            <TitleSection>
              <HiOutlineBriefcase className="size-8" />
              {language === "es-ES" ? "Proyectos" : "Projects"}
            </TitleSection>
            <Projects />
          </Section>
        </div>
      </main>
    </>
  );
}

export default App;

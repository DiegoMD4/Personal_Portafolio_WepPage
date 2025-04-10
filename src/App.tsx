import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { ThemeButtons } from "./components/ThemeButtons";
import { TitleSection } from "./components/TitleSection";
import { About } from "./page/About";
import { Experience } from "./page/Experience";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Projects } from "./page/Projects";
import useScrollEffects from "./hooks/useScroll";


function App() {
  useScrollEffects()
  return (
    <>
      <Navbar>
        <ThemeButtons />
      </Navbar>
      <main className="px-4">
        <Section id="presentation" className="py-16 md:py-36">
          <About />
        </Section>
        <div className="space-y-24">
          <Section id="experience">
            <TitleSection>
              <HiOutlineBriefcase className="size-8" />
              Experience
            </TitleSection>
            <Experience />
          </Section>
          <Section id="projects">
            <TitleSection>
              <HiOutlineBriefcase className="size-8" />
              Projects
            </TitleSection>
            <Projects />
          </Section>
        </div>
      </main>
    </>
  );
}

export default App;

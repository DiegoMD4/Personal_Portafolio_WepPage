import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getProjects } from "../lib/adminStore";

export function Projects() {
  const { language } = useContext(LanguageContext);
  const isSpanish = language === "es-ES";
  const projects = getProjects();

  return (
    <div className="grid md:grid-cols-2 gap-7">
      {projects.map((project) => (
        <article
          key={project.id}
          className="group flex flex-col bg-white dark:bg-night-card border border-day-line dark:border-night-line rounded-[18px] overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-xl dark:hover:border-[#4A3338] dark:hover:shadow-[0_18px_44px_rgba(0,0,0,.5)]"
        >
          <div className="h-56 overflow-hidden border-b border-day-line dark:border-night-line">
            <img
              src={project.image}
              alt={isSpanish ? `Captura de ${project.title_es}` : `Screenshot of ${project.title_en}`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-col gap-3 p-6 flex-1">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-accent dark:text-accent-bright border border-accent/30 dark:border-[#4A3338] px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="m-0 text-xl font-bold text-day-text dark:text-night-text">
              {isSpanish ? project.title_es : project.title_en}
            </h3>
            <p className="m-0 text-sm leading-relaxed text-day-body dark:text-night-body">
              {isSpanish ? project.desc_es : project.desc_en}
            </p>
            <footer className="flex gap-4 mt-auto pt-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent dark:text-accent-bright hover:underline"
                >
                  Demo ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-day-body dark:text-night-body hover:text-accent dark:hover:text-accent-bright"
                >
                  GitHub ↗
                </a>
              )}
            </footer>
          </div>
        </article>
      ))}
    </div>
  );
}

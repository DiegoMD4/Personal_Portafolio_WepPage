import { NextJS } from "../components/icons/NextJs";
import { LinkButton } from "../components/icons/LinkButton";
import { GitHub } from "../components/icons/GitHub";
import { Link } from "../components/icons/Link";
import { TailwindCSS } from "../components/icons/Tailwind";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Nodejs from "../components/icons/Nodejs";
import { MicrosoftSQLServer } from "../components/icons/StackIcons";
const TAGS = {
  NEXT: {
    name: "Next.js",
    className: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    className: "bg-[#003159] text-white",
    icon: TailwindCSS,
  },
  NODE: {
    name: "Node Js",
    className: "bg-lime-400 text-white",
    icon: Nodejs,
  },
  SQLServer: {
    name: "SQL Server",
    className: "bg-red-400 text-white",
    icon: MicrosoftSQLServer,
  },
};
const enProjectDescription = [
  {
    title: "SDRP - Programmatic Regulation Direction System",
    description:
      "This system facilitates strategic decision-making, accountability, and the alignment of institutional programs with governmental objectives.",
    link: "https://drp-theta.vercel.app/login",
    image: "assets/417shots_so.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "SUISS - Unified Social Programs Information System",
    description: `This platform centralizes all relevant information on social programs, integrating data from multiple sources to provide a unified and efficient experience.`,
    link: "https://suiss.vercel.app/landing",
    image: "assets/340shots_so.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },

  {
    title: "CEI Website",
    description: `Website created for the Center for Entrepreneurship and Innovation at CEUTEC. I contributed as a backend developer alongside my classmates in this university project.`,
    link: "https://suiss.vercel.app/landing",
    github: "https://github.com/MGeovany/cei-web-portal",
    image: "assets/CEI-WEB.jpg",
    tags: [TAGS.NODE, TAGS.SQLServer],
  },
];
const esProjectDescription = [
  {
    title: "SDRP - Sistema Dirección de Regulación Programática",
    description:
      "Este sistema facilita la toma de decisiones estratégicas, la rendición de cuentas, y el alineamiento de los programas institucionales con los objetivos gubernamentales.",
    link: "https://drp-theta.vercel.app/login",
    image: "assets/417shots_so.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "SUISS - Sistema Unificado de Información de Programas Sociales",
    description: `Esta plataforma centraliza toda la información relevante sobre programas sociales, integrando datos de múltiples fuentes para ofrecer una experiencia unificada y eficiente.`,
    link: "https://suiss.vercel.app/landing",
    image: "assets/340shots_so.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "Sitio web de CEI",
    description: `Sitio web creado para el Centro de Emprendimiento e Innovación en CEUTEC. Contribuí como desarrollador backend junto con mis compañeros en este proyecto universitario.`,
    image: "assets/CEI-WEB.jpg",
    github: "https://github.com/MGeovany/cei-web-portal",
    tags: [TAGS.NODE, TAGS.SQLServer],
  },
];
export function Projects() {
  const { language } = useContext(LanguageContext);
  const PROJECTS =
    language === "es-ES" ? esProjectDescription : enProjectDescription;
  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map(({ image, title, description, tags, github, link }) => (
        <article
          key={title}
          className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
        >
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <img
                alt="project image"
                className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                loading="lazy"
                src={image}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <div className="flex flex-wrap mt-2">
              <ul className="flex flex-row mb-2 gap-x-2">
                {tags.map((tag) => (
                  <li key={tag.name}>
                    <span
                      className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2 `}
                    >
                      <tag.icon styles="size-4" />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 text-gray-700 dark:text-gray-400">
                {description}
              </div>
              <footer className="flex items-end justify-start mt-4 gap-x-4">
                {github && (
                  <LinkButton href={github}>
                    <GitHub styles="size-6" />
                    Code
                  </LinkButton>
                )}
                {link && (
                  <LinkButton href={link}>
                    <Link styles="size-4" />
                    Preview
                  </LinkButton>
                )}
              </footer>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

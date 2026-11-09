import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import {
  React as ReactLogo,
  TypeScript,
  Firebase,
  MySQL,
  MicrosoftSQLServer,
} from "../components/icons/StackIcons";
import { NextJS } from "../components/icons/NextJs";
import Nodejs from "../components/icons/Nodejs";
import TailwindCSS from "../components/icons/Tailwind";

const TECHS = [
  { name: "React", icon: <ReactLogo className="w-7 h-7" />, es: "Frontend", en: "Frontend" },
  { name: "TypeScript", icon: <TypeScript className="w-[26px] h-[26px]" />, es: "Lenguaje", en: "Language" },
  { name: "Next.js", icon: <NextJS styles="w-7 h-7" />, es: "Frontend · SSR", en: "Frontend · SSR" },
  { name: "Tailwind CSS", icon: <TailwindCSS className="w-7 h-7" />, es: "Estilos", en: "Styling" },
  { name: "Node.js", icon: <Nodejs className="w-[26px] h-[26px]" />, es: "Backend", en: "Backend" },
  { name: "Firebase", icon: <Firebase className="w-[26px] h-[26px]" />, es: "Backend · Cloud", en: "Backend · Cloud" },
  { name: "MySQL", icon: <MySQL className="w-7 h-7 text-[#00758F]" />, es: "Base de datos", en: "Database" },
  { name: "SQL Server", icon: <MicrosoftSQLServer className="w-7 h-7" />, es: "Base de datos", en: "Database" },
];

export function Technologies() {
  const { language } = useContext(LanguageContext);
  const isSpanish = language === "es-ES";

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {TECHS.map((tech) => (
        <div
          key={tech.name}
          className="relative overflow-hidden flex items-center gap-3.5 bg-white dark:bg-night-card border border-day-line dark:border-night-line rounded-[14px] px-5 py-4 transition-all hover:-translate-y-1 hover:border-accent/60"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent to-accent-bright"
          ></span>
          <span className="w-[46px] h-[46px] rounded-[11px] bg-[#F6EFF0] border border-day-line dark:border-transparent flex items-center justify-center shrink-0">
            {tech.icon}
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="text-[15.5px] font-bold text-day-text dark:text-night-text">{tech.name}</span>
            <span className="font-mono text-[11.5px] text-day-mute dark:text-night-mute">
              {isSpanish ? tech.es : tech.en}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

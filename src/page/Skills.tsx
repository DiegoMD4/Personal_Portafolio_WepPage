import {
  CSS,
  Expressjs,
  Git,
  HTML5,
  JavaScript,
  MongoDB,
  Nodejs,
  React,
  TypeScript,
  Nextjs,
  TailwindCSS,
  GitHub,
  MicrosoftSQLServer,
} from "../components/icons/StackIcons";

export function Skills() {
  // 1. Unificación en un solo origen de datos estructurado
  const skillsData = [
    { name: "JavaScript", Icon: JavaScript },
    { name: "React", Icon: React },
    { name: "SQLServer", Icon: MicrosoftSQLServer },
    { name: "Git", Icon: Git },
    { name: "GitHub", Icon: GitHub },
    { name: "Nodejs", Icon: Nodejs },
    { name: "Expressjs", Icon: Expressjs },
    { name: "MongoDB", Icon: MongoDB },
    { name: "HTML5", Icon: HTML5 },
    { name: "CSS", Icon: CSS },
    { name: "TypeScript", Icon: TypeScript },
    { name: "Nextjs", Icon: Nextjs },
    { name: "TailwindCSS", Icon: TailwindCSS },
  ];

  return (
    <div className="flex gap-4 sm:gap-6 flex-wrap justify-center max-w-3xl mx-auto py-4">
      {skillsData.map(({ name, Icon }, index) => (
        <div
          key={index}
          // 2. Agregados bordes interactivos basados en tu paleta (Rojo en Light / Amarillo en Dark)
          className="bg-white dark:bg-gray-800 shadow-md border border-transparent hover:border-[#be3144] dark:hover:border-yellow-400 rounded-2xl w-24 h-24 flex flex-col gap-y-2 items-center justify-center transition-all duration-300 hover:scale-105 group select-none"
        >
          {/* 3. El icono escala sutilmente al hacer hover sobre la tarjeta */}
          <Icon className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />

          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium transition-colors duration-200 group-hover:text-gray-900 dark:group-hover:text-white">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

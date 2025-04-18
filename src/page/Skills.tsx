import {
  CSS,
  Expressjs,
  Git,
  HTML5,
  JavaScript,
  MongoDB,
  MySQL,
  Nodejs,
  React,
  TypeScript,
  Nextjs,
  TailwindCSS,
  GitHub,
} from "../components/icons/StackIcons";

export function Skills() {
  const Logos = [
    JavaScript,
    React,
    MySQL,
    Git,
    GitHub,
    Nodejs,
    Expressjs,
    MongoDB,
    HTML5,
    CSS,
    TypeScript,
    Nextjs,
    TailwindCSS,
  ];
  const LogosNames = [
    "JavaScript",
    "React",
    "MySQL",
    "Git",
    "GitHub",
    "Nodejs",
    "Expressjs",
    "MongoDB",
    "HTML5",
    "CSS",
    "TypeScript",
    "Nextjs",
    "TailwindCSS",
  ];
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {Logos.map((Logo, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 shadow-md rounded-2xl w-24 h-24 flex  flex-col gap-y-2 items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <Logo className="w-10 h-10" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {LogosNames[index]}
          </span>
        </div>
      ))}
    </div>
  );
}

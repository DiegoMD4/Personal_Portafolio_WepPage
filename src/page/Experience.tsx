import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import text from "../json/experience.json";

interface ExperienceItemProps {
  title: string;
  company: string;
  description: string;
  link?: string;
  date: string;
  current: boolean;
}

function ExperienceItem({ title, company, description, link, date, current }: ExperienceItemProps) {
  return (
    <article className="relative pl-9 pb-12 last:pb-2">
      <span
        className={`absolute -left-2 top-1 w-3.5 h-3.5 rounded-full ring-4 ring-day dark:ring-night ${
          current ? "bg-accent" : "bg-day-line dark:bg-[#4A3338]"
        }`}
      ></span>
      <p className="m-0 mb-1.5 font-mono text-[13px] text-day-mute dark:text-night-mute">{date}</p>
      <h3 className="m-0 text-xl font-bold text-day-text dark:text-night-text">
        {title} ·{" "}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent dark:text-accent-bright hover:underline"
          >
            {company}
          </a>
        ) : (
          <span className="font-semibold text-day-body dark:text-night-body">{company}</span>
        )}
      </h3>
      <p className="mt-2 mb-0 max-w-3xl text-[15.5px] leading-7 text-day-body dark:text-night-body">{description}</p>
    </article>
  );
}

export function Experience() {
  const { language } = useContext(LanguageContext);
  const EXPERIENCE = language === "es-ES" ? text.es : text.en;
  return (
    <div className="border-l-2 border-day-line dark:border-night-line ml-2">
      {EXPERIENCE.map((experience, index) => (
        <ExperienceItem key={experience.company} {...experience} current={index === 0} />
      ))}
    </div>
  );
}

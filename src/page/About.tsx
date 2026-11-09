import { useContext } from "react";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiGithub, FiDownload } from "react-icons/fi";
import text from "../json/presentation.json";
import { LanguageContext } from "../context/LanguageContext";
import { getCvHref } from "../lib/adminStore";

const LINKEDIN_URL = "https://linkedin.com/in/diego-montoya1701";
const GITHUB_URL = "https://github.com/DiegoMD4";
const EMAIL_URL = "mailto:diego.montoya1701@outlook.com";

export function About() {
  const { language } = useContext(LanguageContext);
  const isSpanish = language === "es-ES";
  const presentationText = isSpanish ? text.es : text.en;
  const cv = getCvHref(isSpanish ? "es" : "en");

  const socialClasses =
    "w-[42px] h-[42px] rounded-xl border border-day-line dark:border-night-line bg-white dark:bg-transparent flex items-center justify-center text-day-body dark:text-night-body transition-colors hover:border-accent hover:text-accent dark:hover:text-accent-bright";

  return (
    <div className="flex flex-wrap items-center gap-12">
      <div className="flex-[999_1_480px] min-w-0 flex flex-col gap-5">
        <span className="self-start inline-flex items-center gap-2 border border-[#BFE3CC] dark:border-[#2E4A38] bg-[#EDF8F1] dark:bg-[#142019] text-[#1F7A45] dark:text-[#7FD6A0] text-[13px] font-semibold px-3.5 py-1.5 rounded-full">
          <span className="avail-dot w-2 h-2 rounded-full bg-[#2FA45C] dark:bg-[#52C47E] inline-block"></span>
          {presentationText.available}
        </span>

        <h1 className="m-0 font-display text-5xl md:text-[62px] leading-[1.05] font-bold text-day-text dark:text-night-text">
          {presentationText.greeting} <span className="grad-name">Diego</span>
        </h1>

        <p className="m-0 max-w-xl text-[17px] leading-relaxed text-day-body dark:text-night-body [&>strong]:text-accent dark:[&>strong]:text-accent-bright [&>strong]:font-semibold">
          {presentationText.description[0]} <strong>{presentationText.description[1]}</strong>{" "}
          {presentationText.description[2]}
        </p>

        <div className="flex flex-wrap gap-3.5 mt-2">
          <a
            href={cv.href}
            download={cv.download}
            className="inline-flex items-center gap-2.5 bg-accent text-white font-semibold text-[15px] px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(190,49,68,.4)]"
          >
            <FiDownload />
            {presentationText.downloadCv}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 border border-day-line dark:border-[#4A3338] bg-white dark:bg-transparent text-day-text dark:text-night-text font-semibold text-[15px] px-6 py-3 rounded-xl transition-colors hover:border-accent-bright"
          >
            {presentationText.viewProjects}
          </a>
        </div>

        <div className="flex gap-2.5 mt-1.5">
          <a className={socialClasses} href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub className="text-lg" />
          </a>
          <a
            className={socialClasses}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <CiLinkedin className="text-xl" />
          </a>
          <a className={socialClasses} href={EMAIL_URL} aria-label={presentationText.email}>
            <MdOutlineMailOutline className="text-lg" />
          </a>
        </div>
      </div>

      <div className="flex-[1_1_300px] min-w-0 flex justify-center">
        <div className="relative w-[260px] h-[260px] md:w-[290px] md:h-[290px]">
          <div className="absolute -inset-3.5 rounded-[36px] border border-day-line dark:border-[#4A3338] bg-white dark:bg-transparent -rotate-[4deg]"></div>
          <div className="absolute inset-0 rounded-[30px] overflow-hidden border-2 border-accent shadow-[0_22px_60px_rgba(190,49,68,.25)]">
            <img src="assets/foto.webp" alt="Foto de Diego Montoya" className="w-full h-full object-cover block" />
          </div>
          <span className="absolute -bottom-4 -right-4 bg-white dark:bg-night-soft border border-day-line dark:border-night-line rounded-xl px-3.5 py-2 font-mono text-[12.5px] text-accent dark:text-accent-bright shadow-md">
            &lt;fullstack /&gt;
          </span>
        </div>
      </div>
    </div>
  );
}

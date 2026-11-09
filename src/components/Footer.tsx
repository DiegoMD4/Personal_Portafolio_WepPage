import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { DEFAULT_CVS, type CvLang } from "../data/cvs";

type FooterProps = {
  onBack?: () => void;
};

export default function Footer({ onBack }: FooterProps) {
  const { language } = useContext(LanguageContext);
  const isSpanish = language === "es-ES";
  const onCv = (lang: CvLang) => async (e: React.MouseEvent) => {
    e.preventDefault();
    const { downloadCv } = await import("../lib/adminStore");
    downloadCv(lang);
  };

  return (
    <footer className="border-t border-day-line/70 dark:border-night-line2">
      <div className="max-w-5xl mx-auto px-6 py-7 flex flex-wrap items-center justify-between gap-3">
        <p className="m-0 text-[13.5px] text-day-mute dark:text-night-mute">
          © {new Date().getFullYear()} Diego Montoya.{" "}
          {isSpanish ? "Hecho con React y mucho café." : "Built with React and lots of coffee."}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={DEFAULT_CVS.es.href}
            download={DEFAULT_CVS.es.download}
            onClick={onCv("es")}
            className="text-[13.5px] text-day-mute dark:text-night-mute hover:text-accent"
          >
            CV Español
          </a>
          <a
            href={DEFAULT_CVS.en.href}
            download={DEFAULT_CVS.en.download}
            onClick={onCv("en")}
            className="text-[13.5px] text-day-mute dark:text-night-mute hover:text-accent"
          >
            CV English
          </a>
          <a
            href="https://github.com/DiegoMD4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] text-day-mute dark:text-night-mute hover:text-accent"
          >
            GitHub
          </a>
          {onBack && (
            <button
              onClick={onBack}
              className="text-[13.5px] text-day-mute dark:text-night-mute hover:text-accent cursor-pointer"
            >
              ← {isSpanish ? "Volver a la entrada" : "Back to intro"}
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}

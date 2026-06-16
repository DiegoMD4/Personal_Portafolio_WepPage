import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const isSpanish = language === "es-ES";

  return (
    <footer className="w-full flex flex-col items-center gap-y-4 pb-14 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {/* CV Español */}
        <a
          href="/assets/Diego_Montoya_CV_Professional_2026.pdf"
          download="Diego_Montoya_Desarrollador_FullStack"
          className={`flex items-center gap-x-2 px-5 py-2.5 font-medium rounded-lg text-sm transition-all duration-200 ${
            isSpanish
              ? "text-white bg-[#be3144] dark:bg-yellow-500 dark:text-gray-900 shadow-sm hover:opacity-90"
              : "text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <span>{isSpanish ? "Descargar currículum" : "Resume (Spanish)"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>

        {/* CV Inglés */}
        <a
          href="/assets/Diego_Montoya_CV_Professional_2026_ENG.pdf"
          download="Diego_Montoya_FullStack_Developer"
          className={`flex items-center gap-x-2 px-5 py-2.5 font-medium rounded-lg text-sm transition-all duration-200 ${
            !isSpanish
              ? "text-white bg-[#be3144] dark:bg-yellow-500 dark:text-gray-900 shadow-sm hover:opacity-90"
              : "text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <span>{!isSpanish ? "Download resume" : "Currículum (Inglés)"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>
      </div>

      {/* Footer Copyright Pequeño opcional para darle cierre formal a la app */}
      <p className="text-xs text-gray-400 dark:text-gray-500">
        © {new Date().getFullYear()} Diego Montoya. All rights reserved.
      </p>
    </footer>
  );
}

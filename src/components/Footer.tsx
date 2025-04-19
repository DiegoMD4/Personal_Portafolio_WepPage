import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  return (
    <footer className="footer my-20">
      <div className="button-wrapper hover:cursor-pointer">
        <div
          className="btn-1"
          data-tooltip={`${
            language === "en-US"
              ? "Cambia el idioma para descargarlo en Español"
              : "Change language to download it in English"
          }`}
        >
          <div className="btn-1-wrapper">
            <div className="text">
              {language === "en-US"
                ? "Download resume"
                : "Descargar curriculum"}
            </div>
            <span className="icon-download">
              <a
                href="/assets/DiegoMontoya_CV_2025.pdf"
                download={
                  language ? "Diego_Montoya_esp_cv" : "Diego_Montoya_en_cv"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

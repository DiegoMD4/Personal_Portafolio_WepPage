import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { Badge } from "../components/Badge";
import text from "../json/presentation.json";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function About() {
  const { language } = useContext(LanguageContext);
  const presentationText = language === "es-ES" ? text.es : text.en;

  // Clave para evitar repetir y equivocarse en las URLs
  const linkedinUrl = "https://linkedin.com/in/diego-montoya1701";
  const emailUrl = "mailto:diego.montoya1701@outlook.com"; // Corregida la 'a' de montoya

  return (
    <div className="max-w-xl">
      <div className="flex gap-4 mb-4">
        <img
          className="rounded-full shadow-lg size-16 object-cover"
          src="assets/foto.webp"
          alt="Diego Montoya"
        />
        <a
          className="flex items-center transition md:justify-center md:hover:scale-105"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge>{presentationText.available}</Badge>
        </a>
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
        {presentationText.title}
      </h1>

      <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-400 [&>strong]:text-[#be3144] [&>strong]:font-semibold dark:text-gray-300 leading-relaxed">
        {presentationText.description[0]}{" "}
        <strong>{presentationText.description[1]}</strong>{" "}
        {presentationText.description[2]}
      </p>

      <footer className="flex flex-wrap gap-4 mt-8">
        <a
          className="inline-flex items-center justify-center gap-2 px-4 py-1.5 text-gray-700 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 text-sm font-medium transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-[#be3144] dark:hover:border-yellow-400"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin className="text-lg text-[#be3144] dark:text-yellow-400" />
          LinkedIn
        </a>

        <a
          className="inline-flex items-center justify-center gap-2 px-4 py-1.5 text-gray-700 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 text-sm font-medium transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-[#be3144] dark:hover:border-yellow-400"
          href={emailUrl}
        >
          <MdOutlineMailOutline className="text-lg text-[#be3144] dark:text-yellow-400" />
          {presentationText.email}
        </a>
      </footer>
    </div>
  );
}

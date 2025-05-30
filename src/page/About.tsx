import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { Badge } from "../components/Badge";
import text from "../json/presentation.json";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function About() {
  const { language } = useContext(LanguageContext);
  const presentationText = language === "es-ES" ? text.es : text.en;
  return (
    <div className="max-w-xl">
      <div className="flex gap-4 mb-4">
        <img
          className="rounded-full shadow-lg size-16"
          src="assets/foto.webp"
          alt="Diego Montoya"
        />
        <a
          className="flex items-center transition md:justify-center md:hover:scale-105"
          href="https://linkedin.com/in/diego-montoya-1546aa218"
          target="_blank"
        >
          <Badge>{presentationText.available}</Badge>
        </a>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
        {presentationText.title}
      </h1>
      <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-400 [&>strong]:text-[#be3144] [&>strong]:font-semibold dark:text-gray-300">
        {presentationText.description[0]}{" "}
        <strong>{presentationText.description[1]}</strong>{" "}
        {presentationText.description[2]}
      </p>
      <footer className="flex flex-wrap gap-4 mt-8">
        <a
          className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
          href="https://linkedin.com/in/diego-montoya1701"
          target="_blank"
        >
          <CiLinkedin />
          LinkedIn
        </a>
        <a
          className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
          href="mailto:diego.montoy1701@outlook.com"
        >
          <MdOutlineMailOutline />
          {presentationText.email}
        </a>
      </footer>
    </div>
  );
}

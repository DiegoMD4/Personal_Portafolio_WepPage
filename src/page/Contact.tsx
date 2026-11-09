import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import text from "../json/contact.json";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const WHATSAPP_URL = "https://wa.me/50495069323";
const EMAIL_URL = "mailto:diego.montoya1701@outlook.com";

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const isSpanish = language === "es-ES";
  const contactText = isSpanish ? text.es : text.en;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-day-line dark:border-night-line bg-white dark:bg-night-card px-8 py-14 md:py-16 text-center flex flex-col items-center gap-4">
      <span
        aria-hidden="true"
        className="absolute -top-28 left-1/2 -ml-[200px] w-[400px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(190,49,68,.22), transparent)" }}
      ></span>

      <span className="font-mono text-[15px] text-accent2">04. {isSpanish ? "Contacto" : "Contact"}</span>
      <h2 className="m-0 font-display text-3xl md:text-[40px] font-bold max-w-2xl text-day-text dark:text-night-text">
        {contactText.text1}
      </h2>
      <p className="m-0 max-w-xl text-base leading-relaxed text-day-body dark:text-night-body">{contactText.text2}</p>

      <div className="flex flex-wrap justify-center gap-3.5 mt-2">
        <a
          href={EMAIL_URL}
          className="inline-flex items-center gap-2.5 bg-accent text-white font-semibold text-[15.5px] px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(190,49,68,.4)]"
        >
          <MdOutlineMailOutline className="text-lg" />
          {isSpanish ? "Enviar correo" : "Send email"}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 border border-[#BFE3CC] dark:border-[#2E4A38] bg-[#EDF8F1] dark:bg-[#142019] text-[#1F7A45] dark:text-[#7FD6A0] font-semibold text-[15.5px] px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(82,196,126,.25)]"
        >
          <FaWhatsapp className="text-lg" />
          {isSpanish ? "Escríbeme" : "Message me"}
        </a>
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import useScrollEffects from "../hooks/useScroll";
import navbarText from "../json/navbar.json";
import { IoMoonOutline, IoSunnyOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";

function LanguageToggle() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const isSpanish = language === "es-ES";
  return (
    <button
      onClick={changeLanguage}
      aria-label={isSpanish ? "Switch to English" : "Cambiar a español"}
      className="flex rounded-full border border-day-line dark:border-night-line overflow-hidden text-[12.5px] font-semibold bg-white/60 dark:bg-transparent"
    >
      <span
        className={
          isSpanish ? "px-3 py-1.5 bg-accent text-white" : "px-3 py-1.5 text-day-mute dark:text-night-mute"
        }
      >
        ES
      </span>
      <span
        className={
          !isSpanish ? "px-3 py-1.5 bg-accent text-white" : "px-3 py-1.5 text-day-mute dark:text-night-mute"
        }
      >
        EN
      </span>
    </button>
  );
}

function ThemeToggle() {
  const { theme, setLight, setDark } = useContext(ThemeContext);
  return (
    <button
      onClick={theme === "dark" ? setLight : setDark}
      aria-label={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className="w-[34px] h-[34px] rounded-full border border-day-line dark:border-night-line bg-white dark:bg-night-soft flex items-center justify-center text-day-text dark:text-night-text"
    >
      {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  );
}

export function Navbar() {
  const activeSection = useScrollEffects();
  const { language } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const NAVBAR_LINKS = language === "es-ES" ? navbarText.es : navbarText.en;

  const linkClasses = (id: string) =>
    `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      activeSection === id.substring(1)
        ? "text-accent bg-accent/10"
        : "text-day-body dark:text-night-body hover:text-accent dark:hover:text-accent-bright hover:bg-day-line/30 dark:hover:bg-night-soft"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-day/60 dark:bg-night/55 backdrop-blur-xl border-b border-day-line/70 dark:border-night-line/40">
      <nav className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3 px-6 py-3">
        <a href="#presentation" className="font-display font-bold text-[21px] text-day-text dark:text-night-text">
          DM<span className="text-accent">/</span>
        </a>

        <div className="hidden md:flex flex-wrap items-center gap-1">
          {NAVBAR_LINKS.map((item) => (
            <a key={item.id} href={item.id} className={linkClasses(item.id)}>
              {item.text}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label={language === "es-ES" ? "Abrir menú" : "Open menu"}
            className="md:hidden w-[38px] h-[38px] rounded-[10px] border border-day-line dark:border-night-line bg-white/70 dark:bg-night-soft/70 flex items-center justify-center text-day-text dark:text-night-text"
          >
            <IoMenuOutline className="text-lg" />
          </button>
        </div>
      </nav>

      {menuOpen &&
        createPortal(
          <>
          <button
            className="overlay-in fixed inset-0 z-[60] bg-black/50 cursor-pointer"
            aria-label={language === "es-ES" ? "Cerrar menú" : "Close menu"}
            onClick={() => setMenuOpen(false)}
          ></button>
          <aside className="sidebar-in fixed top-0 right-0 bottom-0 z-[70] w-72 max-w-[82vw] bg-day/85 dark:bg-night-soft/80 backdrop-blur-2xl border-l border-day-line dark:border-night-line/60 flex flex-col gap-1 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-display font-bold text-[19px] text-day-text dark:text-night-text">
                DM<span className="text-accent">/</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label={language === "es-ES" ? "Cerrar menú" : "Close menu"}
                className="w-[34px] h-[34px] rounded-[9px] border border-day-line dark:border-night-line text-day-body dark:text-night-body flex items-center justify-center"
              >
                <IoCloseOutline className="text-lg" />
              </button>
            </div>
            {NAVBAR_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={() => setMenuOpen(false)}
                className={`block px-3.5 py-3 rounded-[10px] text-[15px] font-semibold transition-colors ${
                  activeSection === item.id.substring(1)
                    ? "text-accent bg-accent/15"
                    : "text-day-body dark:text-night-body hover:text-accent"
                }`}
              >
                {item.text}
              </a>
            ))}
            <div className="mt-auto flex items-center gap-3 pt-4 border-t border-day-line dark:border-night-line/60">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </aside>
          </>,
          document.body
        )}
    </header>
  );
}

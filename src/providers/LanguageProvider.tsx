import { useLayoutEffect, useState } from "react";
import { LanguageContext, type Language } from "../context/LanguageContext";

const LANGUAGE_KEY = "language";


const readSavedLanguage = (): Language | null => {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return saved === "es-ES" || saved === "en-US" ? saved : null;
  } catch {
    return null;
  }
};

const detectBrowserLanguage = (): Language =>
  navigator.language?.toLowerCase().startsWith("en") ? "en-US" : "es-ES";

const persistLanguage = (language: Language) => {
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch(error) {
    console.error(error)
  }
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>(
    () => readSavedLanguage() ?? detectBrowserLanguage()
  );

  useLayoutEffect(() => {
    document.title =
      language === "en-US" ? "Diego's Portfolio" : "Portafolio de Diego";
  }, [language]);

  const changeLanguage = () => {
    const next: Language = language === "en-US" ? "es-ES" : "en-US";
    persistLanguage(next);
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

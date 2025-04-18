import { createContext } from "react";

interface LanguageContext {
  language: "es-ES" | "en-US";
  changeLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContext>({
  language: "es-ES",
  changeLanguage: () => {},
});

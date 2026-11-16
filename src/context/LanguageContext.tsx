import { createContext } from "react";

export type Language = "es-ES" | "en-US";

interface LanguageContext {
  language: Language;
  changeLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContext>({
  language: "es-ES",
  changeLanguage: () => {},
});

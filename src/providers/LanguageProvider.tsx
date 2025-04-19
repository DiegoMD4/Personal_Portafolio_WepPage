import { useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<"es-ES" | "en-US">(() => {
    document.title =
      navigator.language !== "en-US"
        ? "Portafolio de Diego"
        : "Diego's Portfolio";
    return navigator.language !== "en-US" ? "es-ES" : "en-US";
  });
  const changeLanguage = () => {
    setLanguage((prev) => {
      document.title =
        prev !== "en-US" ? "Diego's Portfolio" : "Portafolio de Diego";
      return prev !== "en-US" ? "en-US" : "es-ES";
    });
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

import { useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<"es-ES" | "en-US">(() => {
    return navigator.language !== "en-US" ? "es-ES" : "en-US";
  });
  const changeLanguage = () => {
    setLanguage((prev) => (prev !== "en-US" ? "en-US" : "es-ES"));
    console.log(language);
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

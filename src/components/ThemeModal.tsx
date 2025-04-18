import { useContext, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import "../styles/ThemeMenu.css";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import modalText from "../json/modal.json"
type ThemeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export function ThemeModal({ isOpen, onClose }: ThemeModalProps) {
  const { setDark, setLight } = useContext(ThemeContext);
  const { changeLanguage, language } = useContext(LanguageContext);
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, onClose);
  const text = language === "es-ES" ? modalText.es : modalText.en;
  return (
    <div
      ref={modalRef}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      className={`theme-menu ${
        isOpen && "open"
      } absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md`}
    >
      <ul>
        <li
          className="px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
          onClick={setDark}
        >
          {text[0].btn1}
        </li>
        <li
          className="px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
          onClick={setLight}
        >
          {text[1].btn2}
        </li>
        <li className="px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
        onClick={changeLanguage}>
          {text[2].btn3}
        </li>
      </ul>
    </div>
  );
}

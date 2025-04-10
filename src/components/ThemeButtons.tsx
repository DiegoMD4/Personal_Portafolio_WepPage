import { useContext, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
import { ThemeModal } from "./ThemeModal";

export function ThemeButtons() {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <span
      onClick={() => {
        setModalOpen(true);
      }}
      className="flex justify-center cursor-pointer hover:"
    >
      {theme === "dark" ? (
        <IoMoonOutline className="text-lg" />
      ) : (
        <IoSunnyOutline className="text-lg" />
      )}

      <FaCaretDown className="text-gray-600 dark:text-white" />
      <ThemeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </span>
  );
}

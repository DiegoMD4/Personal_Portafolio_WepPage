import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useScrollEffects from "../hooks/useScroll";
import { ThemeModal } from "./ThemeModal";
import { FaCaretDown } from "react-icons/fa";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const NAVBAR_LINKS = [
  { text: "About me", id: "#presentation" },
  { text: "Experience", id: "#experience" },
  { text: "Projects", id: "#projects" },
  { text: "Contact", id: "#contact" },
];
/* 
type NavbarProps = {
  children?: React.ReactNode;
}; */

export function Navbar() {
  const activeSection = useScrollEffects();
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav
        id="nav"
        className="nav flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center"
      >
        {NAVBAR_LINKS.map((item) => (
          <a
            className={`cursor-pointer relative block px-2 py-2 transition 
            hover:text-[#be3144] dark:hover:text-yellow-400 
            ${
              activeSection === item.id.substring(1)
                ? "text-[#be3144] dark:text-yellow-400"
                : ""
            }
          `}
            key={item.id}
            href={item.id}
          >
            {item.text}
          </a>
        ))}
        <div className="relative ml-1 mr-1">
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
            <ThemeModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
          </span>
        </div>
      </nav>
    </header>
  );
}

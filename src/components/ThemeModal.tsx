import { useContext, useRef } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import '../styles/ThemeMenu.css';
import { ThemeContext } from '../context/ThemeContext';

type ThemeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export function ThemeModal({ isOpen, onClose }: ThemeModalProps) {
  const { setDark, setLight } = useContext(ThemeContext);
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, onClose);
  return (
    <div
      ref={modalRef}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      className={`theme-menu ${isOpen && 'open'}`}
    >
      <ul>
        <li
          className="px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
          onClick={setDark}
        >
          Dark
        </li>
        <li
          className="px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
          onClick={setLight}
        >
          Light
        </li>
        <li className="px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
          Cambiar idioma
        </li>
      </ul>
    </div>
  );
}

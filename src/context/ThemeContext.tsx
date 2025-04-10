import { createContext } from 'react';

interface ThemeContext {
  theme: string;
  setLight: () => void;
  setDark: () => void;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
  setLight: () => {},
  setDark: () => {},
});

import { DEFAULT_PROJECTS, type Project } from "../data/projects";

const PROJECTS_KEY = "portfolio_projects_v1";
const SESSION_KEY = "portfolio_admin_session";
const CV_KEYS = { es: "portfolio_cv_es_v1", en: "portfolio_cv_en_v1" } as const;

export type CvLang = keyof typeof CV_KEYS;

export interface CvFile {
  name: string;
  size: number;
  date: string;
  dataUrl: string;
}

const DEFAULT_CVS: Record<CvLang, { href: string; download: string; name: string }> = {
  es: {
    href: "/assets/CV_Desarrollador_FullStack_Diego_Montoya.pdf",
    download: "Diego_Montoya_Desarrollador_FullStack",
    name: "CV_Desarrollador_FullStack_Diego_Montoya.pdf",
  },
  en: {
    href: "/assets/CV_FullStack_Developer_Diego_Montoya.pdf",
    download: "Diego_Montoya_FullStack_Developer",
    name: "CV_FullStack_Developer_Diego_Montoya.pdf",
  },
};

export function getProjects(): Project[] {
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    if (raw) return JSON.parse(raw) as Project[];
  } catch {
    /* localStorage no disponible */
  }
  return DEFAULT_PROJECTS;
}

export function saveProjects(projects: Project[]) {
  try {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  } catch {
    /* localStorage no disponible */
  }
}

export function resetProjects() {
  try {
    localStorage.removeItem(PROJECTS_KEY);
  } catch {
    /* localStorage no disponible */
  }
}

export function hasProjectsOverride(): boolean {
  try {
    return localStorage.getItem(PROJECTS_KEY) !== null;
  } catch {
    return false;
  }
}

export function getCv(lang: CvLang): CvFile | null {
  try {
    const raw = localStorage.getItem(CV_KEYS[lang]);
    if (raw) return JSON.parse(raw) as CvFile;
  } catch {
    /* localStorage no disponible */
  }
  return null;
}

export function setCv(lang: CvLang, file: CvFile) {
  try {
    localStorage.setItem(CV_KEYS[lang], JSON.stringify(file));
  } catch {
    /* localStorage no disponible */
  }
}

export function removeCv(lang: CvLang) {
  try {
    localStorage.removeItem(CV_KEYS[lang]);
  } catch {
    /* localStorage no disponible */
  }
}

export function getCvHref(lang: CvLang): { href: string; download: string; name: string } {
  const override = getCv(lang);
  if (override) {
    return { href: override.dataUrl, download: override.name, name: override.name };
  }
  return DEFAULT_CVS[lang];
}

export function getDefaultCvName(lang: CvLang): string {
  return DEFAULT_CVS[lang].name;
}

export function adminUser(): string {
  return import.meta.env.VITE_ADMIN_USER ?? "";
}

export function login(user: string, password: string): boolean {
  const envUser = import.meta.env.VITE_ADMIN_USER;
  const envPass = import.meta.env.VITE_ADMIN_PASSWORD;
  if (!envUser || !envPass) return false;
  if (user === envUser && password === envPass) {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* sessionStorage no disponible */
    }
    return true;
  }
  return false;
}

export function logout() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* sessionStorage no disponible */
  }
}

export function isAuthed(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

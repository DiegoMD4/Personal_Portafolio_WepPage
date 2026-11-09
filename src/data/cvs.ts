export type CvLang = "es" | "en";

export interface CvFile {
  name: string;
  size: number;
  date: string;
  dataUrl: string;
}

export const DEFAULT_CVS: Record<CvLang, { href: string; download: string; name: string }> = {
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

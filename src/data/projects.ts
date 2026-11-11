export type ProjectTag =
  | "TypeScript"
  | "React"
  | "Next.js"
  | "Tailwind CSS"
  | "Node.js"
  | "PHP"
  | "Laravel"
  | "SQL Server"
  | "MySQL";

export const ALL_TAGS: ProjectTag[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PHP",
  "Laravel",
  "SQL Server",
  "MySQL",
];

export interface Project {
  id: string;
  title_es: string;
  title_en: string;
  desc_es: string;
  desc_en: string;
  link?: string;
  github?: string;
  image: string;
  tags: ProjectTag[];
  /** Posición en el portafolio; lo gestiona el panel de administración. */
  order?: number;
}

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "finance-tracking",
    title_es: "Finance Tracking — Panel de Finanzas Personales",
    title_en: "Finance Tracking — Personal Finance Dashboard",
    desc_es:
      "Aplicación web de control de finanzas personales creada para poner Next.js a prueba: cada mutación de datos se ejecuta mediante Server Actions en lugar de API routes, las páginas se renderizan en el servidor y la autenticación se apoya en sesiones JWT almacenadas en cookies httpOnly seguras. El dashboard visualiza ingresos, gastos y tendencias de balance sobre un esquema MySQL gestionado con Drizzle ORM.",
    desc_en:
      "Personal finance control web app built to put Next.js to the test: every data mutation runs through Server Actions instead of API routes, pages render on the server, and authentication relies on JWT sessions stored in secure httpOnly cookies. The dashboard visualizes income, expenses, and balance trends against a MySQL schema managed with Drizzle ORM.",
    link: "https://finance-tracking-visualizator.vercel.app/",
    github: "https://github.com/DiegoMD4/finance_tracking",
    image: "assets/464_1x_shots_so.webp",
    tags: ["Next.js", "MySQL"],
  },
  {
    id: "sdrp",
    title_es: "SDRP — Sistema Dirección de Regulación Programática",
    title_en: "SDRP — Programmatic Regulation Direction System",
    desc_es:
      "Este sistema facilita la toma de decisiones estratégicas, la rendición de cuentas, y el alineamiento de los programas institucionales con los objetivos gubernamentales.",
    desc_en:
      "This system facilitates strategic decision-making, accountability, and the alignment of institutional programs with governmental objectives.",
    image: "assets/417shots_so.webp",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "suiss",
    title_es: "SUISS — Sistema Unificado de Información de Programas Sociales",
    title_en: "SUISS — Unified Social Programs Information System",
    desc_es:
      "Esta plataforma centraliza toda la información relevante sobre programas sociales, integrando datos de múltiples fuentes para ofrecer una experiencia unificada y eficiente.",
    desc_en:
      "This platform centralizes all relevant information on social programs, integrating data from multiple sources to provide a unified and efficient experience.",
    link: "https://suiss.vercel.app/landing",
    image: "assets/340shots_so.webp",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "cei-web",
    title_es: "Sitio web del CEI",
    title_en: "CEI Website",
    desc_es:
      "Sitio web creado para el Centro de Emprendimiento e Innovación en CEUTEC. Contribuí como desarrollador backend junto con mis compañeros en este proyecto universitario.",
    desc_en:
      "Website created for the Center for Entrepreneurship and Innovation at CEUTEC. I contributed as a backend developer alongside my classmates in this university project.",
    github: "https://github.com/MGeovany/cei-web-portal",
    image: "assets/CEI-WEB.jpg",
    tags: ["Node.js", "SQL Server"],
  },
];

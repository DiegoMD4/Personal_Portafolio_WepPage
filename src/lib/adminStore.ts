import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { DEFAULT_PROJECTS, type Project } from "../data/projects";
import { DEFAULT_CVS, type CvFile, type CvLang } from "../data/cvs";

export { DEFAULT_CVS };
export type { CvFile, CvLang };

/* ===== Proyectos (colección "projects") ===== */

export async function fetchProjects(): Promise<Project[]> {
  const snap = await getDocs(collection(db, "projects"));
  return snap.docs
    .map((d) => d.data() as Project)
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
}

export async function saveProject(project: Project, order: number) {
  await setDoc(doc(db, "projects", project.id), { ...project, order });
}

/** Reescribe el campo `order` de todos los proyectos según el arreglo recibido. */
export async function reorderProjects(ids: string[]) {
  const batch = writeBatch(db);
  ids.forEach((id, i) => batch.update(doc(db, "projects", id), { order: i }));
  await batch.commit();
}

export async function deleteProject(id: string) {
  await deleteDoc(doc(db, "projects", id));
}

export async function seedDefaultProjects() {
  const batch = writeBatch(db);
  DEFAULT_PROJECTS.forEach((p, i) => batch.set(doc(db, "projects", p.id), { ...p, order: i }));
  await batch.commit();
}

/* ===== CVs (colección "cvs", docs "es" / "en") ===== */

export async function getCvDoc(lang: CvLang): Promise<CvFile | null> {
  const snap = await getDoc(doc(db, "cvs", lang));
  return snap.exists() ? (snap.data() as CvFile) : null;
}

export async function setCvDoc(lang: CvLang, file: CvFile) {
  await setDoc(doc(db, "cvs", lang), file);
}

export async function deleteCvDoc(lang: CvLang) {
  await deleteDoc(doc(db, "cvs", lang));
}

function triggerDownload(href: string, download: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = download;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export async function downloadCv(lang: CvLang) {
  try {
    const file = await getCvDoc(lang);
    if (file) {
      triggerDownload(file.dataUrl, file.name);
      return;
    }
  } catch {
    /* sin conexión o sin permisos: cae al PDF estático */
  }
  const fallback = DEFAULT_CVS[lang];
  triggerDownload(fallback.href, fallback.download);
}

/* ===== Autenticación (Firebase Auth) ===== */

export function adminUser(): string {
  return import.meta.env.VITE_ADMIN_USER ?? "";
}

export async function loginAdmin(user: string, password: string): Promise<void> {
  const envUser = import.meta.env.VITE_ADMIN_USER;
  const email = import.meta.env.VITE_ADMIN_EMAIL;
  if (!envUser || !email || user !== envUser) {
    throw new Error("invalid-credentials");
  }
  await signInWithEmailAndPassword(auth, email, password);
}

export function logoutAdmin() {
  return signOut(auth);
}

export function subscribeAuth(cb: (user: User | null) => void) {
  return onAuthStateChanged(auth, cb);
}

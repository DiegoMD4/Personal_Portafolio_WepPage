import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiLock, FiTrash2, FiUploadCloud, FiEye, FiEdit2, FiPlus, FiLogOut, FiShield } from "react-icons/fi";
import {
  adminUser,
  getCv,
  getCvHref,
  isAuthed,
  login,
  logout,
  removeCv,
  setCv,
  type CvLang,
  getProjects,
  saveProjects,
  resetProjects,
  hasProjectsOverride,
} from "../../lib/adminStore";
import { ALL_TAGS, type Project, type ProjectTag } from "../../data/projects";

const MAX_PDF_SIZE = 5 * 1024 * 1024;
const MAX_IMG_SIZE = 2 * 1024 * 1024;

const inputClasses =
  "box-border w-full bg-night border border-night-line rounded-xl px-4 py-3 text-[14.5px] text-night-text outline-none focus:border-accent focus:ring-[3px] focus:ring-accent/25";

function formatSize(bytes: number) {
  return bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function Login({ onOk }: { onOk: () => void }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(user.trim(), password)) {
      onOk();
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <div className="min-h-screen bg-night bg-grid dark flex flex-col items-center justify-center gap-7 px-4 py-8 relative overflow-hidden font-sans">
      <span
        className="glow glow-drift -top-56 -left-44 w-[600px] h-[600px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(closest-side, rgba(190,49,68,.2), transparent 72%)" }}
      ></span>
      <span
        className="glow glow-drift-rev -bottom-60 -right-52 w-[640px] h-[640px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(closest-side, rgba(250,204,21,.08), transparent 72%)" }}
      ></span>

      <form
        onSubmit={submit}
        className="relative z-10 w-[440px] max-w-[94vw] box-border bg-night-card border border-night-line rounded-[22px] p-10 flex flex-col gap-5"
      >
        <div className="flex flex-col items-center gap-3.5 text-center">
          <span className="w-[58px] h-[58px] rounded-2xl bg-accent/15 border border-[#4A3338] flex items-center justify-center">
            <FiLock className="text-2xl text-accent" />
          </span>
          <h1 className="m-0 font-display text-[26px] font-bold text-night-text">Zona administrativa</h1>
          <p className="m-0 text-[14.5px] leading-relaxed text-night-mute">
            Ruta privada <span className="font-mono text-accent-bright">/admin</span> para gestionar los CV y los
            proyectos del portafolio.
          </p>
        </div>

        <label className="flex flex-col gap-2 text-[13.5px] font-semibold text-night-body">
          Usuario
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoComplete="username"
            className={`${inputClasses} font-mono`}
          />
        </label>
        <label className="flex flex-col gap-2 text-[13.5px] font-semibold text-night-body">
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className={inputClasses}
          />
        </label>

        {error && <p className="m-0 text-[13px] text-accent-bright">{error}</p>}

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-accent text-white font-semibold text-[15px] px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(190,49,68,.4)]"
        >
          Entrar
        </button>

        <p className="m-0 flex items-center justify-center gap-2 text-[12.5px] text-night-mute">
          <FiShield />
          Credenciales validadas contra <span className="font-mono">VITE_ADMIN_USER</span> y{" "}
          <span className="font-mono">VITE_ADMIN_PASSWORD</span> (.env)
        </p>
      </form>

      <Link to="/" className="relative z-10 text-[13.5px] text-night-mute hover:text-accent-bright">
        ← Volver al portafolio
      </Link>
    </div>
  );
}

function CvCard({ lang, title, badge }: { lang: CvLang; title: string; badge: string }) {
  const [tick, setTick] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  void tick;
  const override = getCv(lang);
  const current = getCvHref(lang);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      alert("Solo se permiten archivos PDF.");
      return;
    }
    if (file.size > MAX_PDF_SIZE) {
      alert("El PDF supera el límite de 5 MB.");
      return;
    }
    const dataUrl = await readAsDataUrl(file);
    setCv(lang, { name: file.name, size: file.size, date: new Date().toLocaleDateString(), dataUrl });
    setTick((t) => t + 1);
  };

  return (
    <div className="flex-[1_1_380px] min-w-0 bg-night-card border border-night-line rounded-[18px] p-7 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="m-0 text-[17px] font-bold text-night-text">{title}</h2>
        <span className="text-[11.5px] font-bold tracking-wider text-accent-bright border border-[#4A3338] px-2.5 py-1 rounded-full">
          {badge}
        </span>
      </div>

      <div className="flex items-center gap-3.5 bg-night border border-night-line2 rounded-xl px-4 py-3.5">
        <div className="min-w-0 flex-1">
          <p className="m-0 text-[13.5px] font-semibold text-night-text truncate">{current.name}</p>
          <p className="m-0 mt-0.5 text-xs text-night-mute">
            {override ? `${formatSize(override.size)} · subido ${override.date}` : "archivo por defecto del sitio"}
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href={current.href}
            download={current.download}
            aria-label={`Descargar ${title}`}
            className="w-[34px] h-[34px] border border-night-line rounded-[9px] flex items-center justify-center text-night-body hover:border-accent-bright hover:text-white"
          >
            <FiEye />
          </a>
          {override && (
            <button
              aria-label={`Eliminar ${title}`}
              onClick={() => {
                if (confirm("¿Eliminar el CV subido y volver al archivo por defecto?")) {
                  removeCv(lang);
                  setTick((t) => t + 1);
                }
              }}
              className="w-[34px] h-[34px] border border-[#4A3338] bg-accent/10 rounded-[9px] flex items-center justify-center text-accent-bright hover:bg-accent/20"
            >
              <FiTrash2 />
            </button>
          )}
        </div>
      </div>

      <button
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-night-line rounded-xl px-4 py-6 flex flex-col items-center gap-2 text-night-mute transition-colors hover:border-accent hover:bg-accent/5 cursor-pointer"
      >
        <FiUploadCloud className="text-xl" />
        <span className="text-[13.5px] font-semibold text-night-body">
          Arrastra el nuevo PDF o haz click para seleccionar
        </span>
        <span className="text-xs">Solo PDF · máx. 5 MB · reemplaza al actual</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => {
          handleFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
    </div>
  );
}

const EMPTY_PROJECT = (): Project => ({
  id: `proyecto-${Date.now()}`,
  title_es: "",
  title_en: "",
  desc_es: "",
  desc_en: "",
  link: "",
  github: "",
  image: "",
  tags: [],
});

function ProjectForm({ project, onSave, onCancel }: { project: Project; onSave: (p: Project) => void; onCancel: () => void }) {
  const [draft, setDraft] = useState<Project>({ ...project });
  const [tab, setTab] = useState<"es" | "en">("es");
  const imgRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof Project>(key: K, value: Project[K]) => setDraft((d) => ({ ...d, [key]: value }));

  const toggleTag = (tag: ProjectTag) =>
    set("tags", draft.tags.includes(tag) ? draft.tags.filter((t) => t !== tag) : [...draft.tags, tag]);

  const handleImage = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Solo se permiten imágenes.");
      return;
    }
    if (file.size > MAX_IMG_SIZE) {
      alert("La imagen supera el límite de 2 MB.");
      return;
    }
    set("image", await readAsDataUrl(file));
  };

  const titleKey = tab === "es" ? "title_es" : "title_en";
  const descKey = tab === "es" ? "desc_es" : "desc_en";

  return (
    <div className="mt-9 bg-night-card border border-night-line rounded-[18px] p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="m-0 text-lg font-bold text-night-text">
          {draft.title_es ? `Editando: ${draft.title_es}` : "Nuevo proyecto"}
        </h2>
        <div className="flex border border-night-line rounded-full overflow-hidden text-[12.5px] font-semibold">
          <button
            onClick={() => setTab("es")}
            className={tab === "es" ? "px-4 py-1.5 bg-accent text-white" : "px-4 py-1.5 text-night-mute"}
          >
            Español
          </button>
          <button
            onClick={() => setTab("en")}
            className={tab === "en" ? "px-4 py-1.5 bg-accent text-white" : "px-4 py-1.5 text-night-mute"}
          >
            English
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="flex-[1_1_380px] min-w-0 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-night-body">
            Título ({tab.toUpperCase()})
            <input
              type="text"
              value={draft[titleKey]}
              onChange={(e) => set(titleKey, e.target.value)}
              className={inputClasses}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-night-body">
            Descripción ({tab.toUpperCase()})
            <textarea
              rows={4}
              value={draft[descKey]}
              onChange={(e) => set(descKey, e.target.value)}
              className={`${inputClasses} resize-y leading-relaxed`}
            />
          </label>
          <div className="flex flex-wrap gap-3.5">
            <label className="flex-[1_1_180px] flex flex-col gap-1.5 text-[13px] font-semibold text-night-body">
              Link demo
              <input
                type="url"
                value={draft.link ?? ""}
                onChange={(e) => set("link", e.target.value)}
                className={`${inputClasses} font-mono text-[13px]`}
              />
            </label>
            <label className="flex-[1_1_180px] flex flex-col gap-1.5 text-[13px] font-semibold text-night-body">
              GitHub
              <input
                type="url"
                value={draft.github ?? ""}
                onChange={(e) => set("github", e.target.value)}
                className={`${inputClasses} font-mono text-[13px]`}
              />
            </label>
          </div>
          <div className="flex flex-col gap-2 text-[13px] font-semibold text-night-body">
            Tags
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                    draft.tags.includes(tag)
                      ? "border-accent bg-accent/15 text-accent-bright"
                      : "border-night-line text-night-mute hover:border-accent-bright"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-[1_1_280px] min-w-0 flex flex-col gap-3.5">
          <span className="text-[13px] font-semibold text-night-body">Imagen del proyecto</span>
          {draft.image ? (
            <img
              src={draft.image}
              alt="Imagen actual del proyecto"
              className="w-full h-[170px] object-cover object-top rounded-xl border border-night-line"
            />
          ) : (
            <div className="w-full h-[170px] rounded-xl border border-night-line bg-night flex items-center justify-center text-night-mute text-sm">
              Sin imagen
            </div>
          )}
          <button
            onClick={() => imgRef.current?.click()}
            className="border-2 border-dashed border-night-line rounded-xl px-4 py-5 flex flex-col items-center gap-1.5 text-night-mute transition-colors hover:border-accent hover:bg-accent/5 cursor-pointer"
          >
            <span className="text-[13px] font-semibold text-night-body">
              {draft.image ? "Reemplazar imagen" : "Subir imagen"}
            </span>
            <span className="text-[11.5px]">WEBP o PNG · 1200×760 recomendado · máx. 2 MB</span>
          </button>
          <input
            ref={imgRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              handleImage(e.target.files?.[0]);
              e.target.value = "";
            }}
          />
          <div className="flex gap-3 mt-auto justify-end">
            <button
              onClick={onCancel}
              className="border border-night-line text-night-body font-semibold text-sm px-5 py-2.5 rounded-[10px] hover:border-accent-bright hover:text-white"
            >
              Cancelar
            </button>
            <button
              onClick={() => onSave(draft)}
              disabled={!draft.title_es.trim() || !draft.title_en.trim()}
              className="bg-accent text-white font-semibold text-sm px-6 py-2.5 rounded-[10px] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(190,49,68,.4)] disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [projects, setProjects] = useState<Project[]>(getProjects());
  const [editing, setEditing] = useState<Project | null>(null);

  const persist = (next: Project[]) => {
    setProjects(next);
    saveProjects(next);
  };

  const save = (p: Project) => {
    const exists = projects.some((x) => x.id === p.id);
    persist(exists ? projects.map((x) => (x.id === p.id ? p : x)) : [...projects, p]);
    setEditing(null);
  };

  const remove = (id: string) => {
    if (confirm("¿Eliminar este proyecto del portafolio?")) {
      persist(projects.filter((x) => x.id !== id));
      if (editing?.id === id) setEditing(null);
    }
  };

  return (
    <div className="min-h-screen bg-night bg-grid dark font-sans text-night-text">
      <header className="border-b border-night-line2 bg-[#130D0E]/90 backdrop-blur-xl sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <span className="font-display font-bold text-xl">
              DM<span className="text-accent">/</span>
              <span className="text-night-mute font-medium text-base"> admin</span>
            </span>
            <span className="inline-flex items-center gap-2 border border-[#2E4A38] bg-[#142019] text-[#7FD6A0] text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-[7px] h-[7px] rounded-full bg-[#52C47E] inline-block"></span>
              Sesión verificada · <span className="font-mono">{adminUser()}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-[13.5px] text-night-mute hover:text-accent-bright">
              Ver portafolio
            </Link>
            <button
              onClick={() => {
                logout();
                onLogout();
              }}
              className="inline-flex items-center gap-2 border border-night-line text-night-body font-semibold text-[13.5px] px-4 py-2 rounded-[10px] hover:border-accent-bright hover:text-white"
            >
              <FiLogOut />
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-14">
        <section>
          <h1 className="m-0 mb-2 font-display text-3xl font-bold">Currículums</h1>
          <p className="m-0 mb-7 text-[14.5px] text-night-mute max-w-2xl">
            Rota los CV publicados en el portafolio. El archivo nuevo reemplaza al actual y queda disponible de
            inmediato en el botón «Descargar CV».
          </p>
          <div className="flex flex-wrap gap-6">
            <CvCard lang="es" title="CV en Español" badge="ES" />
            <CvCard lang="en" title="CV in English" badge="EN" />
          </div>
        </section>

        <section>
          <div className="flex flex-wrap items-center justify-between gap-3.5 mb-2">
            <div>
              <h1 className="m-0 mb-2 font-display text-3xl font-bold">Proyectos</h1>
              <p className="m-0 text-[14.5px] text-night-mute">
                Añade, edita o elimina los proyectos mostrados en el portafolio (contenido en ES y EN).
              </p>
            </div>
            <div className="flex items-center gap-3">
              {hasProjectsOverride() && (
                <button
                  onClick={() => {
                    if (confirm("¿Restaurar la lista de proyectos por defecto?")) {
                      resetProjects();
                      setProjects(getProjects());
                      setEditing(null);
                    }
                  }}
                  className="text-[13px] text-night-mute hover:text-accent-bright"
                >
                  Restaurar por defecto
                </button>
              )}
              <button
                onClick={() => setEditing(EMPTY_PROJECT())}
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-[14.5px] px-5 py-3 rounded-[11px] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(190,49,68,.4)]"
              >
                <FiPlus />
                Añadir proyecto
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            {projects.map((p) => (
              <div
                key={p.id}
                className="flex flex-wrap items-center gap-4 bg-night-card border border-night-line2 rounded-[14px] px-4 py-3.5 transition-colors hover:border-[#4A3338]"
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt=""
                    className="w-[86px] h-[54px] object-cover object-top rounded-lg border border-night-line shrink-0"
                  />
                ) : (
                  <div className="w-[86px] h-[54px] rounded-lg border border-night-line bg-night shrink-0"></div>
                )}
                <div className="flex-1 min-w-[200px]">
                  <p className="m-0 text-[15px] font-bold">{p.title_es}</p>
                  <p className="m-0 mt-0.5 font-mono text-[12.5px] text-night-mute">{p.tags.join(" · ") || "sin tags"}</p>
                </div>
                <span className="inline-flex items-center text-xs font-semibold text-[#7FD6A0] border border-[#2E4A38] bg-[#142019] px-3 py-1.5 rounded-full">
                  ES · EN
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditing(p)}
                    className="inline-flex items-center gap-2 border border-night-line text-night-body font-semibold text-[13px] px-3.5 py-2 rounded-[9px] hover:border-accent-bright hover:text-white"
                  >
                    <FiEdit2 />
                    Editar
                  </button>
                  <button
                    onClick={() => remove(p.id)}
                    aria-label={`Eliminar ${p.title_es}`}
                    className="w-[34px] h-[34px] border border-[#4A3338] bg-accent/10 rounded-[9px] flex items-center justify-center text-accent-bright hover:bg-accent/20"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {editing && <ProjectForm project={editing} onSave={save} onCancel={() => setEditing(null)} />}
        </section>
      </main>
    </div>
  );
}

export default function Admin() {
  const [authed, setAuthed] = useState(isAuthed());
  if (!authed) return <Login onOk={() => setAuthed(true)} />;
  return <Dashboard onLogout={() => setAuthed(false)} />;
}

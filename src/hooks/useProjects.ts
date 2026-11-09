import { useEffect, useState } from "react";
import { DEFAULT_PROJECTS, type Project } from "../data/projects";

export function useProjects(): Project[] {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);

  useEffect(() => {
    let alive = true;
    // import() dinámico: el SDK de Firebase no entra en el bundle inicial
    import("../lib/adminStore")
      .then(({ fetchProjects }) => fetchProjects())
      .then((list) => {
        if (alive && list.length > 0) setProjects(list);
      })
      .catch(() => {
        /* sin conexión o sin datos: se quedan los proyectos por defecto */
      });
    return () => {
      alive = false;
    };
  }, []);

  return projects;
}

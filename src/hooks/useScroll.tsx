import { useEffect, useState } from "react";

const useScrollEffects = (): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    /*   const navList = document.querySelector("#nav") as HTMLElement | null;
    const maxScroll = 200;

    function onScroll(): void {
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / maxScroll, 1) * 0.5;

      if (navList) {
        navList.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        navList.style.boxShadow = `0 4px 6px -1px rgba(0, 0, 0, ${opacity})`;
      }
    } */

    const sections = document.querySelectorAll("section");

    function updateActiveSection(): void {
      let maxVisibleArea = 0;
      let currentActive: string | null = null;

      sections.forEach((section) => {
        const visibleArea = getVisibleArea(section);
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          currentActive = section.getAttribute("id");
        }
      });

      setActiveSection(currentActive);
    }

    function getVisibleArea(element: Element): number {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;
      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleWidth =
        Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
      return Math.max(0, visibleHeight) * Math.max(0, visibleWidth);
    }

    // Listeners

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    // Llamada inicial

    updateActiveSection();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeSection;
};

export default useScrollEffects;

export default function ScrollEffects(): void {
    document.addEventListener('DOMContentLoaded', function () {
      const navList = document.querySelector('#nav') as HTMLElement | null;
      const maxScroll = 200;
  
      function onScroll(): void {
        const scrollY = window.scrollY;
        const opacity = Math.min(scrollY / maxScroll, 1) * 0.5;
  
        if (navList) {
          navList.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
          navList.style.boxShadow = `0 4px 6px -1px rgba(0, 0, 0, ${opacity})`;
        }
      }
  
      window.addEventListener('scroll', onScroll);
    });
  
    window.onload = function () {
      const sections = document.querySelectorAll('section');
      const navbarAnchors = document.querySelectorAll<HTMLAnchorElement>('#nav a');
  
      function updateActiveSection(): void {
        let maxVisibleArea = 0;
        let activeSection: string | null = null;
  
        sections.forEach((section) => {
          const visibleArea = getVisibleArea(section);
          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            activeSection = section.getAttribute('id');
          }
        });
  
        navbarAnchors.forEach((a) => {
          a.classList.remove('active');
          const href = a.getAttribute('href');
          if (href?.substring(1) === activeSection) {
            a.classList.add('active');
          }
        });
      }
  
      function getVisibleArea(element: Element): number {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
        return Math.max(0, visibleHeight) * Math.max(0, visibleWidth); // para evitar valores negativos
      }
  
      window.addEventListener('scroll', updateActiveSection);
      window.addEventListener('resize', updateActiveSection);
    };
  }
  
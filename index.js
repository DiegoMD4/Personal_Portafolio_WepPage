import { Body } from "./js/components/body.js";
import { RenderContactSection } from "./js/components/Contact.js";
import { RenderFooter } from "./js/components/Footer.js";
import { RenderNavbar } from "./js/components/Navbar.js";
import { RenderSectionPresentation } from "./js/components/Presentation.js";
import { RenderSkills } from "./js/components/Skills.js";
import { $ } from "./js/utils/utils.js";

let currentLanguage = localStorage.getItem('currentLanguage') || 'en';
let theme = localStorage.getItem('theme') || 'light-mode';

document.addEventListener('DOMContentLoaded', () => {
    const themeChangebtn = $('#themebtn');
    if (theme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        themeChangebtn.classList.remove('ti-sun');
        themeChangebtn.classList.add('ti-moon');
    } else if (theme === 'light-mode') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeChangebtn.classList.remove('ti-moon');
        themeChangebtn.classList.add('ti-sun');
    }
});
Body(theme)
RenderNavbar(currentLanguage)
RenderSectionPresentation(currentLanguage)
RenderContactSection(currentLanguage)
RenderFooter(currentLanguage)
RenderSkills(currentLanguage)

export function SetLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    localStorage.setItem('currentLanguage', currentLanguage);
    RenderNavbar(currentLanguage);
    RenderSectionPresentation(currentLanguage)
    RenderSkills(currentLanguage);
    RenderContactSection(currentLanguage)
    RenderFooter(currentLanguage)
}

export function setTheme(theme) {
    localStorage.setItem('theme', theme);
    Body(theme)
}
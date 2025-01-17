import { RenderContactSection } from "./js/components/Contact.js";
import { RenderFooter } from "./js/components/Footer.js";
import { RenderNavbar } from "./js/components/Navbar.js";
import { RenderSectionPresentation } from "./js/components/Presentation.js";

let currentLanguage = localStorage.getItem('currentLanguage') || 'en';

RenderNavbar(currentLanguage)
RenderSectionPresentation(currentLanguage)
RenderContactSection(currentLanguage)
RenderFooter(currentLanguage)

export function SetLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    localStorage.setItem('currentLanguage', currentLanguage);
    RenderNavbar(currentLanguage);
    RenderSectionPresentation(currentLanguage)
    RenderContactSection(currentLanguage)
    RenderFooter(currentLanguage)
}
import { githubSvg, resumeSvg, emailSvg } from "./constants/svg.js";
import { texts } from "./constants/text.js";

const languageChangeBtn = document.getElementById("languageChange-btn");
const flag = document.getElementById("flag");
let currentLanguage = "en";

const changeLanguage = () => {
  currentLanguage = currentLanguage === "en" ? "es" : "en";
  flag.src = currentLanguage === "en" ? "/assets/spanish.png" : "/assets/english.png";
  document.title = currentLanguage === "en" ? "Diego's Portfolio" : "Portafolio de Diego";

  document.querySelector("nav a[href='#presentation']").textContent = texts[currentLanguage].header.about;
  document.querySelector("nav a[href='#projects']").textContent = texts[currentLanguage].header.projects;
  document.querySelector("nav a[href='#skills']").textContent = texts[currentLanguage].header.skills;
  document.querySelector("nav a[href='#contact']").textContent = texts[currentLanguage].header.contact;
  document.getElementById("light").textContent = texts[currentLanguage].header.themeLight;
  document.getElementById("dark").textContent = texts[currentLanguage].header.themeDark;
  document.getElementById("langText").innerText = texts[currentLanguage].header.language;

  document.querySelector(".primary-title").textContent = texts[currentLanguage].presentation.title;
  document.querySelector(".section-presentation p").innerHTML = texts[currentLanguage].presentation.description;
  document.querySelector(".head-presentation a").textContent = texts[currentLanguage].presentation.available;
  document.querySelector(".networks-footer a[href*='linkedin']").innerHTML = `<i class="ti ti-brand-linkedin"></i>${texts[currentLanguage].presentation.linkedin}`;
  document.querySelector(".networks-footer a[href*='mailto']").innerHTML = `<i class="ti ti-mail-forward"></i>${texts[currentLanguage].presentation.email}`;

  document.querySelector(".section-projects .secondary-title").innerHTML = texts[currentLanguage].projects.title;
  document.querySelectorAll(".section-projects h3")[0].textContent = texts[currentLanguage].projects.project1.title;
  document.querySelectorAll(".section-projects p")[0].textContent = texts[currentLanguage].projects.project1.description;
  document.querySelectorAll(".projects-footer a")[0].innerHTML = `${githubSvg}${texts[currentLanguage].projects.project1.code}`;
  document.querySelectorAll(".projects-footer a")[1].innerHTML = `<i class="fa-solid fa-link"></i>${texts[currentLanguage].projects.project1.demo}`;

  document.querySelectorAll(".section-projects h3")[1].textContent = texts[currentLanguage].projects.project2.title;
  document.querySelectorAll(".section-projects p")[1].textContent = texts[currentLanguage].projects.project2.description;
  document.querySelectorAll(".projects-footer a")[2].innerHTML = `${githubSvg}${texts[currentLanguage].projects.project2.code}`;;

  document.querySelector(".section-skills h2").innerHTML = texts[currentLanguage].skills.title;
  document.querySelectorAll(".section-skills h3")[0].textContent = texts[currentLanguage].skills.technicalSkills.title;
  document.querySelectorAll(".section-skills h4")[0].textContent = texts[currentLanguage].skills.technicalSkills.description;
  document.querySelectorAll(".section-skills h3")[1].textContent = texts[currentLanguage].skills.softSkills.title;
  document.querySelectorAll(".section-skills h4")[1].textContent = texts[currentLanguage].skills.softSkills.description;
  document.querySelector(".soft-content p").textContent = texts[currentLanguage].skills.softSkills.list;

  document.querySelector(".section-contact h2").innerHTML = texts[currentLanguage].contact.title;
  document.querySelector(".section-contact h3").textContent = texts[currentLanguage].contact.subtitle;
  document.querySelector(".section-contact p").innerHTML = texts[currentLanguage].contact.description;
  document.querySelector(".section-contact p + p").textContent = texts[currentLanguage].contact.findMe;
  document.querySelectorAll(".contact-links a")[0].innerHTML = `<i class="fab fa-github"></i>${texts[currentLanguage].contact.github}`;
  document.querySelectorAll(".contact-links a")[1].innerHTML = `<i class="fab fa-linkedin"></i>${texts[currentLanguage].contact.linkedin}`;
  document.querySelectorAll(".contact-links a")[2].innerHTML = `${emailSvg}${texts[currentLanguage].contact.email}`;

  document.querySelector(".footer a").innerHTML = `${texts[currentLanguage].footer.resume}${resumeSvg}`;

  document.querySelector(".footer a").href = texts[currentLanguage].footer.href
  document.querySelector(".footer a").download = texts[currentLanguage].footer.download

  document.getElementById('modal-theme').classList.remove('open');
};

languageChangeBtn.addEventListener("click", changeLanguage);

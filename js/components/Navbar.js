import { $, $$ } from '../utils/utils.js';
import { texts } from '../constants/text.js';
import { SetLanguage } from '../../index.js';

export function RenderNavbar(currentLanguage) {
    let language = currentLanguage === 'en' ? texts.en : texts.es;

    const $nav = $('nav');
    const render_navbar = ` <a href="#presentation">${language.header.about}</a>
      <a href="#projects">${language.header.projects}</a>
      <a href="#skills">${language.header.skills}</a>
      <a href="#contact">${language.header.contact}</a>
       <i id="themebtn" class="ti ti-sun"><i class="ti ti-caret-down-filled"></i></i>
 <div id="modal-theme" class="theme-menu">
        <ul>
          <li id="light">Light</li>
          <li id="dark">Dark</li>
          <li id="languageChange-btn">
            <span id="langText">${language.header.language}</span><img id="flag" src="/assets/${currentLanguage === 'en' ? 'spanish' : 'english'}.png" alt="language">
          </li>
        </ul>
      </div>`;
    $nav.innerHTML = render_navbar;
    const navLinks = $$('.nav a');
    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            navLinks.forEach((link) => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    //Modal cambio de tema
    const themeChangebtn = $('#themebtn');
    const themeMenuModal = $('#modal-theme');
    themeChangebtn.addEventListener('click', () => themeMenuModal.classList.toggle('open'));
    document.getElementById('light').addEventListener('click', function () {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeChangebtn.classList.remove('ti-moon');
        themeChangebtn.classList.add('ti-sun');
        themeMenuModal.classList.remove('open');
    });
    document.getElementById('dark').addEventListener('click', function () {
        localStorage.setItem('theme', 'dark');
        themeChangebtn.classList.remove('ti-sun');
        themeChangebtn.classList.add('ti-moon');
        document.body.classList.add('dark-mode');
        themeMenuModal.classList.remove('open');
    });
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeChangebtn.classList.remove('ti-sun');
            themeChangebtn.classList.add('ti-moon');
        } else {
            document.body.classList.remove('dark-mode');
            themeChangebtn.classList.remove('ti-moon');
            themeChangebtn.classList.add('ti-sun');
        }
    });

    //cambiar el idioma
    const $languageChangeBtn = $('#languageChange-btn');
    $languageChangeBtn.addEventListener('click', SetLanguage);


    const $flag = $('#flag');
    $flag.src = currentLanguage === 'en' ? '/assets/spanish.png' : '/assets/english.png';

}

document.addEventListener('DOMContentLoaded', function () {
    const navList = document.querySelector('.nav');
    const maxScroll = 200;

    function onScroll() {
        const scrollY = window.scrollY;

        let opacity = Math.min(scrollY / maxScroll, 1) * 0.5;
        navList.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        navList.style.boxShadow = `0 4px 6px -1px rgba(0, 0, 0, ${opacity})`;
    }

    window.addEventListener('scroll', onScroll);
});

window.onload = function () {
    const secctions = $$('section');
    const navbarAnchor = $$('.nav a');

    function updateActiveSection() {
        let maxVisibleArea = 0;
        let activeSection = null;

        secctions.forEach((secction) => {
            const visibleArea = getVisibleArea(secction);
            if (visibleArea > maxVisibleArea) {
                maxVisibleArea = visibleArea;
                activeSection = secction.getAttribute('id');
            }
        });

        navbarAnchor.forEach((a) => {
            a.classList.remove('active');
            if (a.getAttribute('href').substring(1) === activeSection) {
                a.classList.add('active');
            }
        });
    }
    function getVisibleArea(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
        return visibleHeight * visibleWidth;
    }
    window.addEventListener('scroll', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);
};
import { $ } from "../utils/utils.js";
import { texts } from "../constants/text.js";

export function RenderContactSection(currentLanguage) {
    let language = currentLanguage === 'en' ? texts.en : texts.es;
    const $contact = $('.section-contact')
    $contact.innerHTML = ` <h2><i class="fa-solid fa-address-book"></i>${language.contact.title}</h2>
      <h3>${language.contact.subtitle}</h3>
      <p>
       ${language.contact.description}
      </p>
      <p>
        ${language.contact.findMe}
      </p>

      <div class="contact-links">
        <a class="btn contact-details" href="https://github.com/DiegoMD4" target="_blank"><i
            class="fab fa-github"></i>GitHub</a>
        <a class="btn contact-details" href="https://linkedin.com/in/diego-montoya-1546aa218" target="_blank"><i
            class="fab fa-linkedin"></i>LinkedIn</a>
        <a class="btn contact-details" href="mailto:diego.montoy1701@outlook.com" target="_blank"><svg class="size-4"
            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
            <path d="M3 6l9 6l9 -6"></path>
            <path d="M15 18h6"></path>
            <path d="M18 15l3 3l-3 3"></path>
          </svg>${language.contact.email}</a>
      </div>`
}
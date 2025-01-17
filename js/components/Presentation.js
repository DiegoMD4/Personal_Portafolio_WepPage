import { texts } from "../constants/text.js";
import { $ } from "../utils/utils.js";

export function RenderSectionPresentation(currentLanguage) {
    let language = currentLanguage === 'en' ? texts.en : texts.es;
    const $section = $('.section-presentation')
    $section.innerHTML = `<div class="head-presentation">
        <img src="assets/me.jpg" alt="Diego Montoya" />
        <a href="https://linkedin.com/in/diego-montoya-1546aa218" target="_blank">${language.presentation.available}</a>
      </div>
      <h1 class="primary-title">${language.presentation.title}</h1>
      <p>
        ${language.presentation.description}
      </p>
      <footer class="networks-footer">
        <a name="linkedin" class="networks" href="https://linkedin.com/in/diego-montoya1701" target="_blank">
          <i class="ti ti-brand-linkedin"></i>LinkedIn</a>
        <a name="email" class="networks" href="mailto:diego.montoy1701@outlook.com" target="_blank">
          <i class="ti ti-mail-forward"></i>${language.presentation.email}</a>
      </footer>`
}
import { $ } from "../utils/utils.js";
import { texts } from "../constants/text.js";

export function RenderSkills(currentLanguage) {
    let language = currentLanguage === 'en' ? texts.en : texts.es;
    const $skills = $('.section-skills')
    $skills.innerHTML = `<h2><i class="fa-solid fa-user-check"></i>${language.skills.title}</h2>
      <ol>
        <li>
          <div class="skill-grid">
            <div class="outer-div">
              <div class="inner-div">
                <span>•</span>
                <h3>${language.skills.technicalSkills.title}</h3>
                <h4>${language.skills.technicalSkills.description}</h4>
              </div>
            </div>
            <div class="tech-icons">
              <i class="devicon-javascript-plain colored"></i>
              <i class="devicon-nodejs-plain-wordmark colored"></i>
              <i class="devicon-react-original colored"></i>
              <i class="devicon-mysql-plain-wordmark colored"></i>
              <i class="devicon-git-plain colored"></i>
              <i class="devicon-express-original colored"></i>
              <i class="devicon-css3-plain colored"></i>
              <i class="devicon-html5-plain-wordmark colored"></i>
              <i class="devicon-mongodb-plain-wordmark colored"></i>
            </div>
          </div>
        </li>
        <li>
          <div class="skill-grid">
            <div class="outer-div">
              <div class="inner-div">
                <span>•</span>
                <h3>${language.skills.softSkills.title}</h3>
                <h4>${language.skills.technicalSkills.description}</h4>
              </div>
            </div>
            <div class="soft-content">
              <p>${language.skills.softSkills.list}</p>
            </div>
          </div>
        </li>
      </ol>`
}
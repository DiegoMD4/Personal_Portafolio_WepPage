import { $ } from "../utils/utils.js";
export function Body(theme) {
    let oldTheme = theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    const $body = $('body')

    $body.classList.remove(oldTheme)
    $body.classList.add(theme)


}
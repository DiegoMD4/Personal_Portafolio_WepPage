const themeChangebtn = document.getElementById('themebtn');

document.getElementById('light').addEventListener('click', function () {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    themeChangebtn.classList.remove('ti-moon');
    themeChangebtn.classList.add('ti-sun');
});
document.getElementById('dark').addEventListener('click', function () {
    localStorage.setItem('theme', 'dark');
    themeChangebtn.classList.remove('ti-sun');
    themeChangebtn.classList.add('ti-moon');
    document.body.classList.add('dark-mode');
});

function showMenu(event) {
    event.stopPropagation();
    const menuTheme = document.getElementById('modal-theme');
    const display = getComputedStyle(menuTheme).display;

    if (display == 'none') {
        menuTheme.style.display = 'block';
    } else {
        menuTheme.style.display = 'none';
    }
}
themeChangebtn.addEventListener('click', showMenu);

document.addEventListener('click', function (event) {
    const modal = document.getElementById('modal-theme');

    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    }
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

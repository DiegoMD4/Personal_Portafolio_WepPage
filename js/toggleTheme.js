const themeChangebtn = document.getElementById('themebtn');
const themeMenuModal = document.getElementById('modal-theme');


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

function showMenu(event) {
    event.stopPropagation();
    const themeMenuModal = document.getElementById('modal-theme');
    const display = getComputedStyle(themeMenuModal).display;

    if (display == 'none') {
        themeMenuModal.style.display = 'block';
        themeMenuModal.classList.toggle('open');
    } else {
        themeMenuModal.style.display = 'none';
    }
}
themeChangebtn.addEventListener('click', function () {

    if (themeMenuModal.classList.contains('open')) {
        themeMenuModal.classList.remove('open');
    } else {
        themeMenuModal.classList.add('open');
    }
});

document.addEventListener('click', function() {
    if (!themeMenuModal.contains(event.target) && !themeChangebtn.contains(event.target)) {
        themeMenuModal.classList.remove('open');
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

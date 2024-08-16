const themeChangebtn = document.getElementById('themebtn');

const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeChangebtn.classList.remove('fa-sun');
        themeChangebtn.classList.add('fa-moon');
    } else {
        localStorage.setItem('theme', 'light');
        themeChangebtn.classList.remove('fa-moon');
        themeChangebtn.classList.add('fa-sun');
    }
};

themeChangebtn.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeChangebtn.classList.remove('fa-sun');
        themeChangebtn.classList.add('fa-moon');
    } else {
        document.body.classList.remove('dark-mode');
        themeChangebtn.classList.remove('fa-moon');
        themeChangebtn.classList.add('fa-sun');
    }
});
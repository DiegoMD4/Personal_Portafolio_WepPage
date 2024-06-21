// Selecciona los enlaces de navegación y agrega eventos de clic
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Selecciona el botón de cambio de tema
const themeChangebtn = document.getElementById('themebtn');

// Función para alternar el tema y guardar la preferencia en localStorage
const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

// Evento de clic para cambiar el tema
themeChangebtn.addEventListener('click', toggleTheme);

// Verifica el tema guardado en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

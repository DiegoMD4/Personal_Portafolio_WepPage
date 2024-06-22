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
        themeChangebtn.classList.remove('fa-sun')
        themeChangebtn.classList.add('fa-moon')
    } else {
        localStorage.setItem('theme', 'light');
        themeChangebtn.classList.remove("fa-moon")
        themeChangebtn.classList.add('fa-sun')

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


document.addEventListener("DOMContentLoaded", function() {
    const navList = document.querySelector('.nav-list');
    const maxScroll = 200; // Puedes ajustar este valor según tus necesidades

    function onScroll() {
        // Obtiene la cantidad de scroll vertical
        const scrollY = window.scrollY;

        // Calcula la opacidad en función del scroll
        let opacity = Math.min(scrollY / maxScroll, 1) * 0.3; // Ajusta la opacidad máxima a 0.3
        navList.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    }

    // Añadir el evento de scroll a la ventana
    window.addEventListener('scroll', onScroll);
});

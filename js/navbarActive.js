const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
        navLinks.forEach((link) => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// function showMenu(){
//     const menuTheme = document.getElementById('modal-theme');
//     const display = getComputedStyle(menuTheme).display;

//     if (display == 'none') {
//         menuTheme.style.display = 'block';
//     } else {
//         menuTheme.style.display = 'none';
//     }
// }


// const icon = document.getElementById('themebtn');
// icon.addEventListener('click', showMenu)

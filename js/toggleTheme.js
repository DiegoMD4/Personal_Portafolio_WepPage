const themeChangebtn = document.getElementById('themebtn');
const themeMenuModal = document.getElementById('modal-theme');




/* function showMenu(event) {
    event.stopPropagation();
    const themeMenuModal = document.getElementById('modal-theme');
    const display = getComputedStyle(themeMenuModal).display;

    if (display == 'none') {
        themeMenuModal.style.display = 'block';
        themeMenuModal.classList.toggle('open');
    } else {
        themeMenuModal.style.display = 'none';
    }
} */
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


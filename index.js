import './js/toggleTheme.js'
import './js/navbarActive.js'
import './js/toggleLanguage.js'

document.addEventListener('DOMContentLoaded', function () {
    const navList = document.querySelector('.nav');
    const maxScroll = 200;

    function onScroll() {
        const scrollY = window.scrollY;

        let opacity = Math.min(scrollY / maxScroll, 1) * 0.5;
        navList.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        navList.style.boxShadow = `0 4px 6px -1px rgba(0, 0, 0, ${opacity})`;
    }

    window.addEventListener('scroll', onScroll);
});

window.onload = function(){
    let secctions = document.querySelectorAll('section');
    let navbarAnchor = document.querySelectorAll('.nav a');

    function updateActiveSection() {
        let maxVisibleArea = 0;
        let activeSection = null;

        secctions.forEach((secction) => {
            const visibleArea = getVisibleArea(secction);
            if (visibleArea > maxVisibleArea) {
                maxVisibleArea = visibleArea;
                activeSection = secction.getAttribute('id');
            }
        });

        navbarAnchor.forEach((a) => {
            a.classList.remove('active');
            if (a.getAttribute('href').substring(1) === activeSection) {
                a.classList.add('active');
            }
        });
    }
    function getVisibleArea(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
        return visibleHeight * visibleWidth;
    }
    window.addEventListener('scroll', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);
};



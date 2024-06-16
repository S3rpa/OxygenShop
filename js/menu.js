document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    const toggleMenu = () => {
        if (menu.classList.contains('visible')) {
            menu.classList.remove('visible');
            hamburger.textContent = '☰';
        } else {
            menu.classList.add('visible');
            hamburger.textContent = '✕';
        }
    };

    const closeMenuOnResize = () => {
        if (window.innerWidth >= 1000 && menu.classList.contains('visible')) {
            menu.classList.remove('visible');     
        }
    };

    hamburger.addEventListener('click', toggleMenu);
    window.addEventListener('resize', closeMenuOnResize);
});

const sliderImages = document.querySelectorAll('.slider-container__slider img');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const dots = document.querySelectorAll('.dots__container__dot');
let counter = 0;
let autoplayInterval;

// Inicialización del autoplay
const startAutoplay = () => {
    autoplayInterval = setInterval(slideNext, 5000); 
};

const stopAutoplay = () => {
    clearInterval(autoplayInterval);
};

// Función para deslizar a la siguiente imagen
const slideNext = () =>{

    sliderImages[counter].classList.remove('active');
    dots[counter].classList.remove('active');
    sliderImages[counter].style.animation = 'next1 0.5s ease-in forwards';

    // Actualizar el contador
    counter = (counter + 1) % sliderImages.length;

    // Añadir clase activa y animación a la siguiente imagen

    sliderImages[counter].classList.add('active');
    dots[counter].classList.add('active');
    sliderImages[counter].style.animation = 'next2 0.5s ease-in forwards';
};


const slidePrev = () => {

    sliderImages[counter].classList.remove('active');
    dots[counter].classList.remove('active');
    sliderImages[counter].style.animation = 'prev1 0.5s ease-in forwards';

    // Actualizar el contador
    counter = (counter - 1 + sliderImages.length) % sliderImages.length;

    sliderImages[counter].classList.add('active');
    dots[counter].classList.add('active');
    sliderImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
};

// Añadir funcionalidad de clic en los puntos de navegación
dots.forEach((dot, index) =>{

    dot.addEventListener('click', () => {
        stopAutoplay();
        sliderImages[counter].classList.remove('active');
        dots[counter].classList.remove('active');

        counter = index;

        sliderImages[counter].classList.add('active');
        dots[counter].classList.add('active');
        startAutoplay();
    });
});

next.addEventListener('click', () => {
    stopAutoplay();
    slideNext();
    startAutoplay();
});

prev.addEventListener('click', () => {
    stopAutoplay();
    slidePrev();
    startAutoplay();
});

// Iniciar el autoplay al cargar la página
startAutoplay();

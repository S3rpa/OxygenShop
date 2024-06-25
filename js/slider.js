class Slider{
    constructor (){
    this._sliderImages = document.querySelectorAll('.slider-container__slider img');
    this._next = document.getElementById('next');
    this._prev = document.getElementById('prev');
    this._dots = document.querySelectorAll('.dots__container__dot');
    this._counter = 0;
    this._autoplayInterval = null;

    // Damos un valor this a la función con bind

    this.slideNext = this.slideNext.bind(this);
    this.slidePrev = this.slidePrev.bind(this);
    this.startAutoplay = this.startAutoplay.bind(this);
    this.stopAutoplay = this.stopAutoplay.bind(this);

    this.clickDots();

    this.startAutoplay();
    }
    
    get sliderImages() {
        return this._sliderImages;
    }

    get next() {
        return this._next;
    }

    get prev() {
        return this._prev;
    }

    get dots() {
        return this._dots;
    }

    get counter() {
        return this._counter;
    }

    get autoplayInterval() {
        return this._autoplayInterval;
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(this.slideNext, 5000); 
    };

    stopAutoplay(){
        clearInterval(this.autoplayInterval);
    };

    slideNext() {
        this._sliderImages[this._counter].classList.remove('active');
        this._dots[this._counter].classList.remove('active');
        this._sliderImages[this._counter].style.animation = 'next1 0.5s ease-in forwards';
    
        // Actualizar el contador
        this._counter = (this._counter + 1) % this._sliderImages.length;
    
        // Añadir clase activa y animación a la siguiente imagen
    
        this._sliderImages[this._counter].classList.add('active');
        this._dots[this._counter].classList.add('active');
        this._sliderImages[this._counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    slidePrev(){
        this._sliderImages[this._counter].classList.remove('active');
        this._dots[this._counter].classList.remove('active');
        this._sliderImages[this._counter].style.animation = 'prev1 0.5s ease-in forwards';
    
        // Actualizar el contador
        this._counter = (this._counter - 1 + this._sliderImages.length) % this._sliderImages.length;
    
        this._sliderImages[this._counter].classList.add('active');
        this._dots[this._counter].classList.add('active');
        this._sliderImages[this._counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    clickDots() {
        // Clic en los puntos de navegación
        this._dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.stopAutoplay();
                this._sliderImages[this._counter].classList.remove('active');
                this._dots[this._counter].classList.remove('active');

                this._counter = index;

                this._sliderImages[this._counter].classList.add('active');
                this._dots[this._counter].classList.add('active');
                this.startAutoplay();
            });
        });

    this._next.addEventListener('click', () => {
        this.stopAutoplay();
        this.slideNext();
        this.startAutoplay();
    });
    
    this._prev.addEventListener('click', () => {
        this.stopAutoplay();
        this.slidePrev();
        this.startAutoplay();
    });
    }
}
// Crear instancia del slider
const slider = new Slider();


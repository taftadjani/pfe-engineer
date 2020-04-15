// Getting variables
const nextBtn = document.querySelector('#arrow-next');
const prevBtn = document.querySelector('#arrow-prev');
const caroussel = document.querySelector('#hero-caroussel');
const slider = document.querySelector('#hero-slider');
const slideSelectors = document.querySelectorAll('.slide-selector');


//* index : l'index du slider showed
//* intervalId : l'intervalId permet de recuperer le setIntervalId permettant de bloquer le slide
var index = 0,
    intervalId = 0;

//* Functions
//* Reset all sections
const reset = () => {
    for (let i = 0; i < slider.children.length; i++) {
        const element = slider.children[i];
        const selector = slideSelectors[i];
        element.style.zIndex = 0;
        element.style.opacity = 0;
        selector.classList.remove('slide-selector-active');
    }
}

//* change slide
//* forward : direction avant
//* indexed : true means we don't increment and decrement
const changeSlide = (forward = true, indexed = false) => {
    if (forward && !indexed) {
        index = index < slider.children.length - 1 ? index + 1 : 0;
    } else if (!forward && !indexed) {
        index = index > 0 ? index - 1 : slider.children.length - 1;
    }
    slider.children[index].style.zIndex = 1;
    slider.children[index].style.opacity = 1;
    slideSelectors[index].classList.add('slide-selector-active');
}

//* Auto slide functions
const autoSlide = () => {
        intervalId = setInterval(() => {
            reset();
            changeSlide();
        }, 2000);
    }
    //* L'auto slide function 
autoSlide();

//* EventListeners
//* Caroussel 
caroussel.addEventListener('mouseover', () => {
    clearInterval(intervalId);
});
caroussel.addEventListener('mouseout', () => {
    autoSlide();
});
//* Slider next button
nextBtn.addEventListener('click', () => {
    reset();
    changeSlide();
});
//* Slider prev button
prevBtn.addEventListener('click', () => {
    reset();
    changeSlide(false);
});
//* Les listeners des selectors du slider
slideSelectors.forEach((selector, ind) => {
    selector.addEventListener('click', () => {
        reset();
        index = ind
        changeSlide(true, true);
    });
});
const carousselSlide = document.querySelector('.caroussel-slide');
const carousselImages = document.querySelectorAll('.caroussel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carousselImages[0].clientWidth;

carousselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Buttons listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carousselImages.length - 1) {
        return;
    }
    carousselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carousselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        return;
    }
    carousselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carousselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
carousselSlide.addEventListener('transitionend', () => {
    if (carousselImages[counter].id === "lastClone") {
        carousselSlide.style.transition = "none";
        counter = carousselImages.length - 2;
        carousselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carousselImages[counter].id === "firstClone") {
        carousselSlide.style.transition = "none";
        counter = carousselImages.length - counter;
        carousselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
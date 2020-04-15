// Version 1

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slider = document.querySelector('.slider');
const caroussel = document.querySelector('.caroussel');
var sectionIndex = 0,
    intervalId = 0;


function reset() {
    for (let i = 0; i < slider.children.length; i++) {
        const elt = slider.children[i];
        elt.style.zIndex = 0;
        elt.style.opacity = 0;
    }
}



// Auto slide

function startShow() {
    intervalId = setInterval(() => {
        reset();
        sectionIndex = sectionIndex < slider.children.length - 1 ? sectionIndex + 1 : 0;
        slider.children[sectionIndex].style.zIndex = 1;
        slider.children[sectionIndex].style.opacity = 1;

    }, 1000);
}
startShow();

caroussel.addEventListener('mouseover', () => {
    clearInterval(intervalId);
});
caroussel.addEventListener('mouseout', () => {
    startShow();
});
next.addEventListener('click', () => {
    reset();
    sectionIndex = sectionIndex < 4 ? ++sectionIndex : 0;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
});
prev.addEventListener('click', () => {
    reset();
    sectionIndex = sectionIndex > 0 ? --sectionIndex : 4;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
});
// Good Version 2

// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');
// const slider = document.querySelector('.slider');

// var element = 0;

// function showSlide(index) {
//     slider.children[index].style.zIndex = 1;
//     slider.children[index].style.opacity = 1;
// }

// function reset() {
//     for (let i = 0; i < slider.children.length; i++) {
//         const elt = slider.children[i];
//         elt.style.zIndex = 0;
//         elt.style.opacity = 0;
//     }
// }

// function startShow() {
//     setInterval(() => {
//         reset();
//         element = element < slider.children.length - 1 ? element + 1 : 0;
//         showSlide(element);
//     }, 5000);
// }

// startShow();

// next.addEventListener('click', () => {
//     element = element < slider.children.length - 1 ? element + 1 : 0;
//     reset();
//     showSlide(element);
// });

// prev.addEventListener('click', () => {
//     element = element > 0 ? element - 1 : 4;
//     reset();
//     showSlide(element);
// });
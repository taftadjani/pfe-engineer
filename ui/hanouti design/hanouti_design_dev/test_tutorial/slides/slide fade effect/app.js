// Version 1

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
slider = document.querySelector('.slider');


function reset() {
    for (let i = 0; i < slider.children.length; i++) {
        const elt = slider.children[i];
        elt.style.zIndex = 0;
        elt.style.opacity = 0;
    }
}
var sectionIndex = 0;
next.addEventListener('click', () => {
    reset();
    sectionIndex = sectionIndex < 4 ? ++sectionIndex : 4;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
});
prev.addEventListener('click', () => {
    reset();
    sectionIndex = sectionIndex > 0 ? --sectionIndex : 0;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
});
// Good Version 2

// function showSlide(index) {
//     slider.children[index].style.zIndex = 1;
//     slider.children[index].style.opacity = 1;
// }
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');
// const slider = document.querySelector('.slider');

// function reset() {
//     for (let i = 0; i < slider.children.length; i++) {
//         const elt = slider.children[i];
//         elt.style.zIndex = 0;
//         elt.style.opacity = 0;
//     }
// }

// var lastSwitch = 0,
//     nowSwitch, element = 0;
// nowSwitch = lastSwitch;
// next.addEventListener('click', () => {
//     element = element < slider.children.length - 1 ? element + 1 : 0;
//     lastSwitch++;
//     reset();
//     showSlide(element);
// });

// prev.addEventListener('click', () => {
//     element = element > 0 ? element - 1 : 4;
//     lastSwitch--;
//     reset();
//     showSlide(element);
// });
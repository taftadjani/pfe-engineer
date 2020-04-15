const amt_hamburger = document.querySelector('#amt-hamburger');
const alm_links = document.querySelectorAll('.alm-link');
console.log(alm_links);
//* Functions
const reset_Links = () => {
    alm_links.forEach((item) => {
        item.classList.remove('active');
    })
}

//* Listeners
amt_hamburger.addEventListener('click', () => {
    amt_hamburger.classList.toggle('active');
});

alm_links.forEach((item) => {
    item.addEventListener('click', (e) => {
        reset_Links();
        e.target.classList.add('active');
    });
});
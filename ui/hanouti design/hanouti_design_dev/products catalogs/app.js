//* Getting all variables
const pagination_ul = document.querySelector('#pcb-pagination ul');
const pagination_ul_li = document.querySelectorAll('#pcb-pagination ul li');
const pc_top_title = document.querySelector('#pc-top-title');
const pc_top_titles = pc_top_title.querySelectorAll('div');

//* Reset pagination func 
const resetPagination = () => {
    pagination_ul_li.forEach((item) => {
        item.classList.remove('pagination-active');
    });
}

const resetTitleStyles = () => {
    pc_top_titles.forEach((item) => {
        item.classList.remove('pc-tt-active');
    });
}

//* Listeners
pagination_ul_li.forEach((item) => {
    item.addEventListener('click', (e) => {
        resetPagination();
        e.target.classList.add('pagination-active');
    });
});

pc_top_titles.forEach((item) => {
    item.addEventListener('click', (e) => {
        resetTitleStyles();
        e.target.classList.add('pc-tt-active');
        console.log(e);

    });
});
//*
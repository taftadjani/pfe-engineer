const plus_sign = document.querySelector('#plus-sign');
const minus_sign = document.querySelector('#minus-sign');


if (minus_sign.classList.contains('deactivated')) {
    minus_sign.parentElement.classList.add('cursor-none');
} else {
    minus_sign.parentElement.classList.remove('cursor-none');
}

if (plus_sign.classList.contains('deactivated')) {
    plus_sign.parentElement.classList.add('cursor-none');
} else {
    plus_sign.parentElement.classList.remove('cursor-none');
}
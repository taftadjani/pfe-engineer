$(function() {
    var elemCount = 3;
    var current = 1;
    var elemWidth = 400;
    var move = 0;
    $('.next').click(() => {
        if (current < elemCount) {
            $('.slider .thumbs').toggleClass('move');
            move += elemWidth;
            $('.slider .thumbs').css('transform', 'translateX(-' + move + 'px)');
            current++;
        }
    });
    $('.prev').click(() => {
        if (current > 0) {
            $('.slider .thumbs').toggleClass('move');
            move -= elemWidth;
            current--;
            $('.slider .thumbs').css('transform', 'translateX(-' + move + 'px)');
        }
    })
})
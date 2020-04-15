$(document).ready(function() {
    var classList = ['spiderman', 'ironman', 'captain'];
    var mavelHeroSlider = new Swipper('.marvel-container .swipper-container', {
        loop: false,
        slidePreview: 1,
        pagination: {
            el: 'marcel-container .swipper-pagination',
            type: 'bullets',
            clickable: true
        }
    });
})
(function() {
    var slider612 = new IdealImageSlider.Slider({
        'selector': '#slider-612',
        'effect': 'slide',
        'transitionDuration': 600,
        'interval': 5000
    });
    slider612.start();

    var slider614 = new IdealImageSlider.Slider({
        'selector': '#slider-614',
        'effect': 'slide',
        'transitionDuration': 600,
        'interval': 5000
    });
    slider614.start();

    var slider616 = new IdealImageSlider.Slider({
        'selector': '#slider-616',
        'effect': 'slide',
        'transitionDuration': 600,
        'interval': 5000
    });
    slider616.start();

    $(document).on('click', '.tab', function() {
        if ($(this).hasClass('selected')) {
            return;
        }

        var opt = $(this).data('opt');
        $(this).siblings('.selected').removeClass('selected');
        $(this).addClass('selected');

        var selectedSlide = $('.unit-slides .slide.selected');
        setTimeout(function() {
            selectedSlide.removeClass('selected');
        }, 400);
        $('.unit-slides .slide-' + opt).addClass('selected');

    });
})();

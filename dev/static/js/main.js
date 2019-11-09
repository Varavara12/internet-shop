$(document).ready(function () {
    //Слайдер на главной странице
    $(".js-index-slider").slick({
        prevArrow: ".index-slider__controls--prev",
        nextArrow: ".index-slider__controls--next",
        dots: true,
        vertical: true,
        customPaging: function() {
            return '<a class="index-slider__dots"></a>';
        },
    });

    //Слайдер рекомендованых товаров
    $(".js-recommended-slider").slick({
        prevArrow: ".recommended-slider__controls--prev",
        nextArrow: ".recommended-slider__controls--next",

       appendDots: '.recommended-slider__nav',
       dots: true,
       slidesToShow: 4,
       slidesToScroll: 1,
        customPaging: function() {
            return '<a class="recommended-slider__dot"></a>';
        },
    });
    
    function indexSliderElemPos(elem,pos) {
        let windowsWidth = $(window).width(),
            containerWidth = $('.container').width(),
            leftPos = (windowsWidth-containerWidth)/2;
        $('.index-slider ' + elem).css(pos, leftPos);
    }
    indexSliderElemPos('.slick-dots', 'left');
    indexSliderElemPos('.index-slider__controls', 'right');



    $(window).resize(function () {
        indexSliderElemPos('.slick-dots', 'left');
        indexSliderElemPos('.index-slider__controls', 'right');
    });
    
    
    
});
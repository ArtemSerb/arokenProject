$(function(){
    var mixer = mixitup('.direction__list');
    $("#rateYo").rateYo({
        rating: 4.5
    });
    $('#btn').click(function(){
        $.fancybox.open({
            src: '#hidden',
            type: 'inline'
        });
    });
    $('.slider__boxes').slick({
        arrows: false,
        slidesToShow: 2,
        infinite: true,
        waitForAnimate: false,
        dots: true,
        responsive: [
        {
            breakpoint: 1100,
            settings: {
            slidesToShow: 1
            }
        }
        ]
    })
    $('.reviews__slider-prev').on('click', function(e) {
        e.preventDefault()
        $('.slider__boxes').slick('slickPrev')
    })
    $('.reviews__slider-next').on('click', function(e) {
        e.preventDefault()
        $('.slider__boxes').slick('slickNext')
    })
})
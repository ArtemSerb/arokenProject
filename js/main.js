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

    $('.feedback__link').on('click', function(e) {
        e.preventDefault()
        if ($(this).hasClass('feedback__link--active')) {
        $(this).removeClass('feedback__link--active')
        $(this).children('.feedback__acc-text').slideUp()
        } else {
        $('.feedback__link').removeClass('feedback__link--active')
        $('.feedback__acc-text').slideUp()
        $(this).addClass('feedback__link--active')
        $(this).children('.feedback__acc-text').slideDown()
        }
    })
    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
        } else {
        $('.burger').removeClass('burger--follow')
        }
    }, 0);
    $('.burger, .header__top a').on('click', function(e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.burger').toggleClass('open')
    })
})
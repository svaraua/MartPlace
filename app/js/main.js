$(function(){

    $(".rating").rate({
        max_value: 5,
        step_size: 0.1,
        readonly: true
    });

    let mix = $('.products__inner');
    if (mix) {
        var mixer = mixitup('.products__inner');
    }
    
    $('.slider__inner').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
      });
        
});
$(function(){
    $(".rate-star").rateYo({
        starWidth: "14px",
        readOnly: true,
        normalFill: "#fff",
        ratedFill: "#ffc000",
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="#ffc000" d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>'
    });

    $('.slider__inner').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
      });
    
    $('.followers__inner').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
      });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 315,
        from: 30,
        to: 300,
        drag_interval: true,
        min_interval: null,
        max_interval: null,
        prefix: "$",
        skin: "round"
    });

    let mix = $('.products__inner');
    if (mix) {
        var mixer = mixitup('.products__inner');
    };

});
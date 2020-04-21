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
    

});
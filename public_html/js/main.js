$(document).ready(function () {

    //PRODUCT SLIDER
    if ($('.product-slider').length > 0) {
        $('.product-slider').owlCarousel({
            dots:true,
            nav: true,
            items: 1,
            slideBy: 1,
            autoplay: true,
           
            responsive: {
                0: {

                },
                550: {

                },
                900: {

                },
                1200: {

                }
            }
        });
    }
    ;

});


$(document).ready(function () {
    
     function animation() {

        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {

            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }
    $(window).scroll(function () {
        animation();
    });
    animation();

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

 if ($('.pagination').length > 0) {
  $(function() {
    $(pagination).pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
});
}
});

 
 
 //VALIDATE FORM
    if($('.contact-form').length > 0){
    
    $('.contact-form').validate({
        
        highlight: function(element){
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight:function(element){
            $(element).addClass('is-valid').removeClass('is-invalid');
        },
        rules:{
            name:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
             subject:{
                required:true,
                
            },
            message:{
                required:true
            }
        },
        messages:{
            name:{
                required:'The Name* field is required',
            },
             email:{
                required:'The Email* field is required',
                email: 'Please provide a vali email address'
            },
             subject:{
                required:'The Subject* field is required',
            },
            message:{
                required:'The Message* field is required',
            }
        },
        
        errorElement: 'p',
          errorPlacement: function(error, element) {
        error.appendTo( element.closest(".form-group").find(".error-msg") );
  }

     });
   }




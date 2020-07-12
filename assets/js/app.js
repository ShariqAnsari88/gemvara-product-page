
$(document).ready(function(){

    let slickSlider = {
        productCarousel: $('.product-slider'),
        productCarouselNav: $('.slider-nav'),

        slick: function(el, slidesToShow, slidesToScroll, arrows, fade, asNavFor, dots, centerMode, focusOnSelect){
            
            el.slick({
                slidesToShow: slidesToShow,
                slidesToScroll: slidesToScroll,
                arrows: arrows,
                fade: fade,
                asNavFor: asNavFor,
                dots: dots,
                centerMode: centerMode,
                focusOnSelect: focusOnSelect
            });

        },
        init: function(){
            slickSlider.slick(slickSlider.productCarousel,1,1,false,true,'.slider-nav',false,null,null);
            slickSlider.slick(slickSlider.productCarouselNav,3,1,false,false,'.product-slider',false,true,true);
        }
    }

    //Functions initialization
    slickSlider.init();

    $('#paymentDd').on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#paymentOptions').toggleClass('show');
    });
    $('#paymentDd ul li li').on("click", function(){
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#dd-selected').text($(this).text());
    });
    $(document).click(function(e) {
        if($('#paymentOptions').hasClass('show')) {
            $('#paymentOptions').removeClass('show');
        }
    });

});

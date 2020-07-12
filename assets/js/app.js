
$(document).ready(function(){

    let slickSlider = {
        productCarousel: $('.product-slider'),
        productCarouselNav: $('.slider-nav'),
        relatedItemsCarousel: $(".related-slider"),

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
            slickSlider.slick(slickSlider.relatedItemsCarousel,1,1,true,false,null,true,null,null);
        }
    }

    //Functions initialization
    slickSlider.init();


    if ($(window).width() < 800) {
        $(".p-s-column h4").on("click", function () {
            $(".accr").slideUp();
            if ($(this).next(".accr").is(":not(:visible)")) {
                $(this).next(".accr").slideDown();
            }
        });
    }

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

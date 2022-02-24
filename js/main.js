;(function($){

    // Nav Toggle

    $(".nav-toggle").on("click",function(){

        $(".nav-cat-menu").slideToggle(300)
    })

    // News Scroll

    $(".ads-scroll").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:false,
        animateOut: 'fadeOut',
        smartSpeed:500,
        autoplay:true,
        mouseDrag:false
    })

    // Banner

    $(".arr-banner").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        animateOut: 'fadeOut',
        smartSpeed:300,
        autoplay:true
    })

    // Arrival Slider

    $(".dress-slider").owlCarousel({
        margin:10,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            992:{
                items:4
            }
        }
    })

})(jQuery);

(function(){


})()
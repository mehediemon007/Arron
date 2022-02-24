;(function($){

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
        items:4,
        margin:10,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    })

})(jQuery);

(function(){


})()
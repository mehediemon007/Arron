;(function($){

    // Nav Toggle

    $(".nav-toggle").on("click",function(){
        
        $("i",this).toggleClass("fa-bars fa-times")
        $(".nav-cat-menu").slideToggle(300)
    })
    
    // News Scroll

    $(".ads-scroll").owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        animateOut: 'fadeOut',
        smartSpeed:500,
        autoplay:true,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                loop:false,
                items:3
            }
        }
    })

    // Banner

    $(".aar-banner").owlCarousel({
        items:1,
        loop:true,
        nav:false,
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

    // Nav Modal

    $(".nav-item .fa-search").on("click",function(){

        $(".nav-modal").addClass("show");

    })

    $(".serach-close").on("click",function(){

        $(".nav-modal").removeClass("show")

    })

    // Campaign Slider

    $(".campaign-slider").owlCarousel({
        items:1,
        dots:false,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    })

})(jQuery);

(function(){


})()
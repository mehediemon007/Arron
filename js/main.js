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

    // Filter Widget

    $(".filter-toggle").on("click",function(){

        $(".category-wpr").toggleClass("hide");

        if($(".category-wpr.hide").length){
            $(this).css("color","#222222");
        }
        else{
            $(this).css("color","#d3d3d3");
        }
    })

    // Category Product

    $(".cat-products .single-cat-dress").slice(0, 12).show();
    $(".load-btn").on("click", function(e){
        e.preventDefault();
        $(".cat-products .single-cat-dress:hidden").slice(0, 8).slideDown()
        if ($(".cat-products .single-cat-dress:hidden").length == 0) {
            $(".load-btn").fadeOut('slow')
        }
    })

})(jQuery);

(function(){

    //Filter
    
    const filter = document.getElementsByClassName('filter-label');

    for(i=0;i<filter.length;i++){
        filter[i].addEventListener('click',function(){
            this.classList.toggle('active');
        })
    }

})()
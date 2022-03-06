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
    $(".total-products .load-btn").on("click", function(e){
        e.preventDefault();
        $(".cat-products .single-cat-dress:hidden").slice(0, 8).slideDown()
        if ($(".cat-products .single-cat-dress:hidden").length == 0) {
            $(".total-products .load-btn").fadeOut('slow')
        }
    })

    // Reviews

    $(".aar-reviews .single-review").slice(0, 2).show();
    $(".aar-reviews .load-btn").on("click", function(e){
        e.preventDefault();
        $(".aar-reviews .single-review:hidden").slice(0, 2).slideDown()
        if ($(".aar-reviews .single-review:hidden").length == 0) {
            $(".aar-reviews .load-btn").fadeOut('slow')
        }
    })

    // Nav Menu Tabs

    // $(".main-menu").click(function(){
    //     $(".categories").removeClass("active");
    //     $(this).addClass("active");
    //     $(".woo-categories-nav").removeClass("show")
    //     $(".woo-product-menu").addClass("show")
    // })

    // $(".categories").click(function(){
    //     $(".main-menu").removeClass("active");
    //     $(this).addClass("active");
    //     $(".woo-product-menu").removeClass("show")
    //     $(".woo-categories-nav").addClass("show")
    // })

    if($(window).width() <= 991){
       
        $(".nav-cat-menu .has-children a").on("click",function(e){

            e.preventDefault();
            $(this).next(".sub-menu").slideToggle("300");
            $("i",this).toggleClass("fa-plus fa-minus")
    
        })

    }

    $(".aar-faq .filter-label").on("click",function(){

        $("i",this).toggleClass("fa-minus fa-plus")
    })

    // Reviews Filtering

    $(".filter-toggle").on("click",function(){
        
        $(".filters").slideToggle("300")
    })

    // Dress zoom effect

    if($("#dress-zoom").length){

        $("#dress-zoom").exzoom({

        });
    }

    // Discount Code

    $(".dis-toggle").on("click",function(){

        $(".dis-form").slideToggle("300")
    })

    // Cart Popup Slider

    $('.cart-popup .cart-dresses').slick({
        // autoplay: true,
        vertical: true,
        infinite: true,
        // slidesPerRow: 4,
        slidesToShow: 2,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-up'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-angle-down'></i></button>"
    });

    // Toggle Btn

    // Toggle Theme

    if($("#theme-check").length){

        $("#theme-check").change(function(){

            $(".theme-switch").toggleClass("checked")
        })
    }

    // Login Tab

    $(".sign-in").click(function(){
        $(".sign-up").removeClass("active");
        $(this).addClass("active");
        $(".aar-sign-up").removeClass("show")
        $(".aar-sign-in").addClass("show")
    })

    $(".sign-up").click(function(){
        $(".sign-in").removeClass("active");
        $(this).addClass("active");
        $(".aar-sign-in").removeClass("show")
        $(".aar-sign-up").addClass("show")
    })

    // Wish Dress Update

    if($(".wish-change").length){

        $(".wish-change").on("click",function(e){
            e.preventDefault();
            $(this).parent().removeClass("show");
            $(this).parent().siblings(".size-quantity-filter").addClass("show");
        })

        $(".wish-upgrade").on("click",function(e){
            e.preventDefault();
            $(this).parent().parent().removeClass("show");
            $(this).parent().parent().siblings(".size-and-quantity").addClass("show");
        })
    }

    // Checkout cart

    $(".cart-toggle").click(function(){

        $(".arr-cart-total").toggleClass("show");
        $("i",this).toggleClass("fa-plus fa-minus");
    })

    // Dress Details

    $(".dress-images .slide-images").owlCarousel({
        items:1
    })

    if($(window).width() > 575){
        // $(".dress-images .slide-images").owlCarousel().des
    }

})(jQuery);

(function(){

    //Filter
    
    const filter = document.getElementsByClassName('filter-label');

    for(i=0;i<filter.length;i++){
        filter[i].addEventListener('click',function(){
            this.classList.toggle('active');
        })
    }

    // Price Range Filter

    const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
            
            if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                if(e.target.className === "input-min"){
                    rangeInput[0].value = minPrice;
                    range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                }else{
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

            if((maxVal - minVal) < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal - priceGap
                }else{
                    rangeInput[1].value = minVal + priceGap;
                }
            }else{
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });

    // Dress Slide Active Thumb

    const thumbImgs = document.getElementsByClassName("thumb-images")[0];

    if(thumbImgs != null){

        const thumbLinks = thumbImgs.querySelectorAll(".single-image a");

        for(let i=0; i < thumbLinks.length ; i++){

            thumbLinks[i].addEventListener("click",function(){
                
                let current = document.getElementsByClassName("thumb-active");
                current[0].className = current[0].classList.remove("thumb-active")
                this.className +="thumb-active"
            })
        }
    }

})()
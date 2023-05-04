
/* ==============================================
Custom Javascript
=============================================== */

(function ($) {
    "use strict";


    document.getElementById("yearText").innerHTML = new Date().getFullYear();

    $('.theme-accordian [data-bs-toggle="collapse"]').on('click', function (e) {
        if ($(this).parents('.accordion').find('.collapse.show')) {
            var idx = $(this).index('[data-bs-toggle="collapse"]');
            if (idx == $('.collapse.show').index('.collapse')) {
                // prevent collapse
                e.stopPropagation();
            }
        }
    });

    $("[data-trigger]").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id =  $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('html').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    });

    $(".navbar-toggler, .close-nav").on("click", function(e){
        $('html').toggleClass("sidenav-open");
    });

    // Close menu when pressing ESC
    $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
           $(".mobile-offcanvas").removeClass("show");
           $(".screen-overlay").removeClass("show");
           $("body").removeClass("overlay-active");
        }
    });

    $(".btn-close, .screen-overlay").on('click', function(e){
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("html").removeClass("offcanvas-active");
    }); 

    // Loader Animation
    $(window).on("load",function () {
        $("#pageloader").delay(1200).fadeOut("slow");
        $(".loader-item").delay(700).fadeOut();
    });

    feather.replace({ 'stroke-width': 1.5 });


    var custom_js = {

        bootstrap_menu: function () {
            if ($('.dropdown-menu a.dropdown-toggle-mob').length) {

                // Dropdown Menu For Mobile
                $('.dropdown-menu a.dropdown-toggle-mob').on('click', function (e) {
                    if (!$(this).next().hasClass('show')) {
                        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                    }
                    var $subMenu = $(this).next(".dropdown-menu");
                    $subMenu.toggleClass('show');

                    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                        $('.dropdown-submenu .show').removeClass("show");
                    });

                    return false;
                });
            }
        },

        smooth_scroll: function () {
            if ($('#navbarCollapse').length) {

                // Add smooth scrolling on all links inside the navbar
                $("#navbarCollapse a, .navbar-brand").on('click', function (event) {
                    // Make sure this.hash has a value before overriding default behavior
                    if (this.hash !== "") {
                        event.preventDefault();
                        var hash = this.hash;
                        $('html, body').animate({
                            scrollTop: $(hash).offset().top
                        },
                            800, function () {
                            });
                    }
                });
            }
        },

        menu_close: function () {
            if ($('#navbarCollapse').length) {
                $('.navbar-onepage a').on( "click", function($e) {
                    //$e.preventDefault();
                    $('.navbar-collapse').removeClass('show').addClass("collapse");
                    $('.navbar-toggler').addClass('collapsed');
                    $('html').removeClass("sidenav-open");
            
                });
            }
        },

        header_anim: function () {
            if ($('.header-anim').length) {

                // On Scroll Header Style One
                $(window).on("scroll",function(){
                    if ($(this).scrollTop() > 100) {
                        $('.header-fullpage').addClass('fixed animated fadeInDown');
                    } else {
                        $('.header-fullpage').removeClass('fixed animated fadeInDown');
                    }
                });
            }
        },

        back_to_top: function () {

            if ($('#mkdf-back-to-top').length) {

                // On Scroll Back To Top Arrow
                $(window).on("scroll",function(){
                    if ($(this).scrollTop() > 100) {
                        $('#mkdf-back-to-top').addClass('on');
                    } else {
                        $('#mkdf-back-to-top').removeClass('on');
                    }
                });

                $('#mkdf-back-to-top').on('click', function(e) {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    $e.preventDefault();        
                });
            }
        },

        tooltip_globally: function () {
            if ($('[data-bs-toggle="tooltip"]').length) {                
                $('[data-bs-toggle="tooltip"]').tooltip();
            }
        },

        // Popup Gallery & Videos
        magnific_popup: function () {
            if ($('.popup-video').length) {
                $('.popup-video').magnificPopup({
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: true,
                    fixedContentPos: true
                });
            }
        },

        // Search Popup
        search_overlay: function () {
            if ($('.overlay-close').length) {

                $('#search_home, .overlay-close').on("click", function ($e) {
                    $e.preventDefault();
                    $(".overlay").toggleClass("open");
                });
            }
        },

        isotope_gallery: function () {

            // Porfolio isotope and filter
            $(window).on('load', function () {
                var portfolioIsotope = $('.isotope-gallery').isotope({
                    itemSelector: '.gallery-item'
                });

                $('#portfolio-flters li').on('click', function () {
                    $("#portfolio-flters li").removeClass('filter-active');
                    $(this).addClass('filter-active');

                    portfolioIsotope.isotope({
                        filter: $(this).data('filter')
                    });
                    //aos_init();
                });
            });
        },

        isotope_gallery_slider: function () {
            $('.gallery-item').magnificPopup({
                delegate: 'span',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                    
                }
            });
        },

        portfolio_gallery : function(){

            if( $('.portfolio-img-gallery').length ){

                $('.portfolio-img-gallery').each(function() { // the containers for all your galleries
                    $(this).magnificPopup({
                        delegate: 'a', // the selector for gallery item
                        type: 'image',
                        gallery: {
                            enabled: true, // set to true to enable gallery
                        
                            preload: [0,2], // read about this option in next Lazy-loading section
                        
                            navigateByImgClick: true,
                        
                            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                        
                            tPrev: 'Previous (Left arrow key)', // title for left button
                            tNext: 'Next (Right arrow key)', // title for right button
                            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
                        }
                    });
                });
            }
        },
       
        // Animated Skill Bars  
        animated_skillbar: function () {
            if ($('.skillbar').length) {

                // Animated Skill Bars      
                $('.skillbar').appear();
                $('.skillbar').on('appear', function () {
                    $(this).find('.skillbar-bar').animate({
                        width: $(this).attr('data-percent')
                    }, 3000);
                });
            }
        },

        // Animated Counter
        animated_counter: function () {
            if ($('.counter').length) {

                $('.counter').counterUp({
                    delay: 80,
                    time: 4000
                });
            }
        },

        wow_animation : function(){
            var wow = new WOW(
                {
                    boxClass: 'wow',      // default
                    animateClass: 'animated', // default
                    offset: 0,          // default
                    mobile: true,       // default
                    live: true        // default
                }
            )
            wow.init();
        },   

        // sale Countdown
        sale_countdown: function () {
            if ($('.sale-countdown').length) {

                $('.sale-countdown').countdown({
                    date: '03/27/2026 17:00:00',
                    offset: +2,
                    day: 'Day',
                    days: 'Days',
                    hideOnComplete: true
                });
            }
        },

        // Flickr Photostream
        flickr_feed: function () {
            if ($('#basicuse').length) {

                $('#basicuse').jflickrfeed({
                    limit: 6,
                    qstrings: {
                        id: '52617155@N08'
                    },
                    itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
                });
            }
        },

        // Flickr Photostream
        select_nice: function () {
            if ($('select').length) {

                $('select').niceSelect();
            }
        },

        contact_form_validate : function(){
            $("#contact_form").validate({
                meta: "validate",
                submitHandler: function (form) {
        
                    var s_name = $("#name").val();
                    var s_lastname = $("#lastname").val();
                    var s_email = $("#email").val();
                    var s_phone = $("#phone").val();
                    var s_suject = $("#subject").val();
                    var s_comment = $("#comment").val();
                    $.post("contact.php", {
                        name: s_name,
                        lastname: s_lastname,
                        email: s_email,
                        phone: s_phone,
                        subject: s_suject,
                        comment: s_comment
                    },
                        function (result) {
                            $('#sucessmessage').append(result);
                        });
                    $('#contact_form').hide();
                    return false;
                },
                /* */
                rules: {
                    name: "required",
        
                    lastname: "required",
                    // simple rule, converted to {required:true}
                    email: { // compound rule
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true,
                    },
                    comment: {
                        required: true
                    },
                    subject: {
                        required: true
                    }
                },
                messages: {
                    name: "Please enter your name.",
                    lastname: "Please enter your last name.",
                    email: {
                        required: "Please enter email.",
                        email: "Please enter valid email"
                    },
                    phone: "Please enter a phone.",
                    subject: "Please enter your message.",
                    comment: "Please enter a comment."
                },
            });  
        },

        minus_btn: function () {
            if ($('.minus-btn').length) {

                $('.minus-btn').on('click', function(e) {
                    e.preventDefault();
                    var $this = $(this);
                    var $input = $this.closest('div').find('input');
                    var value = parseInt($input.val());
            
                    if (value > 1) {
                        value = value - 1;
                    } else {
                        value = 0;
                    }
            
                    $input.val(value);
            
                });
            }
        },

        plus_btn: function () {
            if ($('.plus-btn').length) {

                $('.plus-btn').on('click', function(e) {
                    e.preventDefault();
                    var $this = $(this);
                    var $input = $this.closest('div').find('input');
                    var value = parseInt($input.val());
            
                    if (value < 100) {
                        value = value + 1;
                    } else {
                        value =100;
                    }
            
                    $input.val(value);
                });
            }
        },

        // All Slider Script
        testimonial_rounded: function () {
            if ($('#testimonial-rounded').length) {
                $("#testimonial-rounded").owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: true,
                    nav: true,
                    slideBy: 1,
                    dots: false,
                    center: false,
                    autoplay: false,
                    autoheight: true,
                    navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>']
                }); 
            }

        },
        bg_testimonial: function () {
            if ($('#bg-testimonial').length) {
                $("#bg-testimonial").owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    nav: false,
                    slideBy: 1,
                    dots: true,
                    center: false,
                    autoplay: true,
                    autoheight: true,
                    navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>']
                }); 
            }

        },
        testimonial_rounded_multi: function () {
            if ($('#testimonial-rounded-multi').length) {
                $("#testimonial-rounded-multi").owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: true,
                    center:true,
                    nav: false,
                    slideBy: 1,
                    dots: true,
                    autoplay: true,
                    autoheight: true,
                    navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
                    responsive: {
                        320: {
                            items: 1,
                        },
                        600: {
                            items: 2,
                        },
                        767: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                            loop: true,
                        },
                        1200: {
                            items: 3,
                            loop: true,
                        }
                    }
                }); 
            }
        },
        testimonial_side_img: function () {
            if ($('#testimonial-side-img').length) {
                $("#testimonial-side-img").owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: true,
                    center:false,
                    nav: true,
                    slideBy: 1,
                    dots: false,
                    autoplay: false,
                    autoheight: true,
                    navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
                    responsive: {
                        320: {
                            items: 1,
                        },
                        600: {
                            items: 1,
                        },
                        800: {
                            items: 1,
                        },
                        1000: {
                            items: 2,
                        }
                    }
                });
            }
        },
        team_slider_about: function () {
            if ($('#team-slider-about').length) {
                $("#team-slider-about").owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    center:false,
                    nav: true,
                    slideBy: 1,
                    dots: false,
                    autoplay: false,
                    autoheight: true,
                    navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
                    responsive: {
                        320: {
                            items: 1,
                        },
                        767: {
                            items: 2,
                        },
                        800: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                        }
                    }
                });
            }

        },
        adopt_love_one: function () {
            if ($('#adopt-love-one').length) {

                $("#adopt-love-one").owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    center:false,
                    nav: true,
                    slideBy: 1,
                    dots: false,
                    autoplay: false,
                    autoheight: true,
                    navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
                    responsive: {
                        320: {
                            items: 1,
                        },
                        767: {
                            items: 2,
                        },
                        800: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                        }
                    }
                }); 
            }

        },
        gallery_sliding: function () {

            if ($('#gallery-sliding').length) {
                $("#gallery-sliding").owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    center:false,
                    nav: false,
                    slideBy: 1,
                    dots: true,
                    autoplay: false,
                    autoheight: true,
                    navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
                    responsive: {
                        320: {
                            items: 1,
                        },
                        600: {
                            items: 2,
                        },
                        880: {
                            items: 3,
                        },
                        1200: {
                            items: 5,
                        }
                    }
                }); 
            }

        },
        affordable_pet_sitter: function () {

            if ($('#affordable-pet-sitter').length) {
                $("#affordable-pet-sitter").owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: true,
                    center:false,
                    nav: true,
                    slideBy: 1,
                    dots: false,
                    autoplay: true,
                    autoheight: true,
                    navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
                    responsive: {
                        320: {
                            items: 1,
                        },
                        600: {
                            items: 2,
                        },
                        880: {
                            items: 2,
                        },
                        1200: {
                            items: 2,
                        }
                    }
                }); 
            }

        },
        home_clients_rounded: function () {

            if ($('#home-clients-rounded').length) {
                $("#home-clients-rounded").owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: true,
                    nav: false,
                    slideBy: 1,
                    dots: false,
                    center: false,
                    autoplay: true,
                    autoheight: true,
                    navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
                    responsive: {
                        320: {
                            items: 2,
                        },
                        600: {
                            items: 3,
                        },
                        767: {
                            items: 3,
                        },
                        1000: {
                            items: 4,
                            loop: true,
                        },
                        1200: {
                            items: 6,
                            loop: true,
                        }
                    }
                });
            }

        },
        home_clients: function () {

            if ($('#home-clients').length) {
                $("#home-clients").owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: true,
                    nav: false,
                    slideBy: 1,
                    dots: false,
                    center: false,
                    autoplay: true,
                    autoheight: true,
                    navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
                    responsive: {
                        320: {
                            items: 2,
                        },
                        600: {
                            items: 3,
                        },
                        767: {
                            items: 3,
                        },
                        1000: {
                            items: 4,
                            loop: true,
                        },
                        1200: {
                            items: 6,
                            loop: true,
                        }
                    }
                });
            }

        },
        blog_slider_services: function () {

            if ($('#blog-slider-services').length) {
                $("#blog-slider-services").owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: true,
                    nav: false,
                    slideBy: 1,
                    dots: true,
                    center: false,
                    autoplay: true,
                    autoheight: true,
                    navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
                    responsive: {
                        320: {
                            items: 1,
                        },
                        600: {
                            items: 2,
                        },
                        767: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                            loop: true,
                        },
                        1200: {
                            items: 3,
                            loop: true,
                        }
                    }
                }); 
            }

        },
        blog_slider_home_one: function () {

            if ($('#blog-slider-home-one').length) {
                $("#blog-slider-home-one").owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    nav: true,
                    slideBy: 1,
                    dots: false,
                    center: false,
                    autoplay: false,
                    autoheight: true,
                    navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
                    responsive: {
                        320: {
                            items: 1,
                        },
                        600: {
                            items: 2,
                        },
                        767: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                            loop: true,
                        },
                        1200: {
                            items: 3,
                            loop: true,
                        }
                    }
                });
            }

        },
        home_shop_slider: function () {

            if ($('#home-shop-slider').length) {
                $("#home-shop-slider").owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    nav: false,
                    slideBy: 1,
                    dots: true,
                    center: false,
                    autoplay: true,
                    autoheight: true,
                    navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
                    responsive: {
                        320: {
                            items: 1,
                        },
                        600: {
                            items: 2,
                        },
                        767: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                            loop: true,
                        },
                        1200: {
                            items: 4,
                            loop: true,
                        }
                    }
                });
            }

        },
        services_details: function () {

            if ($('#services-details').length) {
                $("#services-details").owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    nav: false,
                    slideBy: 1,
                    dots: true,
                    center: false,
                    autoplay: true,
                    autoheight: true,
                    navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
                    responsive: {
                        320: {
                            items: 1,
                        },
                        600: {
                            items: 2,
                        },
                        767: {
                            items: 2,
                        },
                        1000: {
                            items: 3,
                            loop: true,
                        },
                        1200: {
                            items: 4,
                            loop: true,
                        }
                    }
                });
            }

        },
        gallery_single: function () {
            if ($('#gallery-single').length) {

                $("#gallery-single").owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: true,
                    nav: false,
                    slideBy: 1,
                    dots: true,
                    center: false,
                    autoplay: true,
                    autoheight: true,
                });
            }

        },        
        // All Slider Script
          

        initializ: function () {

            this.bootstrap_menu();
            this.smooth_scroll();
            this.menu_close();
            this.header_anim();
            this.back_to_top();
            this.tooltip_globally();
            this.magnific_popup();
            this.search_overlay();
            this.isotope_gallery();
            this.isotope_gallery_slider();
            this.portfolio_gallery();
            this.animated_skillbar();
            this.animated_counter();
            this.wow_animation();
            this.sale_countdown();
            this.flickr_feed();
            this.select_nice();
            this.contact_form_validate();
            this.minus_btn();
            this.plus_btn();

            // All Slider Script
            this.testimonial_rounded();
            this.bg_testimonial();
            this.testimonial_rounded_multi();
            this.testimonial_side_img();
            this.team_slider_about();
            this.adopt_love_one();
            this.gallery_sliding();
            this.affordable_pet_sitter();
            this.home_clients_rounded();
            this.home_clients();
            this.blog_slider_services();
            this.blog_slider_home_one();
            this.home_shop_slider();
            this.services_details();
            this.gallery_single();
            // All Slider Script
        }

    }

    /* ---------------------------------------------
    Document ready function
    --------------------------------------------- */
    $(function () {
        custom_js.initializ();
    });


    

    

    

    

    

    

})(jQuery);

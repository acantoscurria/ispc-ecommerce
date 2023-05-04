
/* ==============================================
Custom Javascript
=============================================== */

(function ($) { 
    "use strict";

    document.getElementById("yearText").innerHTML = new Date().getFullYear();

    $(window).on("load",function(){        
        $("#pageloader").delay(1200).fadeOut("slow");
        $(".loader-item").delay(700).fadeOut();    
    });

    // Add smooth scrolling on all links inside the navbar
    $("#navbarCollapse a, .navbar-brand").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
                800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    //window.location.hash = hash;
                });
        } // End if
    });

    $('.navbar-onepage a').on( "click", function($e) {
        //$e.preventDefault();
        $('.navbar-collapse').removeClass('show').addClass("collapse");
        $('.navbar-toggler').addClass('collapsed');
        $('html').removeClass("sidenav-open");

    });

    // Flickr Photostream
    $('#basicuse').jflickrfeed({
        limit: 6,
        qstrings: {
            id: '52617155@N08'
        },
        itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    });

    // On Scroll Animation
    new WOW().init();

    feather.replace({ 'stroke-width': 1.5 });

    $('select').niceSelect();

    $('.theme-accordian [data-toggle="collapse"]').on('click', function (e) {
        if ($(this).parents('.accordion').find('.collapse.show')) {
            var idx = $(this).index('[data-toggle="collapse"]');
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


  	// Dropdown Menu For Mobile
	$('.dropdown-menu a.dropdown-toggle-mob').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });

      return false;
    });

    $('[data-toggle="tooltip"]').tooltip()


	// On Scroll Header Style One
	$(window).on("scroll",function(){
        if ($(this).scrollTop() > 100) {
            $('.header-fullpage').addClass('fixed animated fadeInDown');
        } else {
            $('.header-fullpage').removeClass('fixed animated fadeInDown');
        }
    });

    $('#search_home, .overlay-close').on( "click", function($e) {
      $e.preventDefault();
      $(".overlay").toggleClass("open");     
   });

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
    
    // Animated Skill Bars      
    $('.skillbar').appear();
        $('.skillbar').on('appear', function () {           
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 3000);           
    });


    // Open Video
    $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: true
    });

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

    

    

    $("#home-clients, #home-clients-rounded").owlCarousel({
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

    /* Conter */
    $('.counter').counterUp({
        delay: 80,
        time: 4000
    });

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
        });
    });

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

    $('.sale-countdown').countdown({
        date: '03/27/2021 17:00:00',
        offset: +2,
        day: 'Day',
        days: 'Days',
        hideOnComplete: true
    });

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
})(jQuery);

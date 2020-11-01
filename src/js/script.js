
$(document).ready(function() {

        // Hamburger vannila JS

        let hamburger = document.querySelector('.hamburger');
        let promo = document.querySelector('.promo__content');
        let header = document.querySelector('.header');
        let headerNav = document.querySelector('.header__nav');
        let headerList = document.querySelector('.header__list');
        let headerContent = document.querySelector('.header__content');

        hamburger.addEventListener('click', function(){
            this.classList.toggle('active');
            promo.classList.toggle('hide');
            header.classList.toggle('active');
            header.classList.toggle('fade');
            headerNav.classList.toggle('active');
            headerList.classList.toggle('active');
            headerContent.classList.toggle('active');
        
        let headerLinks = document.querySelectorAll('.header__link');

        headerLinks.forEach(function(link){
            link.addEventListener('click', function(){
                document.body.classList.remove('screen-block');
            });
        });
    });

   // Slick-slider jquery

    $('.team__gallery').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
                {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
                },
                {
                    breakpoint: 769,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 320,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  dots: true
                }
              }
             ]
        
        })
    


    // Tabs

    $('ul.works__tabs').on('click', 'li:not(.works__tab_active)', function() {
    $(this)
        .addClass('works__tab_active').siblings().removeClass('works__tab_active')
        .closest('div.container').find('div.works__content').removeClass('works__content_active').eq($(this).index()).addClass('works__content_active');
    });

    // Header Scroll

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".header").addClass("bright");
        } else {
            $(".header").removeClass("bright");
        }
    });

    // Second Slider

    $('.clients__reviews').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
              }
            },
            
        ]
        
    });

    // Page up

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      });
      
      $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });

});


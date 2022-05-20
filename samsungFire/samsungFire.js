
$(document).ready(function(){

    //헤더 메뉴//
    $(".menu").hover(function(){
        $(this).children(".menuWrapper").toggleClass("on");
    })

    // 스와이퍼 //
    var swiper = new Swiper(".mySwiper", {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true,
        on: {
            init: function() {
                thisSlide = this;
                autoPlayBtn = $(".mainBannerBtn");
                autoPlayBtn.on('click',function(){
                    autoPlayState = autoPlayBtn.attr('aria-pressed');
                    if (autoPlayState === 'false') {
                        autoPlayBtn.attr('aria-pressed','true');
                        thisSlide.autoplay.stop();
                        autoPlayBtn.addClass('stop');
                    } else if (autoPlayState === 'true') {
                        autoPlayBtn.attr('aria-pressed','false');
                        thisSlide.autoplay.start();
                        autoPlayBtn.removeClass('stop');
                    }
                })
            }
        }
    });

    // 메뉴 버튼 클릭하면 해당 섹션으로 이동
    $('.prodBtn > a').on('click',function(){
        var _target = $(this).attr('href');
        var offset = $(_target).offset();

        $('html').animate({scrollTop : offset.top - 250}, 400);
    });

    // 우측 사이드 메뉴 //
    $(".guideBtn").on('click',function(){
        $("aside").toggleClass('off');
        $(this).toggleClass('off'); 
    });

    $(".relPage").hover(function(){
        $(".relPageList").toggleClass('on');
    });

    // 스크롤시 서브메뉴 색상 변경 //
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var $section = $('.wrapper > section');
        
        for(let i=0; i<$section.length; i++){
            let sectionTop = $section.eq(i).offset().top;
            let sectionBtm = sectionTop + $section.eq(i).outerHeight();
            
            if(scrollTop >= sectionTop - 300 && scrollTop < sectionBtm - 300){
                $('.prodBtn > a').removeClass('active');
                $('.prodBtn > a').eq(i).addClass('active')

            }
        }
    });
})
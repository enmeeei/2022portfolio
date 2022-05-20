$(document).ready(function(){

    // 헤더 색상 전환
    function logoWhite() {
        $("#header .mainlogo.black").removeClass('black');
        $("#header .mainlogo").addClass('white');
    }
    function logoBlack() {
        $("#header .mainlogo.white").removeClass('white');
        $("#header .mainlogo").addClass('black');
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 60) {
            $("#header").addClass('scroll');
            logoBlack();
        } 
        else {
            $("#header").removeClass('scroll');
            logoWhite();
        }
    });

    $("#header").mouseover(function(){
        if ($(window).scrollTop() < 60) {
            $(this).addClass('scroll');
            logoBlack();
        }
    })
    $("header").mouseout(function(){
        if ($(window).scrollTop() < 60) {
            $(this).removeClass('scroll');
            logoWhite();
        }
    })



    // 헤더 메뉴 슬라이드
    $(".menu").hover(function(){
        $(this).children($(".list_bg")).toggleClass('on');        
    })



    // 배너 영역 스와이프
    let banner = $(".prod-promo");
    let bannerWidth = $("body").width();

    var swiper = new Swiper(".mySwiper", {
        navigation: true,
        loop: true,
        speed: 250,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        keyboard: true,
    
        on: {
          init: function() {
            let thisSlide = this;
            banner.on('click', function(e){
                let x = e.clientX, y = e.clientY;
              if ((x < bannerWidth / 2) && (!$(e.target).hasClass("txt")) &&(!$(e.target).hasClass("icon_yellow")) &&(!$(e.target).hasClass("icon_arrow"))){
                thisSlide.slidePrev();
              }
              else if (x > bannerWidth / 2) {
                thisSlide.slideNext();              
              }
            })
          }       
        }   
    })

   // 배너 영역에서 커서 위치에 따른 모양 변경
    console.log(bannerWidth / 2)
    banner.mousemove(function(e){
        let x = e.clientX, y = e.clientY;
        if (x < bannerWidth / 2) {
            $(".prev").show();
            $(".next").hide();
            banner.removeClass('cursor_change');
        }
        else {
            $(".prev").hide();
            $(".next").show();
            banner.addClass('cursor_change');
        }
    });

    // 배너 영역에서 특정 위치에 따른 커서 생성 및 삭제
    let cursor = $(".cursor");
    banner.mouseover(function(){
        cursor.show();
    })
    banner.mouseout(function(){
        cursor.hide();
    })
    
    opacity0($(".tit h2"));
    opacity0($(".tit p"));
    opacity0($(".btn-link span"));

    function opacity0(el) {
        el.hover(function(){
            cursor.toggleClass('off');
        })
    }


    // 배너 영역 링크 버튼 애니메이션 
    $(".btn-link").hover(function(){
        $(this).children().toggleClass('on');
    })



    //비디오 영역 컨트롤 버튼
    let video = $(".video-wrapper video");

    $("#playIcon").on('click',function(){
        video.get(0).play();
        $(this).hide();
        $("#pauseIcon").show();
    });

    $("#pauseIcon").on('click', function(){
        video.get(0).pause();
        $(this).hide();
        $("#playIcon").show();
    })

    $("#btn_screen").on('click',function(){
        $(".screen_video").show();
        $("#heykakaoVideo").get(0).play();
    })

    $(".screen_video").on('click',function(e){
        if (!$(e.target).hasClass('screenVideo')) {
            $(this).hide();
            $(".screen_video video").trigger('pause');
        }
    })



    // 푸터 영역 버튼
    $("#backToTop").on('click', function(){
        let offset = $(".prod-promo").offset();
        $('html').animate({scrollTop: offset.top}, 600);
    })
})
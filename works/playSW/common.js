$(document).ready(function() {

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 80) {
      $("#header").addClass("scroll");
    } else {
      $("#header").removeClass("scroll");
    }
  });

    var swiper1 = new Swiper("#softwareSwiper", {
    slidesPerView: "auto",
    spaceBetween: 60,
    navigation: {
      prevEl: "#softwareBtnPrev",
      nextEl: "#softwareBtnNext",
    }
  });

  var swiper2 = new Swiper('#newsSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    navigation: {
        prevEl: "#newsBtnPrev",
        nextEl: "#newsBtnNext",
    }
  }); 

  let footerTop = $("#footer").offset().top;
  let videoTop = $(".ai_video").offset().top;

  $(window).scroll(function() {
    let scrollTop = $(document).scrollTop();
    let scrollBottom = scrollTop + $(window).height();
    if (scrollBottom < videoTop || scrollBottom > footerTop) {
      $(".entry").removeClass('on');
      $(".entry").hide();
    }
    else {
      $(".entry").addClass('on');
      $(".entry").show();
    }
  })

});
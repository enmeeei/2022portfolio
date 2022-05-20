let cursor = document.getElementsByClassName("cursor")[0];
let banner = document.getElementsByClassName("prod-promo")[0];
let slide = banner.querySelectorAll("div.swiper-slide")
let x, y;   
const mouseFunc = (e) => {
  x = e.clientX, y = e.clientY; 
    cursor.style.transform = `translate(${x}px, ${y}px)`
}

window.onload = () => {
    banner.addEventListener("mousemove", mouseFunc);
}

let bannerWidth = document.body.offsetWidth;



// var swiper = new Swiper(".mySwiper", {
//     navigation: true,
//     loop: true,
//     speed: 250,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     keyboard: true,

//     on: {
//       init: function() {
//         let thisSlide = this;
//         banner.addEventListener('click', function(e){
//           x = e.clientX, y = e.clientY; 
//           console.log(thisSlide.realIndex);
//           console.log(thisSlide.activeIndex);
//           console.log(e.target[data-swiper-slide-index]);
//           if ((x < bannerWidth / 2) && (ad)) {
//             thisSlide.slidePrev();
//           }
//           else if (x > bannerWidth / 2) {
//             thisSlide.slideNext();              
//           }
//         })
//       }
      
//     }

//});


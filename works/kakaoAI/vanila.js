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

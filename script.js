let colapseDom = document.querySelector(".icons .colapse");
let navLinksAltDom = document.querySelector(".icons i #navLinksAlt");
navLinksAltDom.style.display = "none";
console.log(navLinksAltDom.style.display);
colapseDom.addEventListener("click",function(){
    if(navLinksAltDom.style.display === "none"){
        navLinksAltDom.style.display = "block";
    }else{
        navLinksAltDom.style.display = "none";
    }   
});

var swiper = new Swiper(".productslider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".reviewSlider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
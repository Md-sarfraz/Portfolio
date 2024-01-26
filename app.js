var typed = new Typed(".typing", {
    strings: [" I'm Web devloper", "I'm Freelancer", "I'm Photographer", "I'm Artist"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

AOS.init();


$(document).ready(function() {
    $('.testimonials-wrraper').owlCarousel({
        loop: true,
        margin:20,
        responsiveClass: true,
        center: false,
        nav: true,
        autoplay:true,
        autoplayHoverPause:true,
        navText: [
            "<i class='bi bi-arrow-left'></i>",
            "<i class='bi bi-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 4,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 4,
            }
        }
    })
})

// for responsive
var menuBtn=document.querySelector(".menu-icon");
const aside=document.querySelector(".Aside");
var counterClick=0;
menuBtn.addEventListener("click",()=>{
    if(counterClick%2==0){
        aside.classList.add('Aside-show');
    }
    else{
        aside.classList.remove('Aside-show');
    }
    counterClick++;
    btn=document.querySelector(".nav ul")
    btn.addEventListener("click",()=>{
        aside.classList.remove('Aside-show');
    });
})
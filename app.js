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
                items: 1,
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


const plusIcon=document.querySelectorAll(".bi-plus-lg");
const imageSlider= document.querySelectorAll('.image-slider');
const imageSliderImg= document.querySelectorAll('.image-slider img')
const body=document.querySelector("body")
console.log(imageSliderImg)
console.log(plusIcon)
plusIcon.forEach((element)=>{
    element.addEventListener('click',()=>{
        // imageSlider[0].classList.remove('d-none');
        // imageSliderImg[0].style.width='100%';
        // imageSliderImg[0].style.height='100%';
        imageSliderImg[0].style.scale='1'
        imageSliderImg[0].style.transition='all 0.4s ease-in-out';

    })
})



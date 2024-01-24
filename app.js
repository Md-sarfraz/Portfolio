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

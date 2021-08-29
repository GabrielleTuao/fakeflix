$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false, /* posso deixar como false ou true, com true fica duas setinhas acima das bolinhas */
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
})


$(document).ready(function(){
    $('.number').counterUp({
        delay: 10,
        time: 1200
    })
})


$('.tabs-list li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.content-list > div, .content-img > div').hide() && $($(this).data('target')).fadeIn();;
});
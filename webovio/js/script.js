$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.arrow').fadeIn();
        } else {
           $('.arrow').fadeOut();
        }
    });
})



const hamburger = document.querySelector('.promo__hamburger'),
    menu = document.querySelector('.menu');
    close = document.querySelector('.menu__close')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});





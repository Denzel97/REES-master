$(document).ready(function () {
    new WOW().init();

    // Spinner
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Auto slide functionality
    const autoSlide = function (carouselId) {
        $(`#${carouselId}`).carousel({
            interval: 2000 // Change interval to 3 seconds
        });
    };

    autoSlide('carouselExampleIndicators1');
    autoSlide('carouselExampleIndicators2');
    autoSlide('carouselExampleIndicators3');

    // Previous and next buttons functionality for modals
    $('.carousel-control-prev').click(function () {
        const carouselId = $(this).attr('data-bs-target');
        $(carouselId).carousel('prev');
    });

    $('.carousel-control-next').click(function () {
        const carouselId = $(this).attr('data-bs-target');
        $(carouselId).carousel('next');
    });
});

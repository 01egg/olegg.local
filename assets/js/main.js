(function ($) {
    
        //===== Progress Bar

    if ($('.progress-line').length) {
        $('.progress-line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }


    //===== Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 1600
    });
    
    $(document).ready(function () {
    "use strict";
    
    //===== Prealoder

    $(window).on('load', function (event) {
        $('.loading').delay(1500).fadeOut(700);
    });


    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });


    //===== Iframe Button Case
    $('.iframe-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'white-popup'
    });

    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });



    // Parallaxmouse js

    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };
    parallaxMouse();


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.image-popup-marketing').magnificPopup({
        type: 'image'
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to Top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //Форма всплывающего окна
    $('#lp-fb1').wiFeedBack({
        fbScript: 'blocks/wi-feedback.php',
        fbLink: '.wi-fb-link4',
        fbColor: false,
        fbTheme: false
    });

    //Форма  внизу
    $('#contact-form').wiFeedBack({
        fbScript: 'blocks/wi-feedback.php',
        fbLink: false,
        fbColor: false,
        fbTheme: false
    });

    //Проверка номера
    $(function () {
        //2. Получить элемент, к которому необходимо добавить маску
        $("#phone").mask("8(999) 999-9999");
    });

});
}(jQuery));


let glide = new Glide('.glide', {
    startAt: 1,
    perView: 1,
    autoplay: 2000,
    peek: {
      before: 70,
      after: 70
    }
  });

  glide.mount();
  
$(function () {
    $('.selectpicker').selectpicker();
});

$(document).ready(function() {
    $('.slider-review').slick({});
});

$(document).ready(function() {
    $('.slider-many').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1630,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.slider-mini').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});

$(document).ready(function() {
    $('#right-menu').sidr({
        name: 'sidr-right',
        side: 'right',
        source: '#header-nav',
        onOpen: function() {
            $('.mobile-menu').addClass('active');
        },
        onClose: function() {
            $('.mobile-menu').removeClass('active');
        }
    });
});

$(document).mouseup(function (e){
    var container = $("#sidr-right");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        $.sidr('close', 'sidr-right');
    }
});

$(document).ready(function(){
    $("#myNav").affix({
        offset: {
            top: (
                $('#header-top').outerHeight(true) +
                $('.header__main').outerHeight(true))
        }
    });
});
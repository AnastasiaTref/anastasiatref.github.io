$(document).ready(function () {
    $('input, textarea').on('blur', function () {
        var label = $(this).siblings('label');
        $('.help_block').removeClass('visible');
        if ($(this).val() !== '') {
            label.css('display', 'none');
        } else {
            label.css('display', 'block');
        }
    });

    $('.go_to').click(function () {
        var scroll_el = $(this).data('go');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 700);
        }
        return false;
    });
    $('.add_comment').on('click', function (e) {
        e.preventDefault();
        if ($('#name2').val() === "") {
            $('#name2').parents('.form_item').find('.help_block').addClass('visible');
            return false;
        }

        if ($('#commentar').val() === "") {
            $('#commentar').parents('.form_item').find('.help_block').addClass('visible');
            return false;
        }

        $(this).parents('form').addClass('_blocked').find('.left, .right').addClass('_blocked');
        $('.add_message').fadeIn(600);
    });
    if (innerWidth > 940) {
        setTimeout(function () {
            $(".pushup").fadeIn();
            $(".pushup__btnsItemBtn").on("click", function (e) {
                e.preventDefault();
                $(".pushup").fadeOut();
            });
            $(".pushup__close").on("click", function (e) {
                e.preventDefault();
                $(".pushup").fadeOut();
            });
        }, 2000);

        setInterval(function () {
            var name = $('.names').text().split(',');
            var randname = Math.floor(Math.random() * name.length);
            $(".message .name").text(name[randname]);
            $(".message").fadeIn(1000).delay(2000).fadeOut(1000);
        }, 13000);
    }
    ;

    var scrolled = window.pageYOffset;
    var firstOffsetTopAnimated = $('.comment-list').offset().top;
    window.onscroll = function () {
        scrolled = window.pageYOffset;
        if ($(window).width() >= 0) {
            if (scrolled > firstOffsetTopAnimated) {
                $('.comment-item._first').fadeIn(1000);
                setTimeout(function () {
                    $('.comment-item._second').fadeIn(1000);
                }, 4000);
            }
        }
    };

});
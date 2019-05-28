var sectionScroll = function(elem) {

	var links = $(elem);

    links.each(function() {

        $(this).on('click', function(e) {

            // stops empty hrefs making the page jump when clicked
            e.preventDefault();

            $('.sandwich').removeClass('sandwich--active');
            $('.navbar__list').removeClass('navbar--active');

            // get id pf the button you just clicked
            var id = $(this).attr('data-href');

            console.log(id);

            // gets the distance from top of the div class that matches your button id minus the height of the nav menu. 
            // This means the nav wont initially overlap the content.
            var goTo = $('#' + id).offset().top - 50;

            // Scroll the page to the desired position!
            $("html, body").animate({ scrollTop: goTo }, 1000);

        });
    });
};

var toTop = function() {

    $(window).scroll(function() {
        var scroll = window.pageYOffset || document.documentElement.scrollTop
        if (scroll > 50) {
            $('.totop').addClass('show')
        } else {
            $('.totop').removeClass('show')
        }
    })
    $('#js-totop').on('click', function(event) {
        console.log(111);
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 300);
    });
};

var accordeon = function() {

    var trigger = $(".accordeon__trigger");

    trigger.on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            item = $this.closest('.accordeon__item'),
            list = $this.closest('.accordeon__inner'),
            items = list.find('.accordeon__item'),
            content = item.find('.accordeon__inner'),
            otherContent = list.find('.accordeon__inner'),
            arrUp = item.find('.arrow-up'),
            arrDown = item.find('.arrow-down'),
            duration = 250,
            active = 'active';
            
        if(!item.hasClass(active)){
            items.removeClass(active);
            item.addClass(active);
            arrUp.addClass(active);
            arrDown.removeClass(active);
            otherContent.stop(true,true).slideUp(duration);
            content.stop(true,true).slideDown(duration);
        } else {
            content.stop(true,true).slideUp(duration);
            item.removeClass(active);
            arrUp.removeClass(active);
            arrDown.addClass(active);
        }    
    });
};

$(function() {
    $('.sandwich').on('click', function() {
        $(this).toggleClass('sandwich--active');
        $('.navbar__list').toggleClass('navbar--active');
    });

    sectionScroll($('.navbar .navbar__link'));
    toTop();
    accordeon();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzZWN0aW9uU2Nyb2xsID0gZnVuY3Rpb24oZWxlbSkge1xyXG5cclxuXHR2YXIgbGlua3MgPSAkKGVsZW0pO1xyXG5cclxuICAgIGxpbmtzLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcHMgZW1wdHkgaHJlZnMgbWFraW5nIHRoZSBwYWdlIGp1bXAgd2hlbiBjbGlja2VkXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5zYW5kd2ljaCcpLnJlbW92ZUNsYXNzKCdzYW5kd2ljaC0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2xpc3QnKS5yZW1vdmVDbGFzcygnbmF2YmFyLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCBpZCBwZiB0aGUgYnV0dG9uIHlvdSBqdXN0IGNsaWNrZWRcclxuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldHMgdGhlIGRpc3RhbmNlIGZyb20gdG9wIG9mIHRoZSBkaXYgY2xhc3MgdGhhdCBtYXRjaGVzIHlvdXIgYnV0dG9uIGlkIG1pbnVzIHRoZSBoZWlnaHQgb2YgdGhlIG5hdiBtZW51LiBcclxuICAgICAgICAgICAgLy8gVGhpcyBtZWFucyB0aGUgbmF2IHdvbnQgaW5pdGlhbGx5IG92ZXJsYXAgdGhlIGNvbnRlbnQuXHJcbiAgICAgICAgICAgIHZhciBnb1RvID0gJCgnIycgKyBpZCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcblxyXG4gICAgICAgICAgICAvLyBTY3JvbGwgdGhlIHBhZ2UgdG8gdGhlIGRlc2lyZWQgcG9zaXRpb24hXHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGdvVG8gfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgdG9Ub3AgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxyXG4gICAgICAgIGlmIChzY3JvbGwgPiA1MCkge1xyXG4gICAgICAgICAgICAkKCcudG90b3AnKS5hZGRDbGFzcygnc2hvdycpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLnRvdG9wJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCcjanMtdG90b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDExMSk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgYWNjb3JkZW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIHRyaWdnZXIgPSAkKFwiLmFjY29yZGVvbl9fdHJpZ2dlclwiKTtcclxuXHJcbiAgICB0cmlnZ2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBpdGVtID0gJHRoaXMuY2xvc2VzdCgnLmFjY29yZGVvbl9faXRlbScpLFxyXG4gICAgICAgICAgICBsaXN0ID0gJHRoaXMuY2xvc2VzdCgnLmFjY29yZGVvbl9faW5uZXInKSxcclxuICAgICAgICAgICAgaXRlbXMgPSBsaXN0LmZpbmQoJy5hY2NvcmRlb25fX2l0ZW0nKSxcclxuICAgICAgICAgICAgY29udGVudCA9IGl0ZW0uZmluZCgnLmFjY29yZGVvbl9faW5uZXInKSxcclxuICAgICAgICAgICAgb3RoZXJDb250ZW50ID0gbGlzdC5maW5kKCcuYWNjb3JkZW9uX19pbm5lcicpLFxyXG4gICAgICAgICAgICBhcnJVcCA9IGl0ZW0uZmluZCgnLmFycm93LXVwJyksXHJcbiAgICAgICAgICAgIGFyckRvd24gPSBpdGVtLmZpbmQoJy5hcnJvdy1kb3duJyksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMjUwLFxyXG4gICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoIWl0ZW0uaGFzQ2xhc3MoYWN0aXZlKSl7XHJcbiAgICAgICAgICAgIGl0ZW1zLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkQ2xhc3MoYWN0aXZlKTtcclxuICAgICAgICAgICAgYXJyVXAuYWRkQ2xhc3MoYWN0aXZlKTtcclxuICAgICAgICAgICAgYXJyRG93bi5yZW1vdmVDbGFzcyhhY3RpdmUpO1xyXG4gICAgICAgICAgICBvdGhlckNvbnRlbnQuc3RvcCh0cnVlLHRydWUpLnNsaWRlVXAoZHVyYXRpb24pO1xyXG4gICAgICAgICAgICBjb250ZW50LnN0b3AodHJ1ZSx0cnVlKS5zbGlkZURvd24oZHVyYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuc3RvcCh0cnVlLHRydWUpLnNsaWRlVXAoZHVyYXRpb24pO1xyXG4gICAgICAgICAgICBpdGVtLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIGFyclVwLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIGFyckRvd24uYWRkQ2xhc3MoYWN0aXZlKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnNhbmR3aWNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc2FuZHdpY2gtLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJy5uYXZiYXJfX2xpc3QnKS50b2dnbGVDbGFzcygnbmF2YmFyLS1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlY3Rpb25TY3JvbGwoJCgnLm5hdmJhciAubmF2YmFyX19saW5rJykpO1xyXG4gICAgdG9Ub3AoKTtcclxuICAgIGFjY29yZGVvbigpO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==

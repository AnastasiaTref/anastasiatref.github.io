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

$(function() {

    $('.sandwich').on('click', function() {
        $(this).toggleClass('sandwich--active');
        $('.navbar__list').toggleClass('navbar--active');
    });

    sectionScroll($('.navbar .navbar__link'));

    // get initial top offset for the menu 
    var stickyTop = $('.s-navbar').offset().top;

    $(window).scroll(function() {
	    // check position and make sticky if needed
    	var scrollTop = $(window).scrollTop(); // current distance top
    	
	    if (scrollTop >= stickyTop) {
	        $('.s-navbar').addClass("fixed");
	        $(".header").css("margin-bottom", "55px"); // 55px is the bar height !
	    } else {
	        $('.s-navbar').removeClass("fixed");
	        $("header").css("margin-bottom", "0");
	    }
	});


    var trigger = $(".accordeon__trigger");

    trigger.on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            item = $this.closest('.accordeon__item'),
            list = $this.closest('.accordeon__inner'),
            items = list.find('.accordeon__item'),
            content = item.find('.accordeon__inner'),
            otherContent = list.find('.accordeon__inner'),
            duration = 250,
            active = 'active';
    
            
    
            if(!item.hasClass(active)){
                items.removeClass(active);
                item.addClass(active);
                
                otherContent.stop(true,true).slideUp(duration);
                content.stop(true,true).slideDown(duration);
            } else {
                content.stop(true,true).slideUp(duration);
                item.removeClass(active);
                
            }
    
});

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzZWN0aW9uU2Nyb2xsID0gZnVuY3Rpb24oZWxlbSkge1xyXG5cclxuXHR2YXIgbGlua3MgPSAkKGVsZW0pO1xyXG5cclxuICAgIGxpbmtzLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcHMgZW1wdHkgaHJlZnMgbWFraW5nIHRoZSBwYWdlIGp1bXAgd2hlbiBjbGlja2VkXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5zYW5kd2ljaCcpLnJlbW92ZUNsYXNzKCdzYW5kd2ljaC0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2xpc3QnKS5yZW1vdmVDbGFzcygnbmF2YmFyLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCBpZCBwZiB0aGUgYnV0dG9uIHlvdSBqdXN0IGNsaWNrZWRcclxuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldHMgdGhlIGRpc3RhbmNlIGZyb20gdG9wIG9mIHRoZSBkaXYgY2xhc3MgdGhhdCBtYXRjaGVzIHlvdXIgYnV0dG9uIGlkIG1pbnVzIHRoZSBoZWlnaHQgb2YgdGhlIG5hdiBtZW51LiBcclxuICAgICAgICAgICAgLy8gVGhpcyBtZWFucyB0aGUgbmF2IHdvbnQgaW5pdGlhbGx5IG92ZXJsYXAgdGhlIGNvbnRlbnQuXHJcbiAgICAgICAgICAgIHZhciBnb1RvID0gJCgnIycgKyBpZCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcblxyXG4gICAgICAgICAgICAvLyBTY3JvbGwgdGhlIHBhZ2UgdG8gdGhlIGRlc2lyZWQgcG9zaXRpb24hXHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGdvVG8gfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICQoJy5zYW5kd2ljaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3NhbmR3aWNoLS1hY3RpdmUnKTtcclxuICAgICAgICAkKCcubmF2YmFyX19saXN0JykudG9nZ2xlQ2xhc3MoJ25hdmJhci0tYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWN0aW9uU2Nyb2xsKCQoJy5uYXZiYXIgLm5hdmJhcl9fbGluaycpKTtcclxuXHJcbiAgICAvLyBnZXQgaW5pdGlhbCB0b3Agb2Zmc2V0IGZvciB0aGUgbWVudSBcclxuICAgIHZhciBzdGlja3lUb3AgPSAkKCcucy1uYXZiYXInKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuXHQgICAgLy8gY2hlY2sgcG9zaXRpb24gYW5kIG1ha2Ugc3RpY2t5IGlmIG5lZWRlZFxyXG4gICAgXHR2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpOyAvLyBjdXJyZW50IGRpc3RhbmNlIHRvcFxyXG4gICAgXHRcclxuXHQgICAgaWYgKHNjcm9sbFRvcCA+PSBzdGlja3lUb3ApIHtcclxuXHQgICAgICAgICQoJy5zLW5hdmJhcicpLmFkZENsYXNzKFwiZml4ZWRcIik7XHJcblx0ICAgICAgICAkKFwiLmhlYWRlclwiKS5jc3MoXCJtYXJnaW4tYm90dG9tXCIsIFwiNTVweFwiKTsgLy8gNTVweCBpcyB0aGUgYmFyIGhlaWdodCAhXHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAkKCcucy1uYXZiYXInKS5yZW1vdmVDbGFzcyhcImZpeGVkXCIpO1xyXG5cdCAgICAgICAgJChcImhlYWRlclwiKS5jc3MoXCJtYXJnaW4tYm90dG9tXCIsIFwiMFwiKTtcclxuXHQgICAgfVxyXG5cdH0pO1xyXG5cclxuXHJcbiAgICB2YXIgdHJpZ2dlciA9ICQoXCIuYWNjb3JkZW9uX190cmlnZ2VyXCIpO1xyXG5cclxuICAgIHRyaWdnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIGl0ZW0gPSAkdGhpcy5jbG9zZXN0KCcuYWNjb3JkZW9uX19pdGVtJyksXHJcbiAgICAgICAgICAgIGxpc3QgPSAkdGhpcy5jbG9zZXN0KCcuYWNjb3JkZW9uX19pbm5lcicpLFxyXG4gICAgICAgICAgICBpdGVtcyA9IGxpc3QuZmluZCgnLmFjY29yZGVvbl9faXRlbScpLFxyXG4gICAgICAgICAgICBjb250ZW50ID0gaXRlbS5maW5kKCcuYWNjb3JkZW9uX19pbm5lcicpLFxyXG4gICAgICAgICAgICBvdGhlckNvbnRlbnQgPSBsaXN0LmZpbmQoJy5hY2NvcmRlb25fX2lubmVyJyksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMjUwLFxyXG4gICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJztcclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBpZighaXRlbS5oYXNDbGFzcyhhY3RpdmUpKXtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZENsYXNzKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG90aGVyQ29udGVudC5zdG9wKHRydWUsdHJ1ZSkuc2xpZGVVcChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0b3AodHJ1ZSx0cnVlKS5zbGlkZURvd24oZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5zdG9wKHRydWUsdHJ1ZSkuc2xpZGVVcChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbn0pO1xyXG5cclxufSk7XHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9

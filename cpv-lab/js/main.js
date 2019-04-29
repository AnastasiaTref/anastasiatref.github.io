var Module = (function(){

	var mainMenu = $('.mainmenu');
	var menu = $('.mainmenu__menu');
	var menuButton = $('.mainmenu__button');
	var tab = $('.controls__link');
	var scroll = true;


	var toForm = function(){
		$('.home .toform').click(function(e) {
			e.preventDefault();
			$("html,body").animate({scrollTop: $('.offer').offset().top}, 1000);
		});
	}

	var setUpListener = function(){

		menuButton.on('click',function(e){
			e.preventDefault();
			$(this).toggleClass('mainmenu__button--on');
			menu.toggleClass('mainmenu__menu-show');
		})

		$(window).on('resize',function(){
			var $this = $(this);

			if($this.width() >= 991){
				menu.removeClass('mainmenu__menu-show');
				menuButton.removeClass('mainmenu__button--on')
			}

		})



		$(window).on('mousewheel DOMMouseScroll', function (e) {

		    var direction = (function () {

		        var delta = (e.type === 'DOMMouseScroll' ?
		                     e.originalEvent.detail * -40 :
		                     e.originalEvent.wheelDelta);

		        return delta > 0 ? 0 : 1;
		    }());

		    if(direction === 1) {
		       mainMenu.addClass('mainmenu--swingOutX').removeClass('mainmenu--swingInX');
		    }
		    if(direction === 0) {
		       mainMenu.addClass('mainmenu--swingInX').removeClass('mainmenu--swingOutX');
		    }
		});



		$('.s-tabs__slide').eq(0).show();
			tab.on('click',function(e){
				e.preventDefault();
				var $this = $(this);
				var time = 300;

				$this.closest('.controls__part').addClass('controls--active').siblings().removeClass('controls--active');

				var buttonIndex = $this.closest('.controls__part').index();
				var currentSlide = $('.s-tabs__slide').eq(buttonIndex);

				scroll = false;

				currentSlide.siblings().removeClass('s-tabs__slide--active');
				currentSlide.addClass('s-tabs__slide--active');
				setTimeout(function(){
					currentSlide.removeClass('fade').siblings().addClass('fade');
					scroll = true;
				},time)
			})


		}



	var addSliderReviews = function(){
		$(".s-what__slider").owlCarousel({
	    loop: true,
	    items : 1,
	    margin:100,
    });
	};


	var addSliderPartner = function(){
		$(".s-featured__slider").owlCarousel({
	    loop: false,
	    responsive:{
        0:{
          items:2,
          margin:10,
        },
        991: {
        	items : 4,
	    		margin:100,
        }
    }
    });
	}





	var accordion = function(){
		var parent = $('.accordion');
		var item = parent.find('.accordion__item');
		var head = item.find('.accordion__head');

		head.on('click',function(e){
			var $this = $(this);
			var $thisParent = $this.closest('.accordion__item');
			var content = $this.siblings('.accordion__content');
			var $thisParentSibling = $thisParent.siblings();

			$thisParentSibling.find('.accordion__content').slideUp(200);
			$thisParentSibling.removeClass('accordion--active');


			$thisParent.toggleClass('accordion--active')

			content.stop();
			content.slideToggle(200);




		})

	}






	return {
		init : function(){
			setUpListener();
			addSliderReviews();
			addSliderPartner();
			toForm();
			accordion();
		}
	}

})()


$('document').ready(function(){
	Module.init();
});

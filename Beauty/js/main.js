var timer = function(){
	var _currentDate = new Date();
	var count = 15;
	var _toDate = new Date(
		_currentDate.getFullYear(),
		_currentDate.getMonth(),
		_currentDate.getDate(),
		_currentDate.getHours(),
		_currentDate.getMinutes() + count, 1);

	$elem =  $('.timer');

	$elem.each(function(){
			var 
				$this = $(this),
				hours = $this.find('.timer__hours'),
				min = $this.find('.timer__min'),
				hoursNum = hours.find('.timer__num'),
				minNum = min.find('.timer__num');
			$this.countdown(_toDate,function(e) {

				hoursNum.text('' + e.strftime('%H'));
				minNum.text('' + e.strftime('%M'));
		});
	})


};




$.fn.isOnScreen = function(shift){
		if(!shift){
			shift = 0;
		}
	  var viewport = {};
	  viewport.top = $(window).scrollTop();
	  viewport.bottom = viewport.top + $(window).height();
	  var bounds = {};
	  bounds.top = this.offset().top + shift;
	  bounds.bottom = bounds.top + this.outerHeight() - shift;
	  return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
};




var _bxInnit = function(elem,opt){
	var defaultOptions = {
		view: 'all'
	}
	var currentOpt = $.extend(defaultOptions,opt);
	var init = {
		breakPoint: 992,
		sliderActive : false,
		initBreakpoint: null,
		resizeBreakpointMore: null,
		resizeBreakpointLess: null,
		windowWidht: window.innerWidth
	}


	var flag = false;

	var slider;


	var sliderClone = $(elem).clone();


	var options = opt;

	function createSlider() {
	  slider = $(elem).bxSlider(options);
    return true;
	}

	if(flag){
		createSlider();
		init.sliderActive = true;
	}


	function createBreakpoints(){
		switch(currentOpt.view){
			case 'mobile':
				init.initBreakpoint = init.windowWidht < init.breakPoint;
				init.resizeBreakpointMore = init.windowWidht >= init.breakPoint;
				init.resizeBreakpointLess = init.windowWidht < init.breakPoint;
				break;

			case 'desktop':
				init.initBreakpoint = init.windowWidht >= init.breakPoint;
				init.resizeBreakpointMore = init.windowWidht < init.breakPoint;
				init.resizeBreakpointLess = init.windowWidht >= init.breakPoint;
				init.resizeBreakpointLess;
				break;

			case 'all':
				init.initBreakpoint = true;
				init.resizeBreakpointMore = false;
				init.resizeBreakpointLess = false;
				break;
		}
	}

	createBreakpoints();


	if (init.initBreakpoint) {
	  createSlider();
	  init.sliderActive = true;
	}

		$(window).resize(function () {
		init.windowWidht = window.innerWidth;

		createBreakpoints();

	  if (init.resizeBreakpointMore){
	   	if(init.sliderActive){
	   		slider.destroySlider();
	   		init.sliderActive = false;
	   		slider.replaceWith(sliderClone.clone());
	   	} 
	  }

	  if(init.resizeBreakpointLess){
	  	if(!init.sliderActive){
	  		createSlider();
	  		init.sliderActive = true;
	  	}
		}
	});

	var a,b;
	a = 1;
	b = 0;

	$(window).on('scroll',function(){
		if(init.sliderActive == true){
			if(slider.isOnScreen()){
				b = 1;
			}else{
				b = 0;
			}

			if(a == b){
					slider.startAuto();
			}
			else{
				slider.stopAuto();
			}
		}

			});
}

var toForm = function(){
	$('.pre_toform').click(function(e) {
		e.preventDefault();
		var a = $('.js_submit'),b = a.closest('form');
		if($('form#order_form').length) a = $('#order_form .js_submit'),b = a.closest('form#order_form');
		if(b.length && a.is(':visible')){
		$("html,body").animate({scrollTop: b.offset().top}, 1000);
				}
		return false;
	});
}


var runer = function(){
	var $elem = $('.meter__num');
	var startValue = 0;
	var data = [];
	var flag = true;

		var initData = function(){	
		$elem.each(function(){
			var $this = $(this);
			data.push({
				elem: $this,
				currentValue: startValue,
				maxValue: Number($this.text())
			})
		});
		$elem.text(startValue);
	}

	var startCounter = function(){
		$elem.each(function(index){
			var $this = $(this);
			var elem = data[index];
			var currentValue = elem.currentValue;

			elem.timerId = setInterval(function(){
				if(currentValue >= elem.maxValue){
					clearInterval(elem.timerId);
				}
				currentValue = Number(currentValue + 7);
				$this.text(currentValue);
			},10)
		})
	}
	initData();

	var a,b;
	a = 1;
	b = 0;

	$(window).on('scroll',function(){

		if(flag){
			if($('.s-tale').isOnScreen()){
				b = 1;
			}else{
				b = 0;
			}

			if(a == b){
				startCounter();
				flag = false;
			}
		}
	});
}


$(function(){
	timer();
	toForm();
	runer();
	_bxInnit('.woman-slider',{
		view: 'desktop',
	  adaptiveHeight: false,
	  swipeThreshold: 40,
	  controls: true,
	  auto: true,
	  pause: 7000,
	  autoHover: true,
	  slideSelector: '.list__item',
	  slideMargin: 5,
	  pager: false,
	  minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    slideWidth: 880 / 3,
	});

	_bxInnit('.review-slider',{
		view: 'mobile',
	  adaptiveHeight: false,
	  swipeThreshold: 40,
	  controls: false,
	  auto: true,
	  pause: 7000,
	  autoHover: true,
	  slideSelector: '.reviews__item',
	  slideMargin: 5,
	});
});
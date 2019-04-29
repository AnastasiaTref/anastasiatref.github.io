var slider;
$(window).load(function(){
  if($(window).width()>768) {
    slider = $('.bx-slider').bxSlider({
      slideWidth: 730,
      minSlides: 1,
      maxSlides: 1,
      adaptiveHeight: true,
      infiniteLoop: true,
    });
   } else {
     slider = $('.bx-slider').bxSlider({
      slideWidth: 300,
      minSlides: 1,
      maxSlides: 1,
      adaptiveHeight: true,
      infiniteLoop: true
    });
  }
});

$(window).resize(function () {
  if($(window).width()<767) {
    slider.reloadSlider({
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 1,
    adaptiveHeight: true,
    infiniteLoop: true
  });
  }else{
    slider.reloadSlider({
    slideWidth: 730,
    minSlides: 1,
    maxSlides: 1,
    adaptiveHeight: true,
    infiniteLoop: true
  });
  }
});

$(document).ready(function () {

	//scroll buttons 
	$('.toform').on('click', function () {
		$('html, body').animate({scrollTop: $('.reg').offset().top}, 700);
	});

	//open form registration

	$('.registration').on('click', function() {
		$('.modal').addClass('active');
		$('body').css({'overflow' : 'hidden'});
	});

	
	$('.close').on('click', function() {
		$('.modal').removeClass('active');
				$('body').css({'overflow' : ''});
		workHours();
	});

	$('.grid__links').each(function () {
		$(this).on('click', function () {
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		});
	});

  function creatDays() {
    var gridDays = $('.grid__days');

    for ( var i = 1; i <= 7; i++ ) {

      var dayO = {
        "1" : "Пн",
        "2" : "Вт",
        "3" : "Ср",
        "4" : "Чт",
        "5" : "Пт",
        "6" : "Сб",
        "7" : "Вс"
      }

      gridDays.append('<p class="grid__day" data-day="'+ i +'">'+dayO[i]+'</p>');
      gridDay = $('.grid__day[data-day='+ i +']');
    }

    var gridHours = $('.grid__hours');

      for ( var i = 1; i <= 24; i++ ) {

      var dayH = {
        "1" : "00-01",
        "2" : "01-02",
        "3" : "02-03",
        "4" : "03-04",
        "5" : "04-05",
        "6" : "05-06",
        "7" : "06-07",
        "8" : "07-08",
        "9" : "08-09",
        "10" : "09-10",
        "11" : "10-11",
        "12" : "11-12",
        "13" : "12-13",
        "14" : "13-14",
        "15" : "14-15",
        "16" : "15-16",
        "17" : "16-17",
        "18" : "17-18",
        "19" : "18-19",
        "20" : "19-20",
        "21" : "20-21",
        "22" : "21-22",
        "23" : "22-23",
        "24" : "23-00"
      }

      gridHours.append('<p class="grid__hour" data-hour="'+ i +'">'+dayH[i]+'</p>');
      gridDay = $('.grid__hour[data-hour='+ i +']');
    } 
  };creatDays();


  var row = 7; // Количество дней в неделе (.grid__row)
  var cell = 24; //Количество часов (.grid__cell)

  function creatTable() {
   	var gridTable =  $('.grid__table');
    var gridRow;

    for ( var i = 1; i <= row; i++ ) {
      gridTable.append('<div class="grid__row" data-day="'+ i +'"></div>');
      gridRow = $('.grid__row[data-day='+ i +']');
            
      for ( var j = 1; j <= cell; j++ ) {
        gridRow.append('<span class="grid__cell" data-day="'+ i +'"  data-hour="'+ j +'"></span>');
      }//цикл j

    }//цикл i
  }
  creatTable();
  workHours();

  function fullDay() {
    resetTable();
    $('.grid__cell').toggleClass('active');
      return false;
  }//fullDay

  function weekDays() {
    resetTable();
    for ( var i = 1; i <= 5; i++ ) {
      $('[data-day='+ i +']').find('.grid__cell').addClass('active');
    }
    return false;
  }//weekDays  

  function weekends() {
    resetTable();
    for ( var i = 6; i <= 7; i++ ) {
      $('[data-day='+ i +']').find('.grid__cell').addClass('active');
      }
    return false;
  }//weekends

  function workHours() {
    resetTable();
    for ( var i = 1; i <= 5; i++ ) {

      for (var j = 10; j <= 18; j++ ) {
        $('[data-day='+ i +']').find('[data-hour='+ j +']').addClass('active');
      }
    }
  return false;
  }//weekends

  function resetTable() {
    $('.grid').find('.grid__cell').removeClass('active');
    return false;
  }

  $('.grid__day').on('click', function () {
  	var day = $(this).data('day');
  	if ($('.grid__cell[data-day="' + day +'"]:eq(0)').hasClass('active')) {
  		$('.grid__cell[data-day="' + day +'"]').removeClass('active');
  	}else{
  		$('.grid__cell[data-day="' + day +'"]').addClass('active');
  	}
  });


  $('.grid__hour').on('click', function () {
  	var hour = $(this).data('hour');
  	if ($('.grid__cell[data-hour="' + hour +'"]:eq(0)').hasClass('active')) {
  		$('.grid__cell[data-hour="' + hour +'"]').removeClass('active');
  	}else{
  		$('.grid__cell[data-hour="' + hour +'"]').addClass('active');
  	}
  });

  $('.full-day').on('click', fullDay);

  $('.week-days').on('click', weekDays);

  $('.weekends').on('click',  weekends); 

  $('.work-hours').on('click', workHours); 

  $('.reset').on('click', resetTable); 

  $('.grid__cell').on('click', function () {
    $(this).toggleClass('active')
  });

});//document
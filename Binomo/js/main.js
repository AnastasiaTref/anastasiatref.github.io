var bgSlider = function() {
    
	$('#bgSlider .slide:gt(0)').hide();

	setInterval(function() {
		$('#bgSlider .slide:first')
		.fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#bgSlider')
	}, 4000);
	
};

var particles = function() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#4a85b1"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#4a85b1"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#4a85b1",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 6,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    })
};

var btnScrollTop = function() {
	var btn = $('.btn-top'),
		anchor = $('.header');

	btn.on('click touchend', function(e) {
		$('html, body').animate({scrollTop: anchor.offset().top});	
	});
};

var counterUp = function() {
	var elem = $('#spincrement');
	var value = elem.text();

	function Random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	var setTimer = setInterval(function() {

		value = parseInt(value) + Random(1,5);	
		elem.text(value);
	}, 2000)
};

$(function() {
    btnScrollTop();
    counterUp();
    bgSlider();

    $('.open-sign-up').on('click touchend', function(e) {
        e.preventDefault();
        var popupForm = $('.popup.sign-up');

        popupForm.addClass('active');
    })

    $('.close').on('click touchend', function(e) {
        e.preventDefault();
        var popupForm = $('.popup.sign-up');
        popupForm.removeClass('active');
    });
    particles();

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBiZ1NsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcblx0JCgnI2JnU2xpZGVyIC5zbGlkZTpndCgwKScpLmhpZGUoKTtcclxuXHJcblx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjYmdTbGlkZXIgLnNsaWRlOmZpcnN0JylcclxuXHRcdC5mYWRlT3V0KDEwMDApXHJcblx0ICAgIC5uZXh0KClcclxuXHQgICAgLmZhZGVJbigxMDAwKVxyXG5cdCAgICAuZW5kKClcclxuXHQgICAgLmFwcGVuZFRvKCcjYmdTbGlkZXInKVxyXG5cdH0sIDQwMDApO1xyXG5cdFxyXG59O1xyXG5cclxudmFyIHBhcnRpY2xlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcGFydGljbGVzSlMoXCJwYXJ0aWNsZXMtanNcIiwge1xyXG4gICAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgICAgICBudW1iZXI6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBkZW5zaXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIiM0YTg1YjFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjaXJjbGVcIixcclxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM0YTg1YjFcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvbHlnb246IHtcclxuICAgICAgICAgICAgICAgICAgICBuYl9zaWRlczogNVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcImltZy9naXRodWIuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogLjUsXHJcbiAgICAgICAgICAgICAgICByYW5kb206ICExLFxyXG4gICAgICAgICAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eV9taW46IC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmM6ICExXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAzLFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tOiAhMCxcclxuICAgICAgICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICExLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICBzaXplX21pbjogLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3luYzogITFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZTogITAsXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTUwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzRhODViMVwiLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb3ZlOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDYsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tOiAhMSxcclxuICAgICAgICAgICAgICAgIHN0cmFpZ2h0OiAhMSxcclxuICAgICAgICAgICAgICAgIG91dF9tb2RlOiBcIm91dFwiLFxyXG4gICAgICAgICAgICAgICAgYm91bmNlOiAhMSxcclxuICAgICAgICAgICAgICAgIGF0dHJhY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICExLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZVg6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGVZOiAxMjAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGludGVyYWN0aXZpdHk6IHtcclxuICAgICAgICAgICAgZGV0ZWN0X29uOiBcImNhbnZhc1wiLFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgIG9uaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiZ3JhYlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25jbGljazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITAsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJwdXNoXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNpemU6ICEwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vZGVzOiB7XHJcbiAgICAgICAgICAgICAgICBncmFiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDE0MCxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJ1YmJsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogOCxcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZDogM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlcHVsc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAuNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHB1c2g6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW1vdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV0aW5hX2RldGVjdDogITBcclxuICAgIH0pXHJcbn07XHJcblxyXG52YXIgYnRuU2Nyb2xsVG9wID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGJ0biA9ICQoJy5idG4tdG9wJyksXHJcblx0XHRhbmNob3IgPSAkKCcuaGVhZGVyJyk7XHJcblxyXG5cdGJ0bi5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBhbmNob3Iub2Zmc2V0KCkudG9wfSk7XHRcclxuXHR9KTtcclxufTtcclxuXHJcbnZhciBjb3VudGVyVXAgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgZWxlbSA9ICQoJyNzcGluY3JlbWVudCcpO1xyXG5cdHZhciB2YWx1ZSA9IGVsZW0udGV4dCgpO1xyXG5cclxuXHRmdW5jdGlvbiBSYW5kb20obWluLCBtYXgpIHtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdH07XHJcblxyXG5cdHZhciBzZXRUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpICsgUmFuZG9tKDEsNSk7XHRcclxuXHRcdGVsZW0udGV4dCh2YWx1ZSk7XHJcblx0fSwgMjAwMClcclxufTtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICBidG5TY3JvbGxUb3AoKTtcclxuICAgIGNvdW50ZXJVcCgpO1xyXG4gICAgYmdTbGlkZXIoKTtcclxuXHJcbiAgICAkKCcub3Blbi1zaWduLXVwJykub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgcG9wdXBGb3JtID0gJCgnLnBvcHVwLnNpZ24tdXAnKTtcclxuXHJcbiAgICAgICAgcG9wdXBGb3JtLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCgnLmNsb3NlJykub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgcG9wdXBGb3JtID0gJCgnLnBvcHVwLnNpZ24tdXAnKTtcclxuICAgICAgICBwb3B1cEZvcm0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICBwYXJ0aWNsZXMoKTtcclxuXHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9

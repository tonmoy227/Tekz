/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .6, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	if($('.tz-split-1').length) {
		var txtSplit = $('.tz-split-1');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "words",
				wordsClass: "split-line"
			});
		});
	}
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){
			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				if($(".tz-hero-slider-area").length) {
					var AGTh3 = new Swiper(".tz-hero-slider-area", {
						loop: true,
						speed: 1000,
						effect: "fade",
						fadeEffect: {
							crossFade: true
						},
						// autoplay: {
						// 	delay: 4000,
						// },
						navigation: {
							prevEl: ".tz-hs-prev",
							nextEl: ".tz-hs-next",
						},
						pagination: {
							el: ".tz-hs-pagi",
							clickable: true,
							renderBullet: function (index, className) {
								return '<span class="' + className + '">' + (index + 1) + "</span>";
							},

						},
					});
				};
			}, 700);
		})		
	});
// Circle Animation
	if ($('.tz-circle-anim').length > 0 ) {
		const path = document.getElementById('line_path');
		const plane = document.getElementById('paper-plane');
		const pathLength = path.getTotalLength();
		let progress = 0.5; 
		let speed = 0.0012; 
		function animatePlane() {
			const point = path.getPointAtLength(progress * pathLength);
			plane.setAttribute('transform', `translate(${point.x}, ${point.y})`);
			const tangent = path.getPointAtLength((progress + 0.01) * pathLength);
			const angle = Math.atan2(tangent.y - point.y, tangent.x - point.x);
			plane.setAttribute('transform', `translate(${point.x}, ${point.y}) rotate(${angle * 180 / Math.PI})`);
			progress += speed;
			if (progress > 1) {
				progress = 0;
			}
			requestAnimationFrame(animatePlane);
		}
		animatePlane();
	};
// Marquee Active
	$('.marquee-left').marquee({
		gap: 0,
		speed: 100,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 0,
		speed: 100,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
// Testimonial Slider
	if($(".tz-testi-slide").length) {
		var testSlider = new Swiper(".tz-testi-slide", {
			loop: true,
			speed: 1000,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			navigation: {
				nextEl: ".tz-tst-next",
				prevEl: ".tz-tst-prev",
			},
		});
	};
})(jQuery);
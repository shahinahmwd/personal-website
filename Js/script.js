$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.", "People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
// ........
var containerEl = document.querySelector('.fillGal');

var mixer = mixitup(containerEl);

// Slider Slick
$('.slideras').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	arrows: true,
	autoplaySpeed: 2000,
	prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
	nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
  });

$(document).ready(function() {

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	$(".carousel").owlCarousel({
		loop : true,
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});

	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

 $(".bottom-item").not(":first").hide();
 	$(".bottom-contacts .wrapper .tab").click(function() {
 	$(".bottom-contacts .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".bottom-contacts .bottom-item").hide().eq($(this).index()).fadeIn()
 }).eq(0).addClass("active");

 $(".tab-item").not(":first").hide();
 	$(".top-contacts .wrapper .tab").click(function() {
 	$(".top-contacts .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".top-contacts .tab-item").hide().eq($(this).index()).fadeIn()
 }).eq(0).addClass("active");

 $(".tab-item__content").not(":first").hide();
 	$(".description-tabs .wrapper .tab").click(function() {
 	$(".description-tabs .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".description-tabs .tab-item__content").hide().eq($(this).index()).fadeIn()
 }).eq(0).addClass("active");


$(".contacts-line__tab-item").not(":first").hide();
 	$(".contacts-line__top-wrapper .contacts-line__tab").click(function() {
 	$(".contacts-line__top-wrapper .contacts-line__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".contacts-line .contacts-line__tab-item").hide().eq($(this).index()).fadeIn()
 }).eq(0).addClass("active");

});

$(window).load(function() {
	$(".top-description__title").animated("fadeInDown", "fadeOut");
	$(".top-description__title--h2").animated("fadeInUp", "fadeOut");
	$(".description-tabs .wrapper").animated("fadeInRight", "fadeOut");
	$(".feature-description").animated("fadeInRight", "fadeOutRight");
	$(".contact-form").animated("fadeInRight", "fadeOut");
	$(".apply-content").animated("fadeInRight", "fadeOut");
	$(".main-footer").animated("fadeInRight", "fadeOut");
});


	$(function() {
	  $('nav a').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	})

// 	$(window).load(function() {
//     // start up after 2sec no matter what
//     window.setTimeout(function(){
//         $('body').removeClass("loading").addClass('loaded');
//     }, 300);
// });

/* -------------------------------------
		THEME PRELOADER
-------------------------------------- */
$(window).on('load', function () {
	var $preloader = jQuery('#bt-preloader'),
	$spinner = $preloader.find('.bt-preloadericon');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});


	$(window).scroll(function(){
	var prueba = $(this).scrollTop();
	if (prueba > 550) {
		$(".navbar-default").addClass("scroll");	
	}
		else if (prueba < 550) {
		$(".navbar-default").removeClass("scroll");
	 }
});

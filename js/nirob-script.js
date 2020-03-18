/**
 *	www.nirob.com
 */

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function(){

	// Mobile menu
	$('.mobile-menu-icon').click(function(){
		$('.nirob-nav').slideToggle();
	});

	$( window ).resize(function() {
		if($( window ).width() > 767) {
			$('.nirob-nav').show();
		} else {
			$('.nirob-nav').hide();
		}
	});

  // http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
  $('body').bind('touchstart', function() {});

});

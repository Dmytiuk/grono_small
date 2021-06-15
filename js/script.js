$(function() {
  function scroll(scrollLink, speed){
  		$('html, body').animate({
  			scrollTop: scrollLink.offset().top - $('.nav__fixed').height()
  		}, {
  			duration: speed,
  			step: function( now, fx ) {
  				var newOffset = scrollLink.offset().top;
  				if (fx.end !== newOffset) {
  					fx.end = newOffset;
  				}
  			}
  		});
  		return false;
  	}
    $('.anchor-next').click(function(e){
        e.preventDefault();
        var el = $(this).closest('section').next();
        scroll(el, 1500);
    });

});

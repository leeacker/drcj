$(document).on('ready', function(){

	$('#top-btn').on('click', function(e){
		console.log('click');
		e.preventDefault();
		$('.current').removeClass('current').slideUp();
		$('#top').addClass('current').slideDown();
	});
	$('#about-btn').on('click', function(e){
		e.preventDefault();
		$('.current').removeClass('current').slideUp();
		$('#about').addClass('current').slideDown();
	});
	$('#contact-btn').on('click', function(e){
		e.preventDefault();
		$('.current').removeClass('current').slideUp();
		$('#contact').addClass('current').slideDown();
	});

});
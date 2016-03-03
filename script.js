$(document).ready(function(){

	var rightSlide = function(oldElem, newElem, dist) {
		$(newElem).animate({'left' : dist}, 400);
	};

	var leftSlide = function(oldElem, newElem, dist) {
		$(newElem).animate({'right' : dist}, 400);
	};

	var topSlide = function(oldElem, newElem, dist) {
		$(newElem).animate({'top' : dist}, 400);
	};

	//open/close cart from home
	$('#cart-icon').click(function(){
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#cart-screen', '0px');
	});

	$('#back-arrow').click(function() {
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#cart-screen', '375px');
	});

	//open/close checkout from cart
	$('#checkout-btn').click(function() {
		var oldElem = $(this).parent();
		topSlide(oldElem, '#checkout-screen', '0px');
	});

	$('#close-icon').click(function() {
		var oldElem = $(this).parent();
		topSlide(oldElem, '#checkout-screen', '626px');
	});

	
	$('#menu-icon').click(function(){
		var oldElem = $(this).parent();
		leftSlide(oldElem, '#menu-screen', '0px');
	});

	$('#menu-icon-close').click(function() {
		var oldElem = $(this).parent();
		leftSlide(oldElem, '#menu-screen', '375px');
	});

	//open view all
	$('#view-all').click(function(){
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#view-all-screen', '0px');
	});

	$('#back-arrow').click(function() {
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#view-all-screen', '375px');
	});	

});


$(document).ready(function(){

	var cartZIndex = 3;

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
	$('#home-screen .cart-icon').click(function(){
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#cart-screen', '0px');
	});

	$('#cart-screen .back-arrow').click(function() {
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

	//open/close menu from home
	$('#menu-icon').click(function(){
		var oldElem = $(this).parent();
		leftSlide(oldElem, '#menu-screen', '0px');
	});

	$('#menu-icon-close').click(function() {
		var oldElem = $(this).parent();
		leftSlide(oldElem, '#menu-screen', '375px');
	});

	//open/close view all from menu
	$('#view-all').click(function(){
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#view-all-screen', '0px');
	});

	$('#view-all-screen .back-arrow').click(function() {
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#view-all-screen', '375px');
	});	

	//open/close cart from view all
	$('#view-all-screen .cart-icon').click(function() {
		var oldElem = $(this).parent();
		$('#cart-screen').css({zIndex: 4});
		rightSlide(oldElem, '#cart-screen', '0px');
	});	

	//open/close orangutan
	$('#orangutan').click(function() {
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#orangutan-screen', '0px');
	});

	$('#orangutan-screen .back-arrow').click(function() {
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#orangutan-screen', '374px');
	});

	//open/close cart from orangutan
	$('#orangutan-screen .cart-icon').click(function() {
		var oldElem = $(this).parent();
		$('#cart-screen').css({zIndex: 6});
		rightSlide(oldElem, '#cart-screen', '0px');
	});	



});


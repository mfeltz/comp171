$(document).ready(function(){

	var cartZIndex = 3;
	var price = 8.39;

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
	$('.orangutan-link').click(function() {
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

	//open/close size selection
	$('#select-size').click(function() {
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#size-screen', '0px');
	});	

	$('#size-screen .back-arrow').click(function() {
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#size-screen', '374px');
	});

	//open/close topping selection
	$('#select-top-1').click(function() {
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#topping-screen', '0px');
	});	

	$('#topping-screen .back-arrow').click(function() {
		var oldElem = $(this).parent();
		rightSlide(oldElem, '#topping-screen', '374px');
	});

	$('#add-to-cart').click(function() {
		if($('#orangutan-size-span').text() != 'Select Size') {
			$('#added').show(0).delay(1000).fadeOut(1000);
		}
	});

	// SELECTING
	//select size
	$('#size-screen .op').click(function() {
		$(this).siblings().css({fontWeight: 'normal'});
		$(this).css({fontWeight: 'bold'});
		var text = $(this).text();
		$('#orangutan-size-span').html(text);

		if(text != 'Small') {
			$('#price').html(price += 0.75);
		} else {
			if(price > 8.39) {
				$('#price').html(price -= 0.75);
			}
		}
	});

	//select topping
	$('#topping-screen .top-op').click(function() {
		$(this).siblings().css({fontWeight: 'normal'});
		$(this).css({fontWeight: 'bold'});
		var text = $(this).text();
		if (text == "None") {
			text = 'Topping #1  (+ $0.75)';
			if(price > 9.39) {
				$('#price').html(price -= 0.75);
			}
		} else {
			if(price != 9.89) {
				$('#price').html(price += 0.75);
			}
		}
		$('#orangutan-top-1').html(text);
	});

//work on topping price logic

});


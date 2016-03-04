$(document).ready(function(){

	var cartZIndex = 3;
	var price = 8.39;
	var size_text;
	var topping1_text;

	var updatePrice = function(amt) {
		$('.price-text').html(price += amt);
		var tax = ((price + 1) * 0.06).toFixed(2);
		$('.tax-text').html(tax);
		$('.total-text').html(parseInt(tax, 10) + parseInt(price, 10));

	};

	var rightSlide = function(newElem, dist) {
		$(newElem).animate({'left' : dist}, 400);
	};

	var leftSlide = function(newElem, dist) {
		$(newElem).animate({'right' : dist}, 400);
	};

	var topSlide = function(newElem, dist) {
		$(newElem).animate({'top' : dist}, 400);
	};

	topSlide('#home-screen', '0px');

	//open/close cart from home
	$('#home-screen .cart-icon').click(function(){
		rightSlide('#cart-screen', '0px');
	});

	$('#cart-screen .back-arrow').click(function() {
		rightSlide('#cart-screen', '375px');
	});

	//open/close checkout from cart
	$('#checkout-btn').click(function() {
		console.log($('#cart-screen').css('zIndex'));
		$('#checkout-screen').css({zIndex: $('#cart-screen').css('zIndex')});
		topSlide('#checkout-screen', '0px');
	});

	$('#close-icon').click(function() {
		topSlide('#checkout-screen', '626px');
	});

	//open home from cart MAY NOT WORK. not needed.
	// $('#cont-feast').click(function() {
	// 	console.log($('#cart-screen').css('zIndex'));
	// 	var cartZ = parseInt($('#cart-screen').css('zIndex'));
	// 	cartZ++;
	// 	$('#home-screen').css({zIndex: 10});
	// 	// topSlide('#home-screen', '0px');
	// });

	//open/close menu from home
	$('#home-screen #menu-icon').click(function(){
		leftSlide('#menu-screen', '0px');
	});

	$('#menu-icon-close').click(function() {
		leftSlide('#menu-screen', '375px');
	});

	//open/close view all from menu
	$('#view-all').click(function(){
		rightSlide('#view-all-screen', '0px');
	});

	$('#view-all-screen .back-arrow').click(function() {
		rightSlide('#view-all-screen', '375px');
	});	

	//open/close cart from view all
	$('#view-all-screen .cart-icon').click(function() {
		$('#cart-screen').css({zIndex: 4});
		rightSlide('#cart-screen', '0px');
	});	

	//open/close orangutan
	$('.orangutan-link').click(function() {
		rightSlide('#orangutan-screen', '0px');
	});

	$('#orangutan-screen .back-arrow').click(function() {
		rightSlide('#orangutan-screen', '374px');
	});

	//open/close cart from orangutan
	$('#orangutan-screen .cart-icon').click(function() {
		$('#cart-screen').css({zIndex: 6});
		rightSlide('#cart-screen', '0px');
	});	

	//open/close size selection
	$('#select-size').click(function() {
		rightSlide('#size-screen', '0px');
	});	

	$('#size-screen .back-arrow').click(function() {
		rightSlide('#size-screen', '374px');
	});

	//open/close topping selection
	$('#select-top-1').click(function() {
		rightSlide('#topping-screen', '0px');
	});	

	$('#topping-screen .back-arrow').click(function() {
		rightSlide('#topping-screen', '374px');
	});

	//open/close address screen from post checkout
	$('#select-address').click(function() {
		rightSlide('#address-screen', '0');
	});

	$('#address-screen .back-arrow').click(function() {
		rightSlide('#address-screen', '374px');
	});

	//open/close payment screen from post checkout
	$('#select-payment').click(function() {
		rightSlide('#payment-screen', '0');
	});

	$('#payment-screen .back-arrow').click(function() {
		rightSlide('#payment-screen', '374px');
	});

	$('#order-btn').click(function() {
		topSlide('#processing-screen', '0px');
		$('#confirm-screen').delay(3000);
		topSlide('#confirm-screen', '0px');
	});

	//ADDING PAYMENT
	$('#add-pay').click(function() {
		rightSlide('#new-card-screen', '0px');

		$('#card-info-screen').delay(1000);
		topSlide('#card-info-screen', '0px');

	});

	$('#card-info-screen .back-arrow').click(function() {
		rightSlide('#new-card-screen', '375px');
		topSlide('#card-info-screen', '626px');
		$('.card-place-holder').show();
		$('#card-info-screen').delay(1000);
		topSlide('#card-info-screen', '626px');
	});
	//at this point card added (w/ 2 cards) should be showing.

	$('#card-info-screen .done-new-card').click(function() {
		rightSlide('#new-card-screen', '375px');
		topSlide('#card-info-screen', '626px');
		$('.card-place-holder').show();
		$('#card-info-screen').delay(1000);
		topSlide('#card-info-screen', '626px');
	});

	//ADD TO CART
	$('#add-to-cart').click(function() {
		console.log(price);
		updatePrice(0);
		if($('#orangutan-size-span').text() != 'Select Size') {
			$('#added').show(0).delay(1000).fadeOut(1000);
		}
		$('.place-holder').show();
	});

	// SELECTING
	//select size
	$('#size-screen .op').click(function() {
		$(this).siblings().css({fontWeight: 'normal'});
		$(this).css({fontWeight: 'bold'});
		size_text = $(this).text();
		$('.size-text').html(size_text);

		if(size_text != 'Small') {
			updatePrice(0.75);
		} else {
			if(price > 8.39) {
				updatePrice(-0.75);
			}
		}
	});

	//select topping
	$('#topping-screen .top-op').click(function() {
		$(this).siblings().css({fontWeight: 'normal'});
		$(this).css({fontWeight: 'bold'});
		topping1_text = $(this).text();
		
		if (topping1_text == "None") {
			topping1_text = 'Topping #1  (+ $0.75)';

			if((size_text == 'Small' && price == 9.14) ||
				(size_text == 'Large (+ $0.75)' && price == 9.89)) {
				updatePrice(-0.75);
			}

		} else if((size_text == 'Small' && price == 8.39) ||
				(size_text == 'Large (+ $0.75)' && price == 9.14)) {
				updatePrice(0.75);
		}
		$('.topping-text').html(topping1_text);
	});

	$('.select').click(function() {
		$('.select').css({backgroundColor: 'transparent'});
		$(this).css({backgroundColor: 'black'});
	});

	$('#back-home').click(function() {
		location.reload();
	});

});


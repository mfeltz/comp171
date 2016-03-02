$(document).ready(function(){

var slideOnRight = function(oldElem, newElem, dist) {
	$(newElem).animate({'right' : dist}, 400);

	$(oldElem).animate({'left': '-374px'}, 400);
};

var slideOffRight = function(oldElem, newElem, dist) {
	$(newElem).animate({'left' : dist}, 400);
	$(oldElem).animate({'right': '-374px'}, 400);
};

var slideToTop = function(oldElem, newElem, dist) {
	$(newElem).animate({'top' : dist}, 400);
	// $(oldElem).animate({'top': '626px'}, 400);
};

$('#cart-icon').click(function(){
	var oldElem = $(this).parent();
	slideOnRight(oldElem, '#cart-screen', '0px');
});

$('#back-arrow').click(function() {
	var oldElem = $(this).parent();
	slideOffRight(oldElem, '#home-screen', '0px');
});

$('#checkout-btn').click(function() {
	var oldElem = $(this).parent();
	slideToTop(oldElem, '#checkout-screen', '0px');
});


});


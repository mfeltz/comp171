$(document).ready(function(){

var fromLeft = function(newElem, dist) {
	console.log("clicked");
	$(newElem).animate({'right' : dist},400);
};

$('#cart-icon').click(function(){
	fromLeft("#cart-screen", '0px');

});


});


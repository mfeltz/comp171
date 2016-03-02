$(document).ready(function(){

var fromLeft = function(newElem) {
	console.log("clicked");
	$(newElem).animate({'left' : '15px'},1500);
};

$('#cart-icon').click(function(){fromLeft("#apple-cinn-feat")});


});


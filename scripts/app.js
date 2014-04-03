/*jshint loopfunc: true, quotmark:false */
/*global jQuery:false */
(function ($) {
    "use strict";

    var arr = [1, 2, 3, 4 ,5 ,6 ,7 ,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

	$("#default").html(arr.join(", "));
	arr.shuffle();
	$("#shuffled").html(arr.join(", "));

	$("#shuffle").on("click", function() {
		arr.shuffle();
		$("#shuffled").html(arr.join(", "));
	});
}(jQuery));
"use strict"

$(function(){
	var countimg	= $("figure"),
		image		= $("img"),
		subtitle	= $("figcaption");

	$(subtitle).click(function (){
		$(image).toggle();
		$(subtitle).toggle().toggleClass("active");
	});
});
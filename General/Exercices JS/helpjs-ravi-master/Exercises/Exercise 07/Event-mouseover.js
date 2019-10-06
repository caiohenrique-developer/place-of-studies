"use strict"

function eventHover(){
	var _button = $('figure .subtitle'),
	_imgLamp = $('figure .countimg img'),
	_imgLampOn = $('a').eq(1).attr('href')

	_button.on('click', function(){
		_imgLamp.attr('src', _imgLampOn)
	})
}

$(document).ready(function(){
	eventHover();
})
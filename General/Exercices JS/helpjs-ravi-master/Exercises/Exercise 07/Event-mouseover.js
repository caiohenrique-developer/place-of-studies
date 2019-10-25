"use strict"

function eventHover(){
	var _button = $('figure .subtitle figcaption'),
	_imgLamp = $('figure .countimg img'),
	_imgLampOff = $('a').eq(0).attr('href'),
	_imgLampOn = $('a').eq(1).attr('href')

	_button.mouseover(function(){
		if (_imgLamp.attr('src') == _imgLampOff) {
			_imgLamp.attr('src', _imgLampOn);
		} else if (_imgLamp.attr('src') == _imgLampOn) {
			_imgLamp.attr('src', _imgLampOff);
		}
	})
}

$(document).ready(function(){
	eventHover();
})
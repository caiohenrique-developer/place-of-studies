'use strict'

function getValue() {
	$('form #btn-soma').on('click', function(e){
		e.preventDefault();
		var _numberValue1 = parseFloat($('form label #soma1').val()),
		_numberValue2 = parseFloat($('form label #soma2').val());

		processing(_numberValue1, _numberValue2);
	})
}

function processing(val1, val2) {
		var _result = val1 * val2;
		$('form #resultado-soma').text('O resultado é: ' + _result);
}

$(function(){
	getValue()
})
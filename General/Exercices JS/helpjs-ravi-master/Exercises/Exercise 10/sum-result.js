'use strict'

function sumResult() {
	$('form #btn-soma').on('click', function(e){
		e.preventDefault();
		var _numberValue1 = parseFloat($('form label #soma1').val()),
		_numberValue2 = parseFloat($('form label #soma2').val()),
		_result = _numberValue1 + _numberValue2;

		$('form #resultado-soma').text('O resultado é: ' + _result);
	})
}

$(function(){
	sumResult()
})
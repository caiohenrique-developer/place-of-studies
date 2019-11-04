'use strict'

function getValue() {
	$('form #btn-send').on('click', function(e){
		e.preventDefault();

		var $name = $('form label #name').val(),
		$dateOfBirth = parseInt($('form label #date').val());

		// if($name.length > 4) {
		// 	$name.substr(0, 4)
		// }

		$('form label #name').keyup(function() {
			$('form label #name').val(this.value.match(/[0-3]*/));
		});

		console.log($name, $dateOfBirth)
	})
}

function validate(dom,tipo) {
	switch(tipo){
		case'num' : var regex = /[A-Za-z]/g;
		break;
		case'text' : var regex = /\d/g;
		break;
	}
	dom.value = dom.value.replace(regex,'');
}

// function parameters(value1, value2) {
// 	return value1 + value2;
// }

$(function(){
	getValue()
	validate()
	// parameters()
})
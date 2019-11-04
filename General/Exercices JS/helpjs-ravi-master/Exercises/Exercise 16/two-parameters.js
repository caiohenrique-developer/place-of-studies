'use strict'

function getValue() {
	$('form #btn-send').on('click', function(e){
		e.preventDefault();

		var $name = $('form label #name').val(),
		$dateOfBirth = parseInt($('form label #date').val());

		parameters($name, $dateOfBirth)
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

function parameters(value1, value2) {
	console.log('Olá seu nome é: ' + value1 + ', sua idade: ' + value2);
}

$(function(){
	getValue()
	validate()
})
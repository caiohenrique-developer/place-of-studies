'use strict'

// get the values of users
function getValue() {
	$('form #btn-send').on('click', function(e){
		e.preventDefault();

		var $name = $('form label #name').val(),
		$dateOfBirth = parseInt($('form label #date').val());

		parameters($name, $dateOfBirth)
	})
}

// validate if the input is text or number
function validate(dom,tipo) {
	switch(tipo){
		case'num' : var regex = /[A-Za-z]/g;
		break;
		case'text' : var regex = /\d/g;
		break;
	}

	dom.value = dom.value.replace(regex,'');
}

// do the processing
function parameters(value1, value2) {
	var $date = new Date(),
	$dateFullYear = $date.getFullYear(),
	$age = $dateFullYear - value2,
	$1stLetter = value1.substr(0,1).toUpperCase(),
	$name = $1stLetter + value1.substr(1,99);

	$('#result').html('Olá ' +$name+ ', sua idade é de ' +$age+ ' anos.')
}

$(function(){
	getValue()
	validate()
})
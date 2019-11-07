'use strict'

// get the values of users
function getValue() {
	$('form').on('submit', function(e){
		e.preventDefault();

		var $name = $('form label #name').val(),
		$dateOfBirth = parseInt($('form label #date').val());

		parameters($name, $dateOfBirth)
	})
}

// validate if the input is text or number
function validate(dom,tipo) {
	switch(tipo){
		case'num' : var regex = /[A-Za-z- ]/g;
		break;
		case'text' : var regex = /[\d- ]/g;
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
	$name = $1stLetter + value1.substr(1, value1.length);

	if($age === 0 || $age === 1){
		$('#result').html(
			'Olá ' +$name+ ', você tem ' +$age+ ' ano de idade.'
			+'<br>'
			+'Sendo assim você ainda é de menor.'
			)
	} else if($age < 18 && $age >= 0){
		$('#result').html(
			'Olá ' +$name+ ', sua idade é de ' +$age+ ' anos.'
			+'<br>'
			+'Sendo assim você ainda é de menor.'
			)
	} else if(value2 > $dateFullYear){
		$('#result').html('Digite a data correta o jamanta!')
		return false
	} else {
		$('#result').html(
			'Olá ' +$name+ ', sua idade é de ' +$age+ ' anos.'
			+'<br>'
			+'Parabéns você atingiu maioridade!'
			)
	}
}

$(function(){
	getValue()
	validate()
})
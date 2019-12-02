'use strict'

// get the values of users
function getValue(){
	$('#name').keypress(function(){
		var $this = $(this).val()

		String.prototype.capitalize = function(valor) {
			return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
		};

		$('#name').val($this.capitalize())
	})

	$('body').on('submit', 'form', function(e){
		e.preventDefault()

		var $name = $('#name').val(),
		$dateOfBirth = $('#date').val()

		showResult($name, $dateOfBirth)
	})
}

// validate if the input is text or number
function validate(dom,tipo) {
	switch(tipo){
		case'num' : var regex = /[A-Za-z- ]/g;
		break;
		case'text' : var regex =  /[\d]/g;
		break;
	}

	if(dom.value === " "){
		dom.value = dom.value.replace(/[ ]/g,'');
	}

	dom.value = dom.value.replace(regex,'');
}

// show the result values
function showResult(name, date){
	var $date = new Date(),
	$dateFullYear = $date.getFullYear(),
	$age = $dateFullYear - date,
	$name = name

	if($age === 0 || $age === 1){
		$('#result').html(
			'Olá ' +$name+ ', você tem ' +$age+ ' ano de idade.'
			+'<br>'
			+'Sendo assim você ainda é de menor.'
			)
	} else if($age < 18 && $age > 1){
		$('#result').html(
			'Olá ' +$name+ ', sua idade é de ' +$age+ ' anos.'
			+'<br>'
			+'Sendo assim você ainda é menor de idade.'
			)
	} else if(date > $dateFullYear){
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
})
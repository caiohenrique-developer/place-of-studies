(function theValues ()  {
	var _integers = {
		numOne : 5,
		numTwo : 2
	}

	showValues(_integers)
}())

function showValues  (_value) {
	console.log(_value)

	var _quotient = Math.floor(_value.numOne / _value.numTwo),
	_multiplication = _value.numTwo * _quotient,
	_rest = _value.numOne - _multiplication

	console.log(_quotient, _multiplication, _rest)

	$('#result').text('O resultado do exercício é: ' +_rest)
}
const getValue = () => {
	$('form').on('focusout', function(ev){
		ev.preventDefault()

        processValue($(this).serializeArray())
    })
}

const processValue =(_value)=> {
    var _theValues = []
    for(var _currentValue of _value) {
        _theValues.push(parseInt(_currentValue.value) || 0)
    }

    var _showResult = (_theValues[0] * _theValues[1])

    if(_showResult !== 0){
        $('#result').text('O resultado da multiplicação é: ' +_showResult)   
    } else {
        $('#result').text('Algum campo está vazio, resultado: ' +_showResult)
    }
}

$(function(){
	getValue()
})
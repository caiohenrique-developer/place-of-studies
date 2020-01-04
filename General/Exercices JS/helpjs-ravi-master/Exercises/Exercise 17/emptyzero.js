function getValues(){
	$( "form" ).on( "focusout", function( event ) {
		event.preventDefault();

		var $newArr = [];

		for(var amount of $(this).serializeArray()){
			$newArr.push(parseInt(amount.value) || 0);
		}

		showValues($newArr);
	});
}

function showValues(e){
	var $total = e.reduce((accumulator, currentValue) => {
		return accumulator + currentValue
	})

	e.forEach(function(v, i){
		console.log(v, i, e)

		if(!v == 0){
			$('#result').text('A soma total é: ' +$total)
		} else {
			$('#result').text('Algum campo ficou vazio, resultado: ' +0)
		}
	})
}

$(function(){
	getValues()
})
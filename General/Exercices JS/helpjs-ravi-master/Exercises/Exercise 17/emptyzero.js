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

	if (e.indexOf(0) > -1) {
		$('#result').text('Algum campo ficou vazio, resultado: ' +0)
	} else {
		$('#result').text('A soma total é: ' +$total)
	}
}

$(function(){
	getValues()
})
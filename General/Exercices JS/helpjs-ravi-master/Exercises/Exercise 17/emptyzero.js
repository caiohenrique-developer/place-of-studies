function getValues(){
	$( "form" ).on( "focusout", function( event ) {
		event.preventDefault();

		var $newArr = [];

		for(var valor of $(this).serializeArray()){
			$newArr.push(parseInt(valor.value));
		}

		showValues($newArr);
	});
}

function showValues(e){
	var $total = e.reduce((accumulator, currentValue) => {
		return accumulator + currentValue
	})

	if($('form label input').val() == ""){
		$('#result').text('Algum campo ficou vazio, resultado: ' +0)
	} else {
		$('#result').text('A soma total é: ' +$total)
	}
}

$(function(){
	getValues()
})
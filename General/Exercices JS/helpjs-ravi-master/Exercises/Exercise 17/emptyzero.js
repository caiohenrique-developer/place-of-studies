function getValues(){
	$( "form" ).on( "submit", function( event ) {
		event.preventDefault();

		showValues($( this ).serializeArray())
	});
}

function showValues(e){
	var $total = e.reduce((accumulator, currentValue) => {
		return parseInt(accumulator.value) + parseInt(currentValue.value)
	})

	console.log(e, ' valor: ' + $total)
}

$(function(){
	getValues()
})
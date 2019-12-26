function getValues(){
	$( "form" ).on( "submit", function( event ) {
		event.preventDefault();
		
		console.log( $( this ).serialize() );
	});
}

$(function(){
	getValues()
})
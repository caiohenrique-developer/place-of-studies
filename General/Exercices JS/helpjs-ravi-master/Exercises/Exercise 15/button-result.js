function buttonResult(){
	$('body button').on('click', function(){
		$('body span#resultado').html('Esse html veio do JavaScript...')
	})
}
// when the document is loaded
$(document).ready(function(){
	buttonResult()
})

// anonymous function
$(function(){
	buttonResult()
})
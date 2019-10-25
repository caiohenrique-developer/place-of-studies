function showResult(){
	$('body span#resultado').html('Esse html veio do JavaScript...')
}
// when the document is loaded
$(document).ready(function(){
	showResult()
})

// anonymous function
$(function(){
	showResult()
})
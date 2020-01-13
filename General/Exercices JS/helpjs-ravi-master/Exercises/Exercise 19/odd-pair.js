getValue = () => {
	$('form').on('submit', function(ev){
		ev.preventDefault()

		var _userValue = $('.user-number').val()

		if(_userValue % 2 === 0){
			$('#result').html('par: ' +_userValue)
		} else {
			$('#result').html('impar: ' +_userValue)
		}
	})

}

$(function(){
	getValue()
})
'use strict'

function getUserData() {
	var _form = $('body form')

	_form.on('submit', function(ev){
		ev.preventDefault()

		var _firstName = $('form label #first-name').val().replace(/\./gi, ""),
		_firstName = _firstName.replace(/\-/gi, ""),
		_lastName = $('form label #last-name').val().split('.').join("").replace('-', ''),
		_dataInfo = $('<span />').addClass('data-info');

		$('body').append(_dataInfo.html('Olá ' + _firstName +' '+ _lastName))
	});
}

$(function(){
	getUserData()
})
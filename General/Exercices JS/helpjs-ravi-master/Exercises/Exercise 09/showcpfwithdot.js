'use strict'

function getUserData() {
	var _form = $('body form')

	_form.on('submit', function(ev){
		ev.preventDefault()

		var _firstName = $('form label #first-name').val().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, "$1.$2.$3-$4"),
		_lastName = $('form label #last-name').val().split('.').join("").replace('-', ''),
		_dataInfo = $('<span />').addClass('data-info');

		$('body').append(_dataInfo.html('Olá ' + _firstName +' '+ _lastName))
	});
}

$(function(){
	getUserData()
})
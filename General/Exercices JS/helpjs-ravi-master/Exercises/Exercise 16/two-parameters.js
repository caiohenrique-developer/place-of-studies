function getValue(){
	$('#name').keypress(function(){
		var $this = $(this).val()

		
		String.prototype.capitalize = function(valor) {
			return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
		};

		$('#name').val($this.capitalize())
	})

	$('body').on('submit', 'form', function(e){
		e.preventDefault()

		var $name = $('#name').val(),
		$dateOfBirth = parseInt($('#date').val())

		showResult($name, $dateOfBirth)
	})
}

function showResult(name, date){
	console.log("mostrando o resultado: " +name+ ' e ' +date)
}

$(function(){
	getValue()
})
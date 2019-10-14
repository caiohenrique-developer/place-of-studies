function toChangeBackgroundColor() {
	$('button').on('click', function(e){
		e.preventDefault();

		var _this = $(this).css('background-color');

		// this way it works
		$('body').css('background-color', _this)

		// this way it works too
		// $('body').attr('style', 'background-color: '+_this)
	})
}

$(function(){
	toChangeBackgroundColor()
})
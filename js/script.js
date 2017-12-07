$(document).ready(function() {
	$('#menuButton, #menuBackground').click(function() {
		$('#mainMenu').toggleClass('activated');
		if($('#mainMenu').hasClass('activated')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'scroll');
		}
	});
});
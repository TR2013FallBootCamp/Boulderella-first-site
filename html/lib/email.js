$(document).ready(function(){
	
    $('li').find('.nopad').on('click', function() {
    var email = $('<p><strong>tiffanyduhl@hotmail.com</strong></p>');
    $(this).closest('li').append(email);
    $(this).remove();

});
});
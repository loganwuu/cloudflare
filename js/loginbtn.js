$( document ).ready(function() {
	var inputEmail = $.trim($("#inputEmail").val());
	var inputPassword = $.trim($("#inputPassword").val());

	if ( inputEmail == "" || inputPassword == "") {
		$( "button" ).addClass( "disabled" );
	} else if (inputEmail != "" && inputPassword != "") {
		$( "button" ).removeClass( "disabled" );
	}
});
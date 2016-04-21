	$(document).ready(function() {
		var theCollection = $('#collection').val();
		if (document.cookie.indexOf(theCollection) >= 0) {
			$('#EMAIL').hide();
			$('#follower-new').text('following').prop( "disabled", true );
			
		}
	$('#follower-new').click(function(e) {
		e.preventDefault();
		var totalFollowers = parseInt($('#numFollowers').val());
		var CookieDate = new Date;
		CookieDate.setFullYear(CookieDate.getFullYear( ) +10);
		var theCookie = $('#collection').val(); 
		if($('#EMAIL').val() !='') {
			totalFollowers++;
			data = $('#followers').serialize();
			$('#EMAIL').hide();
			$('#follower').text('following').prop( "disabled", true );
			$('#followText').html("You’re now first in line to see all of "+$('#collection').val()+"'s new products!");
			$('#followers').submit();
			$('#followText').html(totalFollowers+' Fans');
			document.cookie = theCookie+'=yes; expires=' + CookieDate.toGMTString( ) + '; path=/';
			
		}else {
			$('#EMAIL').addClass('required');
		}
	
	})
	
})
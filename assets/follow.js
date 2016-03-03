	$(document).ready(function() {
	$('#follower').click(function() {
		if($('#EMAIL').val() !='') {
			data = $('#followers').serialize();
			$('#EMAIL').hide();
			$('#follower').text('following').prop( "disabled", true );
			$('#followText').html("You’re now first in line to see all of "+$('#collection').val()+"'s new products!");
			$('#followers').submit();
			
		}else {
			$('#EMAIL').addClass('required');
		}
	
	})
	
})
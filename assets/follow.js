$(document).ready(function() {
	$('#follower').click(function() {
		if($('#EMAIL').val() !='') {
			data = $('#followers').serialize();
			$('#EMAIL').hide();
			$('#follower').text('following').prop( "disabled", true );
			$('#followText').html('You are now following '+$('#collection').val());
			$.ajax({
			  type: "POST",
			  url: 'http://dev.modifywatches.com/sadhorse/followers.php',
			  data: data,
			  success: function(result) {
			  		console.log(result);
			  }
			});
		}else {
			$('#EMAIL').addClass('required');
		}
	
	})
	
})
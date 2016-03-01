$(document).ready(function() {
	$('#follower').click(function() {
		if($('#EMAIL').val() !='') {
			data = $('#followers').serialize();
			$('#EMAIL').hide();
			$('#follower').text('following').prop( "disabled", true );
			$('#followText').html("You’re now first in line to see all of "+$('#collection').val()+"'s new products!");
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
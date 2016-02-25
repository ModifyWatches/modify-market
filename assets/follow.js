$(document).ready(function() {
	$('#follower').click(function() {
		if($('#EMAIL').val() !='') {
			data = $('#followers').serialize();
			$.ajax({
			  type: "POST",
			  url: 'http://dev.modifywatches.com/sadhorse/followers.php',
			  data: data,
			  success: function(result) {
			  		console.log(result);
			  		$('#EMAIL').hide();
			  }
			});
		}else {
			$('#EMAIL').addClass('required');
		}
	
	})
	
})
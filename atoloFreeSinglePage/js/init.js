$(document).ready(function(){

	$('.menu li a[href^="#"]').bind('click.smoothscroll',function (e) {
	    e.preventDefault();
	 
	    var target = this.hash,
	    $target = $(target);
	 
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'easeInOutQuart');
	});
  
  
  $('.flexslider-home').flexslider({
			animation: "slide",
			slideshow: true,
			slideshowSpeed: 5000,
			animationSpeed: 600,
			controlNav: false,
			prevText: "Previous",    
			nextText: "Next",     
			useCSS: false
			});	

  $(".work-item a[rel^='prettyPhoto']").prettyPhoto({
						animation_speed: 'normal',
						autoplay_slideshow: false,
						slideshow: 3000
					});
  
  var options = { success: showResponse, beforeSubmit: showRequest}; 
		    $('#my-form').submit(function() { 
        	$(this).ajaxSubmit(options); 
	        return false; 
    		}); 

});//end document

function showResponse(responseText, statusText)  { 
	if (statusText == 'success') {
		$('.contact-form').html('<h4>Message sent. Thanks for contacting us.</h4>'); 
		$('#output').html('<p>' + $('someText', responseText).html()  + '</p>'); 
	} else {
		alert('status: ' + statusText + '\n\nSomething is wrong here');
	}
}

function showRequest(formData, jqForm, options) { 
	var form = jqForm[0];
	var validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
	// or use 
	// if (!$('input[@name=email]').fieldValue()) { 
	if (!form.author.value) { 
		$('#output').html('<div class="output2">Please fill the Name field!</div>'); 
		return false; 
	} else if (!form.email.value) {
		$('#output').html('<div class="output2">Please fill the Email field!</div>'); 
		return false; 
	} else if (form.email.value.search(validRegExp) == -1) {
		$('#output').html('<div class="output2">Please provide a valid Email address!</div>'); 
		return false; 
	}
	else if (!form.title.value) {
		$('#output').html('<div class="output2">Please fill the Subject field!</div>'); 
		return false; 
	}
	else if (!form.message.value) {
		$('#output').html('<div class="output2">Please fill the Message field!</div>'); 
		return false; 
	}
	 else {	   
	 $('#output').html('Sending message...!');  		
		return true;
	}
}
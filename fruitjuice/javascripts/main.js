$(document).ready(function(){
    // Screenshots slide    
    $(document).ready(function() {
		$('#screen').cycle({
			fx: 'scrollLeft',
			speed:   600, 
            timeout: 6000, 
            next:   '#screen', 
            pause:   1 
		});
	});

    // Live tile
	$(".live-tile").not(".static").liveTile();
        
    // Share buttons | For more buttons visit: http://sharrre.com/#documentation
    $('#shareme').sharrre({
  		share: {
			googlePlus: true,
			facebook: true,
			twitter: true,
    		linkedin: true
		},
		
		buttons: {
			googlePlus: {size: 'tall'},
			facebook: {layout: 'box_count'},
			twitter: {count: 'vertical'},
			linkedin: {counter: 'top'}
		},

		hover: function(api, options){
			$(api.element).find('.buttons').show();
		},
		hide: function(api, options){
			$(api.element).find('.buttons').hide();
		}
	});
});
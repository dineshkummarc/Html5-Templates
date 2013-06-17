// Jquery with no conflict
jQuery(document).ready(function($) {
	
	//##########################################
	// Superfish
	//##########################################
	
	$("ul.sf-menu").superfish({ 
        animation: {height:'show'},   // slide-down effect without fade-in 
        delay:     400 ,              // 1.2 second delay on mouseout 
        autoArrows:  false,
        speed: 200
    });
    
    //##########################################
	// HOME SLIDER
	//##########################################
	
    $('.home-slider').flexslider({
    	animation: "fade",
    	controlNav: true,
    	keyboardNav: true,
    	directionNav: false
    });
    
    //##########################################
	// PROJECT SLIDER
	//##########################################
	
    $('.project-slider').flexslider({
    	animation: "fade",
    	controlNav: true,
    	directionNav: false,
    	keyboardNav: true
    });
    
    //##########################################
	// TESTIMONIAL SLIDER
	//##########################################
	
    $('.testimonial-slider').flexslider({
    	animation: "horizontal",
    	controlNav: false,
    	directionNav: false,
    	keyboardNav: false,
    	slideshowSpeed: 8000
    });
    

	//##########################################
	// Tweet feed
	//##########################################
	
	$("#tweets").tweet({
        count: 3,
        username: "ansimuz"
    });

	//##########################################
	// Top Widget
	//##########################################

	var topContainer = $("#top-widget");
	var topTrigger = $("#top-open");
	
	topTrigger.click(function(){
		topContainer.animate({
			height: 'toggle'
		});
		
		if( topTrigger.hasClass('tab-closed')){
			topTrigger.removeClass('tab-closed');
		}else{
			topTrigger.addClass('tab-closed');
		}
		
		return false;
		
	});

	//##########################################
	// Tool tips
	//##########################################
	
	
	$('.poshytip').poshytip({
    	className: 'tip-twitter',
		showTimeout: 1,
		alignTo: 'target',
		alignX: 'center',
		offsetY: 5,
		allowTipHover: false
    });
	
   
    
    $('.form-poshytip').poshytip({
		className: 'tip-twitter',
		showOn: 'focus',
		alignTo: 'target',
		alignX: 'right',
		alignY: 'center',
		offsetX: 5
	});
	
	
	//##########################################
	// PrettyPhoto
	//##########################################
	
	$('a[data-rel]').each(function() {
	    $(this).attr('rel', $(this).data('rel'));
	});
	
	$("a[rel^='prettyPhoto']").prettyPhoto();
	
	
	//##########################################
	// Masonry
	//##########################################

	
	var $container = $('.portfolio-list');
	
	$container.imagesLoaded(function(){
		$container.masonry({
			itemSelector: 'figure',
			isAnimated: true
		});
	});

	
    
    //##########################################
	// Accordion box
	//##########################################

	$('.accordion-container').hide(); 
	$('.accordion-trigger:first').addClass('active').next().show();
	$('.accordion-trigger').click(function(){
		if( $(this).next().is(':hidden') ) { 
			$('.accordion-trigger').removeClass('active').next().slideUp();
			$(this).toggleClass('active').next().slideDown();
		}
		return false;
	});
	
	//##########################################
	// Toggle box
	//##########################################
	
	$('.toggle-trigger').click(function() {
		$(this).next().toggle('slow');
		$(this).toggleClass("active");
		return false;
	}).next().hide();
	
	
	
	//##########################################
	// Tabs
	//##########################################

    $(".tabs").tabs("div.panes > div", {effect: 'fade'});
	
	
	//##########################################
	// Combo Navigation
	//##########################################
	
	$("#comboNav").change(function() {
	  location = this.options[this.selectedIndex].value;
	});

	
//close			
});




















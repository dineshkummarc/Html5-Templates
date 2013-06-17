// JavaScript Document

jQuery(document).ready(function(){
	
	jQuery('#navigation').superfish({
		delay:       800,
		animation:   { opacity: 'show', height:'show' },
		speed:       300,
		autoArrows:  true,
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		dropShadows: false
	}); 
	
	jQuery('#featured_desc').jcarousel({
		scroll: 1,
		auto: 5,
		wrap: 'both',
		animation: 1500,
		initCallback: feature_carousel_initCallback,
		buttonNextHTML: null,
		buttonPrevHTML: null,
		easing: 'easeInOutExpo'
	});
	
	jQuery('#featured_images').jcarousel({
		scroll: 1,
		auto: 5,
		wrap: 'both',
		animation: 1500,
		initCallback: feature_carousel_initCallback,
		itemVisibleInCallback: {onBeforeAnimation: images_itemVisibleInCallback},
		buttonNextHTML: null,
		buttonPrevHTML: null,
		easing: 'easeInOutExpo'
	});
	
	$('.roundify').corner('8px');
	$('.wp-pagenavi span, .wp-pagenavi a').corner('3px');
	$('#navigation li a.main_buttons').corner('5px');
	
	//Form
	
	var loader = jQuery('<div id="loader"><img src="images/ajax-loader.gif" alt="loading..." /> <span>Sending Message...</span></div>')
		.appendTo('#form_result')
		.hide();
	jQuery().ajaxStart(function() {
		jQuery('#contact_form').hide(500);
		jQuery('#quick_contact').hide(500);
		loader.show(500);
	}).ajaxStop(function() {
		loader.hide(500);
	}).ajaxError(function(a, b, e) {
		throw e;
	});
	
	$("#contact_form").validate({
			
		rules: {
			input_name: 'required',
			input_email: {
				required: true,
				email: true
			},
			input_subject: 'required',
			textarea_message: 'required'
		},
		messages: {
			input_name: 'Name is required',
			input_email: {
				required: 'Email is required',
				email: 'Invalid email format'
			},
			input_subject: 'Please specify a subject',
			textarea_message: 'Message is empty'
		},
		errorElement: 'span',
		errorClass: 'error_message',
		errorPlacement: function(error, element) {
			error.appendTo(element.parent('span').prev('label'));
		},
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				target : '#form_result'
			});
		}
			
	});
	
	$("#quick_contact").validate({
			
		rules: {
			input_name: 'required',
			input_email: {
				required: true,
				email: true
			},
			input_subject: 'required',
			textarea_message: 'required'
		},
		messages: {
			input_name: 'Name is required',
			input_email: {
				required: 'Email is required',
				email: 'Invalid email format'
			},
			textarea_message: 'Message is empty'
		},
		errorElement: 'span',
		errorClass: 'error_message',
		errorPlacement: function(error, element) {
			error.appendTo(element.parent('p').prev('p'));
		},
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				target : '#form_result'
			});
		}
			
	});
	
	//Initialize Zebra Table
	
	zebra_table();
	
});

//Functions

function feature_carousel_initCallback($carousel) {
	
	jQuery('#featured_buttons li').bind('click', function() {
		$carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
		$carousel.startAuto(0);
		jQuery('#featured_buttons li.clicked').removeClass('clicked');
		jQuery(this).addClass('clicked');
		return false;
	});

};

function images_itemVisibleInCallback(carousel, item, idx, state) {
	jQuery('#featured_buttons li.clicked').removeClass('clicked');
	jQuery('#featured_buttons li:contains("' + idx + '")').addClass('clicked');
}; 

jQuery(function(){ //smoothscroll
	jQuery('.smooth_scroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
});

function zebra_table(){ //zebra table

	jQuery('tbody tr:nth-child(odd)').addClass('odd');
	
}

/*** Cufon ***/
/** ----------------------------------------------------- **/

Cufon.replace(
	
	'#featured_desc h2,' +
	'#featured_desc h3,' +
	'#contact_page #contact_form label,' +
	'.comment-author,' +
	'.font_sansation'
				  
,{ fontFamily: 'Sansation', hover: true });

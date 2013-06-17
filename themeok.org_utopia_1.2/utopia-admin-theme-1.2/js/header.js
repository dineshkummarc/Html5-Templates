//userinfo
jQuery('.user-info').click(function(){
    if(!jQuery(this).hasClass('user-active')) {
        var $userInfo = jQuery(this);
        var $userDrop = jQuery('.user-dropbox');

        $userDrop.slideDown('fast');
        $userInfo.addClass('user-active');					//add class to change color and background

    } else {
        console.log('has class');
        jQuery(this).removeClass('user-active');
        jQuery('.user-dropbox').hide();
    }

    //remove notification box if visible
    jQuery('.notification-counter').removeClass('notification-active');
    jQuery('.notification-box').hide();
    jQuery('#triangle-down').show();

    return false;
});


//notification onclick
jQuery('.notification-counter').click(function(){

    var $counter = jQuery(this);

    if(!$counter.hasClass('notification-active')) {
        $counter.addClass('notification-active');
        jQuery('#triangle-down').hide();
        jQuery('.notification-box').slideDown('fast');			//show notification box

    } else {
        $counter.removeClass('notification-active');
        jQuery('#triangle-down').show();
        jQuery('.notification-box').hide();
    }

    //this will hide user info drop down when visible
    jQuery('.user-info').removeClass('user-active');
    jQuery('.user-dropbox').hide();

    return false;
});

$(document).mouseup(function(e) {
    if(jQuery(e.target).parents().index() < 4 || jQuery(e.target).parents().index() > 11){
        jQuery('.notification-counter').removeClass('notification-active');
        jQuery('.notification-box').hide();

        jQuery('.user-info').removeClass('user-active');
        jQuery('.user-dropbox').hide();
        jQuery('#triangle-down').show();
    }
});

// Widget hover event
// show arrow image in the right side of the title upon hover
jQuery('.utopia-widget-title').hover(function(){
    jQuery(this).after().append('<span class="collapse-widget">&nbsp;&nbsp;</span>');
}, function(){
    jQuery(this).children('.collapse-widget').remove()
});

//show/hide widget content when widget title is clicked
jQuery('.utopia-widget-title').click(function(){
    if(jQuery(this).next().is(':visible')) {
        console.log(this);
        jQuery(this).next().slideUp('fast');
        jQuery(this).addClass('utopia-widget-title-toggle');
    } else {
        jQuery(this).next().slideDown('fast');
        jQuery(this).removeClass('utopia-widget-title-toggle');
    }

});


jQuery('.search-panel').hover(function(){
    jQuery('.search-box img').hide();
    jQuery('.search-box form').show();
}, function(){
    jQuery('.search-box form').hide();
    jQuery('.search-box img').show();
});

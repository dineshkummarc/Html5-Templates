jQuery(function(){
    /*************************** Sidebar js **************************************/

    // Dropdown menu js
    jQuery(".leftmenu ul li").hover(function(){
        jQuery(this).find('ul:first').css({visibility: "visible", display: "inline-block"}).show(400);
    },function(){
        jQuery(this).find('ul:first').css({visibility: "hidden", display:'none'});
    });

    // Responsiveness
    if(jQuery(this).width() < 1024) {
        jQuery('.sidebar').addClass('lefticon');
        jQuery(".leftmenu ul li ul").removeClass('dropdown').addClass('sub-menu');
        jQuery('.sidebar-container').removeClass('span2').addClass('span1');
        jQuery('.body-container').removeClass('span10').addClass('span11');
    }else{
        jQuery('.sidebar').removeClass('lefticon');
        jQuery(".leftmenu ul li ul").removeClass('sub-menu').addClass('dropdown');
        jQuery('.sidebar-container').removeClass('span1').addClass('span2');
        jQuery('.body-container').removeClass('span11').addClass('span10');
    }

    if(jQuery(window).width() < 750){
        jQuery('.sidebar').removeClass('lefticon');
        jQuery(".leftmenu ul li ul").removeClass('sub-menu').addClass('dropdown');
        jQuery(".leftmenu ul li ul").removeClass('sub-menu').addClass('dropdown');
        jQuery('.sidebar-container').removeClass('span1').addClass('span2');
        jQuery('.body-container').removeClass('span11').addClass('span10');
    }
});

jQuery(window).load(function(){
    if(jQuery('.sidebar').hasClass('lefticon')){
        jQuery('.leftmenu ul li ul').css({left:'38px'});
    }else{
        if(jQuery('.sidebar-toggle > .btn-navbar').is(':visible')){
            jQuery('.leftmenu ul li ul').css({left:'220px'});
        }else{
            var $mainW = jQuery('.sidebar > .leftmenu > ul > li').width();
            jQuery('.leftmenu ul li ul').css({left:parseInt($mainW)+32 + 'px'});
        }

    }
});

//wrap menu to em when click will return to true
//this code is required in order the code (next below this code) to work.
jQuery('.leftmenu a span').each(function(){
    jQuery(this).wrapInner('<em />');
});

//screen resize
jQuery(window).resize(function(){

    if(jQuery(this).width() < 1024) {
        jQuery('.sidebar').addClass('lefticon');
        jQuery(".leftmenu ul li ul").removeClass('dropdown').addClass('sub-menu');
        jQuery('.sidebar-container').removeClass('span2').addClass('span1');
        jQuery('.body-container').removeClass('span10').addClass('span11');
    }else{
        jQuery('.sidebar').removeClass('lefticon');
        jQuery(".leftmenu ul li ul").removeClass('sub-menu').addClass('dropdown');
        jQuery('.sidebar-container').removeClass('span1').addClass('span2');
        jQuery('.body-container').removeClass('span11').addClass('span10');
    }

    if(jQuery(window).width() < 750){
        jQuery('.sidebar').removeClass('lefticon');
        jQuery(".leftmenu ul li ul").removeClass('sub-menu').addClass('dropdown');
        jQuery(".leftmenu ul li ul").removeClass('sub-menu').addClass('dropdown');
        jQuery('.sidebar-container').removeClass('span1').addClass('span2');
        jQuery('.body-container').removeClass('span11').addClass('span10');
    }

    if(jQuery('.sidebar').hasClass('lefticon')){
        jQuery('.leftmenu ul li ul').css({left:'38px'});
    }else{
        if(jQuery('.sidebar-toggle .btn-navbar').is(':visible')){
            jQuery('.leftmenu ul li ul').css({left:'180px'});
        }else{
            $mainW = jQuery('.leftmenu ul').width();
            jQuery('.leftmenu ul li ul').css({left:parseInt($mainW)+32 + 'px'});
        }
    }
});
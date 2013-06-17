				Cufon.replace('span,p,h1,h2,h3,h4,h5,h6,label',{
					textShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)'
				});
	            $(function() {
				var $loader		= $('#loading');
				var $list		= $('#nav');
				var $currImage 	= $('#main').children('img:first');
				
				$('<img>').load(function(){
					$loader.hide();
					$currImage.fadeIn(3000);	
					setTimeout(function(){
					var windowHeight = document.documentElement.clientHeight;
					var PopupHeight = $("#nav").height()+58;
					$list.animate({'top':windowHeight-PopupHeight},1000);
					},
					1000);
				}).attr('src',$currImage.attr('src'));
				
				buildThumbs();
				
				function buildThumbs(){
					$list.children('li.album').each(function(){
						var $elem 			= $(this);
						var $thumbs_wrapper = $elem.find('.thumbs_wrapper');
						var $thumbs 		= $thumbs_wrapper.children(':first');
						var finalW 			= $thumbs.find('img').length * 183;
						$thumbs.css('width',finalW + 'px');
						makeScrollable($thumbs_wrapper,$thumbs);
					});
				}
				$list.find('.arrow_down').load('click',function(){
					var $this = $(this);
					hideThumbs();
					$this.addClass('arrow_up').removeClass('arrow_down');
					var $elem = $this.closest('li');
					$elem.addClass('current').animate({'height':'170px'},200);
					var $thumbs_wrapper = $this.parent().next();
					$thumbs_wrapper.show(200);
				});
				$list.find('.arrow_down').live('click',function(){
					var $this = $(this);
					hideThumbs();
					$this.addClass('arrow_up').removeClass('arrow_down');
					var $elem = $this.closest('li');
					$elem.addClass('current').animate({'height':'170px'},200);
					var $thumbs_wrapper = $this.parent().next();
					$thumbs_wrapper.show(200);
				});
				$list.find('.arrow_up').live('click',function(){
					var $this = $(this);
					$this.addClass('arrow_down').removeClass('arrow_up');
					hideThumbs();
				});	
				$list.find('.thumbs img').bind('click',function(){
					var $this = $(this);
					$loader.show();
					$('<img class="preview"/>').load(function(){
						var $this = $(this);
						var $currImage = $('#main').children('img:first');
						$this.insertBefore($currImage);
						$loader.hide();
						$currImage.fadeOut(2000,function(){
							$(this).remove();
						});
					}).attr('src',$this.attr('alt'));
				}).bind('mouseenter',function(){
					$(this).stop().animate({'opacity':'1'});
				}).bind('mouseleave',function(){
					$(this).stop().animate({'opacity':'0.7'});
				});
				
				function hideThumbs(){
					$list.find('li.current')
						 .animate({'height':'50px'},400,function(){
							$(this).removeClass('current');
						 })
						 .find('.thumbs_wrapper')
						 .hide(200)
						 .andSelf()
						 .find('.link span')
						 .addClass('arrow_down')
						 .removeClass('arrow_up');
				}

				function makeScrollable($outer, $inner){
					var extra 			= 800;
					var divWidth = $outer.width();
					$outer.css({
						overflow: 'hidden'
					});
					var lastElem = $inner.find('img:last');
					$outer.scrollLeft(0);
					$outer.unbind('mousemove').bind('mousemove',function(e){
						var containerWidth = lastElem[0].offsetLeft + lastElem.outerWidth() + 2*extra;
						var left = (e.pageX - $outer.offset().left) * (containerWidth-divWidth) / divWidth - extra;
						$outer.scrollLeft(left);
					});
				}
               });
			   $(function() {
                $('#menu > li').bind('mouseenter',function(){
					var $elem = $(this);
					$elem.find('img')
						 .stop(true)
						 .animate({
							'width':'170px',
							'height':'170px',
							'left':'0px'
						 },400,'easeOutBack')
						 .andSelf()
						 .find('.wrap')
					     .stop(true)
						 .animate({'top':'140px'},500,'easeOutBack')
						 .andSelf()
						 .find('.active')
					     .stop(true)
						 .animate({'height':'170px'},300,function(){
						var $sub_menu = $elem.find('.box');
						if($sub_menu.length){
							var left = '170px';
							if($elem.parent().children().length == $elem.index()+1)
								left = '-170px';
							$sub_menu.show().animate({'left':left},200);
						}	
					});
				}).bind('mouseleave',function(){
					var $elem = $(this);
					var $sub_menu = $elem.find('.box');
					if($sub_menu.length)
						$sub_menu.hide().css('left','0px');
					
					$elem.find('.active')
						 .stop(true)
						 .animate({'height':'0px'},300)
						 .andSelf().find('img')
						 .stop(true)
						 .animate({
							'width':'0px',
							'height':'0px',
							'left':'85px'},400)
						 .andSelf()
						 .find('.wrap')
						 .stop(true)
						 .animate({'top':'25px'},500);
				});
                });
				$(function() {
							$('#menu').stop().animate({'marginLeft':'-485px'},1000);
			
							$('#menu').hover(
								function () {
									$('a',$(this)).stop().animate({'marginLeft':'485px'},1000);
								},
								function () {
									$('a',$(this)).stop().animate({'marginLeft':'-0px'},1000);
								}
							);
						});
						
				$(window).load(function() {
						var imageArray = ['images/album/2.jpg', 'images/album/3.jpg', 'images/album/4.jpg', 'images/album/5.jpg', 'images/album/6.jpg'];
						var hidden = $('body').append('<div id="img-cache" style="display:none/>').children('#img-cache');
						$.each(imageArray, function (i, val) {
						  $('<img/>').attr('src', val).appendTo(hidden);
						});
				});
		
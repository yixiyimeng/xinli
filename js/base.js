$('.header .sublink').hover(function(e){e.stopPropagation();
	$(this).find('.subnav').stop().slideDown(300);
},function(e){e.stopPropagation();
	$(this).find('.subnav').stop().slideUp(300);
})
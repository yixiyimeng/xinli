$('.header .sublink').hover(function(e){e.stopPropagation();
	$(this).find('.subnav').stop().slideDown(300);
},function(e){e.stopPropagation();
	$(this).find('.subnav').stop().slideUp(300);
});
function Rin($Box, v) { //$Box移动的对象，v对象移动的速率
		var $Box_ul = $Box.find("ul"),
			$Box_li = $Box_ul.find("li"),
			left = 0,
			s = 0,
			timer; //定时器

		$Box_li.each(function(index) {
			s += $(this).outerWidth(true); //即要滚动的长度
		})

		window.requestAnimationFrame = window.requestAnimationFrame || function(Tmove) {
			return setTimeout(Tmove, 1000 / 60)
		};
		window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

		if (s >= $Box.width()) { //如果滚动长度超出Box长度即开始滚动，没有的话就不执行滚动
			$Box_li.clone(true).appendTo($Box_ul);
			Tmove();

			function Tmove() {
				//运动是移动left  从0到-s;（个人习惯往左滚）
				left -= v;
				if (left <= -s) {
					left = 0;
					$Box_ul.css("left", left)
				} else {
					$Box_ul.css("left", left)
				}
				timer = requestAnimationFrame(Tmove);
			}
			$Box_ul.hover(function() {
				cancelAnimationFrame(timer)
			}, function() {
				Tmove()
			})
		}

	}
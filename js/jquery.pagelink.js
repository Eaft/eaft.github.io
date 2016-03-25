$(function(){
	$('.js-pagelink').click(function(){
		var speed = 400;
		var href = $(this).attr("href");
		// var tmp = href.split('#');
		// href = '#' + tmp[tmp.length-1];
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-20;
		$("html, body").animate({scrollTop:position}, speed, "swing");

		return false;
	});
});

// http://qiita.com/stm3/items/cedc329559a03d4337be#%E5%8F%82%E8%80%83

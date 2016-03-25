$(function(){
	var setFlail = function(selector){
		$(selector)
		.jrumble()
		// .hover(function() {
		// 	$(this).trigger('startRumble');
		// }, function(){
		// 	$(this).trigger('stopRumble');
		// })
		.hover(function() {
			var directions = ['top', 'right', 'btm', 'left', 'topLeft', 'topRight', 'btmLeft', 'btmRight'];
			var direction = directions[Math.floor(Math.random()*8)];

			var position = $(this).offset();
			var window_width = $(window).width();
			var window_height = $(window).height();

			var distance;
			switch (direction) {
				case 'top':
					distance = position.top;
					break;
				case 'right':
					distance = window_width - position.left;
					break;
				case 'btm':
					distance = window_height - position.top;
					break;
				case 'left':
					distance = position.left;
					break;
				case 'topLeft':
					distance = Math.sqrt( Math.pow(position.top, 2) + Math.pow(position.left, 2) );
					break;
				case 'topRight':
					distance = Math.sqrt( Math.pow(position.top, 2) + Math.pow(window_width-position.left, 2) );
					break;
				case 'btmLeft':
					distance = Math.sqrt( Math.pow(window_height-position.top, 2) + Math.pow(position.left, 2) );
					break;
				case 'btmRight':
					distance = Math.sqrt( Math.pow(window_height-position.top, 2) + Math.pow(window_width-position.left, 2) );
					break;
			}

			$(this)
			// .trigger('stopRumble')
			.flyOffPage({
				direction: direction,
				duration: distance // 距離に比例した時間で消えるようにする
			});
		});
	}

	$('#js-frail-trigger')
	.jrumble()
	.hover(function() {
		$(this).trigger('startRumble');
	}, function(){
		$(this).trigger('stopRumble');
	})
	.click(function() {
		$(this).remove();
		$('body').find('*').andSelf().contents().each(function() {
			if (this.nodeType == 3) {
				$(this).replaceWith($(this).text().replace(/(\S)/g, "<span class='js-frail'>$&</span>"));
			}
		});
		setFlail('.js-frail');
	});
});

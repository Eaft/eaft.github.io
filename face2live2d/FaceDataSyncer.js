var FaceDataSyncer = function() {
	this.currentData = false;
	this.count = 0;
	this.test = 1;

	window.requestAnimationFrame = (
		window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame
	);

	navigator.getMedia = (
		navigator.getUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia ||
		navigator.msGetUserMedia
	);

	navigator.getMedia ({ video:true, audio:false }, function(stream) {
		var video = document.getElementById('user-face__video');
		video.src = window.URL.createObjectURL(stream);
	}, function(err){console.log(err);});

	var ctracker = new clm.tracker();
	ctracker.init(pModel);
	var videoInput = document.getElementById('user-face__video');
	ctracker.start(videoInput);

	var canvasInput = document.getElementById('user-face__canvas');
	var canvasContext = canvasInput.getContext('2d');

	function drawLoop() {
		requestAnimationFrame(drawLoop);
		canvasContext.clearRect(0, 0, canvasInput.width, canvasInput.height);
		ctracker.draw(canvasInput);
		FaceDataSyncer.setUserFace(ctracker.getCurrentPosition());
	}
	drawLoop();
}

FaceDataSyncer.setUserFace = function(data) {
	currentData = data;
}

FaceDataSyncer.makeCharFace = function(live2DModel) {
	if(currentData === false) {
		return;
	}
	count += 1;

	// live2DModel.setParamFloat("PARAM_BREATH", (0.5*Math.sin((2*3.1415/130)*count)+0.5)*0.6 );

	var getDist = function(p1, p2) {
		return Math.sqrt( Math.pow(p1[0]-p2[0], 2) + Math.pow(p1[1]-p2[1], 2) );
	}

	var getNormalizedParam = function(dist, min, max, bot_score, top_score) {
		var dist = ( dist-bot_score ) * ( max / ( top_score-bot_score ) );
		if(dist > max) {
			return max;
		}
		if(dist < min) {
			return min;
		}
		return dist;
	}


	var p = currentData;
	var base_dist = getDist(p[27], p[32]);

	live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", getNormalizedParam(getDist(p[60], p[57]) / base_dist, 0, 1, 0.09, 0.3));
	live2DModel.setParamFloat("PARAM_BROW_R_Y", getNormalizedParam(getDist(p[20], p[63]) / base_dist, -1, 1, 0.29, 0.35));
	live2DModel.setParamFloat("PARAM_BROW_L_Y", getNormalizedParam(getDist(p[16], p[67]) / base_dist, -1, 1, 0.29, 0.35));

	var x = (p[50][0] - p[44][0]) / base_dist;
	var y = (p[50][1] - p[44][1]) / base_dist;
	var a = Math.atan2(y, x)*80;
	live2DModel.setParamFloat("PARAM_ANGLE_Z", a);
	live2DModel.setParamFloat("PARAM_BODY_ANGLE_Z", a/8);

	var l = getDist(p[35], p[62]) / base_dist;
	var r = getDist(p[39], p[62]) / base_dist;
	var a = (l-r)*120;
	live2DModel.setParamFloat("PARAM_ANGLE_X", a);
	live2DModel.setParamFloat("PARAM_BODY_ANGLE_X", a/10);
	live2DModel.setParamFloat("PARAM_BUST_X", a/20 );
	live2DModel.setParamFloat("PARAM_EYE_BALL_X", a/70 );

	var x = ( p[0][1] - p[23][1] ) / base_dist;
	var a = x*140;
	live2DModel.setParamFloat("PARAM_ANGLE_Y", a);
	live2DModel.setParamFloat("PARAM_BUST_Y", a/20 );
	live2DModel.setParamFloat("PARAM_EYE_BALL_Y", a/20 );
}

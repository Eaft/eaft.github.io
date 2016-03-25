var set_oppai = function(container_id, status) {
	var size = Number(document.getElementById('size').value);

	var b1 = Number(document.getElementById('b1').value);
	var b2 = Number(document.getElementById('b2').value);
	var b3 = Number(document.getElementById('b3').value);
	var b4 = Number(document.getElementById('b4').value);
	var b5 = Number(document.getElementById('b5').value);
	var b6 = Number(document.getElementById('b6').value);
	var b7 = Number(document.getElementById('b7').value);
	var b8 = Number(document.getElementById('b8').value);
	var b9 = Number(document.getElementById('b9').value);
	var b10 = Number(document.getElementById('b10').value);
	var b11 = Number(document.getElementById('b11').value);
	var b12 = Number(document.getElementById('b12').value);

	var n1 = Number(document.getElementById('n1').value);
	var n2 = Number(document.getElementById('n2').value);
	var n3 = Number(document.getElementById('n3').value);
	var n4 = Number(document.getElementById('n4').value);
	var n5 = Number(document.getElementById('n5').value);
	var n6 = Number(document.getElementById('n6').value);
	var n7 = Number(document.getElementById('n7').value);
	var n8 = Number(document.getElementById('n8').value);
	var n9 = Number(document.getElementById('n9').value);
	var n10 = Number(document.getElementById('n10').value);
	var n11 = Number(document.getElementById('n11').value);

	var o1 = Number(document.getElementById('o1').value);
	var o2 = Number(document.getElementById('o2').value);
	var o3 = Number(document.getElementById('o3').value);
	var o4 = Number(document.getElementById('o4').value);

	var z_min = Number(document.getElementById('z_min').value);
	var z_max = Number(document.getElementById('z_max').value);

	var oppai = function(x, y) {
		var breast = function(x, y) {
			return b1*Math.pow(b2, b3*(Math.pow(b4*Math.abs(x)+b5,b6)+Math.pow(b7*y,b8)) + b9*Math.pow(b10*y+b11,b12));
		}
		var nippel = function(x, y) {
			return n1*Math.pow(n2, n3*Math.pow(n4,n5)*Math.pow(Math.pow(Math.abs(n6*x)+n7,n8)+Math.pow(n9*y,n10),n11));
		}
		var other = function(x, y) {
			return o1*y+o2*(Math.pow(o3*x,o4));
		}
		return size*(breast(x,y)+nippel(x,y)+other(x,y));
	}

	var y_length = 100;
	var x_length = 100;
	var min_step = 0.05;

	// データ配列準備
	var z = new Array(y_length);
	for(var i=0; i<y_length; i++) {
		z[i] = new Array(x_length);
	}

	// 計算
	for(var py=0, y=-2.5; py<y_length; py++, y+=min_step) {
		for(var px=0, x=-2.5; px<x_length; px++, x+=min_step) {
			z[py][px] = oppai(x,y);
		}
	}

	var data = [
		{
			z: z,
			type: 'surface'
		}
	];
	var layout = {
		scene:{
			zaxis: {
				range: [z_min, z_max]
			}
		},
		width: 800,
		height: 600,
		margin: {
			l: 0,
			r: 0,
			b: 0,
			t: 0
		}
	};

	switch (status) {
		case "new":
			Plotly.newPlot(container_id, data, layout);

			break;
		case "redraw":
			document.getElementById(container_id).data[0].z = z;
			Plotly.redraw(container_id);
			break;
	}
}

// パラメータからセット
set_oppai('oppai-container', 'new');

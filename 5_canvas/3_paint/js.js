var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');


canvas.onmousedown = function (ev) {
	canvas.onmousemove = function (event) {
		var x = event.offsetX;
		var y = event.offsetY;
		ctx.fillRect(x - 5, y - 5, 10, 10);
	};

	canvas.onmouseup = function (e) {
		canvas.onmousemove = null;
	}
};




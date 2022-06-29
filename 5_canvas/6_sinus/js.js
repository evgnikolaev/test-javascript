var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var x = 0;
var timer;


function drawSin() {
	y = Math.sin(x);
	x = x + 0.01;

	ctx.fillRect(20 * x, 100 + 20 * y, 2, 2);
	timer = setTimeout(drawSin, 10);
}

drawSin();
var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var pi = Math.PI;

// Дуга
// ctx.arc(x, y, radius, начальный угол, конечный угол, отрисовка по часовой или против);
ctx.beginPath();
ctx.lineWidth = "5";
ctx.arc(150, 100, 75, 0, pi / 2, false);
ctx.stroke();


ctx.clearRect(0, 0, 400, 200);


canvas.onmousemove = function (event) {
	var x = event.offsetX;
	var y = event.offsetY;
	//теорема пифагора
	var radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);

	ctx.clearRect(0, 0, 400, 200);

	ctx.beginPath();
	ctx.fillStyle = 'pink';
	ctx.strokeStyle = 'green';
	ctx.arc(200, 100, radius, 0, 2 * pi, false);
	ctx.stroke();
	ctx.fill();
};

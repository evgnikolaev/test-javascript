var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

// центр
var x = 200;
var y = 100;

var stepCount = 0;// Кол-во шагов в одном направлении
var direction;// направление дыижения (8 направлений по кругу)

var timer;

var myX;
var myY;


function drowDot() {
	ctx.clearRect(0, 0, 400, 200);
	if (stepCount === 0) {
		stepCount = Math.floor(15 * Math.random());
		direction = Math.floor(8 * Math.random());
	} else {
		stepCount--;
	}

	switch (direction) {
		case 0:
			// вверх
			y = y - 1;
			break;
		case 1:
			// вверх
			x = x + 1;
			break;
		case 2:
			// вниз
			y = y + 1;
			break;
		case 3:
			// влево
			x = x - 1;
			break;
		case 4:
			// вправо вверх
			x = x + 1;
			y = y - 1;
			break;
		case 5:
			// вправо вниз
			x = x + 1;
			y = y + 1;
			break;
		case 6:
			// влево вниз
			x = x - 1;
			y = y + 1;
			break;
		case 7:
			// влево вверх
			x = x - 1;
			y = y - 1;
			break;
	}


	if (x < 0 || x > 400 || y < 0 || y > 200) {
		stepCount = 0;
	}

	ctx.fillRect(x - 3, y - 3, 6, 6);

	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(myX, myY);
	ctx.stroke();


	timer = setTimeout(drowDot, 10);
}


drowDot();


canvas.onmousemove = function (event) {
	myX = event.offsetX;
	myY = event.offsetY;
};



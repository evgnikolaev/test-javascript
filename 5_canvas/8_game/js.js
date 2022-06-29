var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var mas = [];
var count = 0;
var timer;

canvas.onclick = function (event) {
	var x = event.offsetX;
	var y = event.offsetY;

	x = Math.floor(x / 10);// 300 / 10 = 30
	y = Math.floor(y / 10);// 300 / 10 = 30

	mas[y][x] = 1;
	drawFild();
};


function goLife() {
	var n = 30, m = 30;
	for (var i = 0; i < m; i++) {
		mas[i] = [];
		for (var j = 0; j < n; j++) {
			mas[i][j] = 0;
		}
	}
}

goLife();

function drawFild() {
	ctx.clearRect(0, 0, 300, 300);

	var n = 30, m = 30;
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			if (mas[i][j] === 1) {
				ctx.fillRect(j * 10, i * 10, 10, 10);
			}

		}
	}
}


function startLife() {
	/*
	Моделирование жизни
	- полотно якобы повторяющееся, если дошли до правой границы, следующую точку смотрим с левой стороны
	- если у пустой клетки - 2 или 3 живых соседа, тогда клетка выживает. В остальных случаях умирает
	 */

	var mas2 = [];

	var n = 30, m = 30;
	for (var i = 0; i < m; i++) {
		mas2[i] = [];
		for (var j = 0; j < n; j++) {

			var neighbors = 0;
			if (mas[fpm(i) - 1][j] === 1) neighbors++;//сверху
			if (mas[i][fpp(j) + 1] === 1) neighbors++;//справа
			if (mas[fpp(i) + 1][j] === 1) neighbors++;//снизу
			if (mas[i][fpm(j) - 1] === 1) neighbors++;//слева

			if (mas[fpm(i) - 1][fpp(j) + 1] === 1) neighbors++;//вправо, вверх
			if (mas[fpp(i) + 1][fpp(j) + 1] === 1) neighbors++;//вправо, вниз
			if (mas[fpp(i) + 1][fpm(j) - 1] === 1) neighbors++;//влево, вниз
			if (mas[fpm(i) - 1][fpm(j) - 1] === 1) neighbors++;//влево, вверх

			(neighbors === 2 || neighbors === 3) ? mas2[i][j] = 1 : mas2[i][j] = 0;
		}
	}

	mas = mas2;
	drawFild();
	count++;
	document.getElementById('count').innerHTML = count;
	timer = setTimeout(startLife, 1000);
}


//верхняя или левая граница
function fpm(i) {
	if (i === 0) return 30;
	else return i
}


//правая или нижняя граница
function fpp(i) {
	if (i === 29) return -1;
	else return i
}


document.getElementById('start').onclick = startLife;

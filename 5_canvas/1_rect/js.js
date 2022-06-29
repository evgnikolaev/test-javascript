var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

/*
ctx.fillStyle('blue');  - Задание цвета
ctx.fillRect(x,y,width,height);  - Заливка прямоугольника
*/

ctx.fillStyle = 'red';
ctx.fillRect(100, 50, 150, 75);

ctx.fillStyle = 'blue';
ctx.fillRect(150, 100, 100, 50);

// Стереть все
// ctx.clearRect(0, 0, 400, 200);


// 2-ой способ нарисовать прямоуголник
ctx.strokeStyle = 'green';
ctx.lineWidth = "10";
ctx.rect(50, 10, 100, 100);
ctx.stroke();
ctx.fillStyle = "orange";
ctx.fill();









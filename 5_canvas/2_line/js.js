var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');


// 1-ый путь
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = "5";

ctx.moveTo(100, 50);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.lineTo(300, 50);
ctx.stroke();


// 2-ый путь
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "20";
ctx.lineCap = "round";
ctx.moveTo(150, 40);
ctx.lineTo(200, 40);
ctx.stroke();


//треугольник
ctx.clearRect(0, 0, 400, 200);

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "20";
ctx.lineCap = "round";
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(200, 150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();


















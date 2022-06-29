var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

//Текст с градиентом
grad = ctx.createLinearGradient(0, 0, 500, 0);
grad.addColorStop('0', 'magenta');
grad.addColorStop('.50', 'blue');

ctx.fillStyle = grad;
ctx.textAlign = 'center';
ctx.font = "30px Georgia";

//Моштабирование и поворот
ctx.scale(2, 2);
ctx.rotate(20 * Math.PI / 180);

ctx.fillText('Hello world', 100, 50);








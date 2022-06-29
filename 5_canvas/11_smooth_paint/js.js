var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
var isMouseDown = false;
var coords = [];

canv.width = window.innerWidth - 50;
canv.height = window.innerHeight - 50;

canv.addEventListener('mousedown', (e) => {
	isMouseDown = true;
});
canv.addEventListener('mouseup', (e) => {
	isMouseDown = false;
	ctx.beginPath();
	coords.push('mouseup');
});


ctx.lineWidth = 10 * 2;
canv.addEventListener('mousemove', (e) => {
	if (isMouseDown) {

		coords.push([e.clientX, e.clientY]);

		//Рисуем линиями, чтобы не было промежутков между точками
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		//Для плавности линии, иначе линия будет обрывистой на краях
		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}
});


document.addEventListener('keydown', (e) => {

	if (e.keyCode == 83) {
		//83 "s" - save
		save();
		console.log('saved');
	}

	if (e.keyCode == 82) {
		//82 "r" - replay
		coords = JSON.parse(localStorage.getItem('coords'));
		clear();
		replay();
		console.log('replay');

	}

	if (e.keyCode == 67) {
		//67 "c" - clear
		clear();
		console.log('cleared');
	}


});


function clear() {
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canv.width, canv.height);

	ctx.beginPath();
	ctx.fillStyle = 'black';
}


function save() {
	localStorage.setItem('coords', JSON.stringify(coords));
}


function replay() {
	var timer = setInterval(() => {
		if (!coords.length) {
			clearInterval(timer);
			ctx.beginPath();
			return;
		}
		var crd = coords.shift();

		e = {
			clientX: crd['0'],
			clientY: crd['1'],
		};

		//Рисуем линиями, чтобы не было промежутков между точками
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		//Для плавности линии, иначе линия будет обрывистой на краях
		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);

	}, 20);
}














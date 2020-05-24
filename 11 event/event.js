/*
	ОБЪЕКТ СОБЫТИЕ

	!!!! Браузером всегда первым отрибутом передается объек событие !!!!!
	el.onclick = function (event) {};
	el.addEventListener('click', function (event) {}, false);


	event.type  - тип события
	event.preventDefault(); - отмена действия по умолчанию
	
*/

// document.addEventListener('contextmenu', fun0, false);

function fun0(event) {
	event.preventDefault();
	console.log(event.type);
}


/*
	ДЛЯ МЫШИ
	event.clientX - координаты по Х относительно окна браузера
	event.clientY - координаты по Y относительно окна браузера

	event.pageX - координаты по Х относительно страницы
	event.pageY - координаты по Y относительно страницы

	event.which - код кнопки мыши (1-левая, 2-средняя, 3-правая)

	event.wheel на событие wheel(не рекомендуется, каждый браузер по своему отрабатывает)
				лучше использовать событие scroll у document
 */

// document.addEventListener('click', fun1, false);

function fun1(event) {
	console.log('X ' + event.pageX);
	console.log('Y ' + event.pageY);
}


/*
	ДЛЯ КЛАВИАТУРЫ
	event.keyCode - код клавиатуры
	event.which - код кнопки (чаще соответствует keyCode)
	event.charCode - код символа (работает только при событии keypress)
	event.char - символ (обычно не используется)
 */

// document.addEventListener('keypress', fun2, false);

function fun2(event) {
	console.log(event.keyCode);
	console.log(event.charCode);
}


/*
	Пример 1
 */
function changeBg(e) {
	div.style.backgroundColor = config[e.type];
}

var div = document.getElementsByClassName('div')[0];
div.addEventListener('click', changeBg, false);
div.addEventListener('mouseover', changeBg, false);
div.addEventListener('mouseout', changeBg, false);
var config = {
	'click': 'red',
	'mouseover': 'green',
	'mouseout': 'yellow',
};


/*
	Пример 2
 */

function moveBox(e) {
	var div = document.getElementsByClassName('div')[0];
	switch (e.type) {
		case 'click':

			div.style.left = e.clientX + 'px';
			div.style.top = e.clientY + 'px';

			break;
		case 'keypress':
			switch (e.keyCode) {

				case 100:
					div.style.left = parseInt(getComputedStyle(div).left) + 30 + 'px';
					break;
				case 97:
					div.style.left = parseInt(getComputedStyle(div).left) - 30 + 'px';
					break;

			}
			break;

	}
}

document.body.addEventListener('click', moveBox, false);
document.body.addEventListener('keypress', moveBox, false);


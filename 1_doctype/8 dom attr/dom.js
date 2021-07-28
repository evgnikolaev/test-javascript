/*
*  ВЫБОРКА
* */

// у document
var one1 = document.getElementById('one5');

//у document иди node
var two = document.getElementsByTagName('div');
var two2 = one1.getElementsByTagName('div');

var two3 = document.getElementsByName('fio');

var two4 = document.getElementsByClassName('qwerty');

var two5 = document.querySelectorAll('.qwerty'); //все

var two6 = document.querySelector('.qwerty'); //только первый


/*
*  НАВИГАЦИЯ
* */

var list = document.getElementById('list');
var one = document.getElementById('one');

one.previousElementSibling;   //предыдущий сосед
one.nextElementSibling;     //сдедующий сосед
one.parentNode;    //родитель

list.children; //дети
list.firstElementChild; //первый ребенок
list.lastElementChild; //последний ребенок

//Если убрать "Element" то будут выбираться и текстовые ноды и комментарии


/*
*  пример 1
* */

var box = document.getElementById('box');
box.style.backgroundColor = '#0f0';

/*
*  пример 2
* */

/*
		function changeBg(collection) {
			for (var i = 0; i < collection.length; i++) {
				if ((i + 1) % 3 === 0) {
					collection[i].style.backgroundColor = 'red';
				}
			}
		}

		var list111 = document.getElementById('list');
		var el = list111.getElementsByTagName('li');
		changeBg(el);

 */


/*
*  пример 3
* */

box2 = document.getElementById('box2');

function changeWidth() {
	vivod('width', raschet('width'));
}

function changeHeight() {
	vivod('height', raschet('height'));
}

function raschet(param) {
	if (box2.style[param] === '') {
		return '50';
	}
	return parseInt(box2.style[param]) + 20;
}

function vivod(param, valueParam) {
	box2.style[param] = valueParam + 'px';
}


/*
*  пример 4
* */


function changeBgg() {
	var id = prompt('id');
	var color = prompt(color);
	var elem = document.getElementById(id);
	if (elem !== null) {
		elem.style.backgroundColor = color;
	}

}
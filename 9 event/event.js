/*
	РАБОТА С СОБЫТИЯМИ

	события мыши
		click
			mousedown
			mouseup
		contextmenu (правая кнопка мыши)
		mousemove (движение мыши)
		mouseover (над)

	события клавиатуры
		keydown
		keyup
		keypress ( keydown и keyup вместе)

	событие у window
		resize
		load ( у документ , когда dom сформировано )

	событие формы
		submit
		reset

	событие input
		focus
		change (что то изменилось, и input потерял focus)

 */


function fun() {
	console.log('i am fun');
}

function fun2() {
	console.log('i am fun2');
}

function fun3() {
	console.log('i am fun3');
}

function fun4() {
	console.log('i am fun4');
}

/*
*		1 способ ( в атрибут в html ) (не удобен)
*/

/*
* 		2 способ ( свойство ноды )
* 		( Этот способ приоритетнее чем 1 способ, перепишет )
*/
var but = document.getElementById('but');
but.onclick = fun3;
//ниже перепишет (поэтому иногда не удобно)
but.onclick = function () {
	console.log('anonim');
};

var inp = document.getElementById('inp');
inp.onfocus = function () {
	console.log('focus');
};
inp.onkeypress = function () {
	console.log('keypress');
};


/*
* 		3 способ (метод ноды) - желательно им
* 		( отработают все обработчики, которые я описал )
*
*     например у css есть transitioned - когда анимация закончилась,  поймать можно только при
* 		помощи addEventListener. Свойством ноды его не поймать
*/
but.addEventListener('click', fun3, false);
but.addEventListener('click', fun4, false);
// удалить событие
but.removeEventListener('click', fun3, false);


/*
*  Определение личности
*/

function fun5() {
	console.log('this'); //контекст выполнения (при клике попадет нода)
	console.log(this.getAttribute('id'));
}


var collection = document.getElementsByTagName('button');
for (var i = 0; i < collection.length; i++) {
	collection[i].addEventListener('click', fun5, false);
}


/*
*  пример 1
*/
function changeBg() {
	var first = this;
	var second = box[0];
	if (first.nextElementSibling.classList.contains('box')) {
		second = first.nextElementSibling;
	}

	var currentClass = first.classList[1];
	var nextClass = second.classList[1];

	first.classList.remove(currentClass);
	first.classList.add(nextClass);
	second.classList.remove(nextClass);
	second.classList.add(currentClass);
}

var box = document.getElementsByClassName('box');
for (i = 0; i < box.length; i++) {
	box[i].addEventListener('mousedown', changeBg, false);
}
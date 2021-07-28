/*
			Функции. Параметры по умолчанию (вставляем в конец).
*/

function fun1(a, b) {
	if (b === undefined) {
		b = 10;
	}
	// console.log(a);
	// console.log(b);
}

fun1(25, 33);
fun1(7);


/*
			Функции. объект arguments.
			Функция может принять неограниченное количество аргументов.
*/

function fun2(a) {
	// console.log(arguments);
	// console.log(arguments[1]);
}

fun2(25, 33);
fun2(7);
fun2();


/*
			Функции. Замыкание.
			Это механизм, который предоставляет доступ к переменным в тот момент, когда этих переменных вроде существовать не должно.

			!!! ГДЕ ФУНКЦИЯ БЫЛА ЗАДЕКЛАРИРОВАНА, ТАМ У НЕЕ И ОБЛАСТЬ ВИДИМОСТИ !!!
*/

/* Пример 1 с замыканием */
function func2() {
	console.log(a);
}

function func() {
	var a = 32;
	func2();  //при вызове выдаст ошибку (func2 задекларирована в глобальной области)
}

// func();


/* Пример 2 с замыканием */
function funct() {
	var a = 32;

	function funct2() {
		console.log(a);
	}

	funct2(); //   !!!! ТОЛЬКО МОЖНО ИЗНУТРИ ДОСТУЧАТЬСЯ !!!!
}

// funct();
// funct2(); //вызов из глобальной тоже даст ошибку,    !!!! СНАРУЖИ ВНУТРЬ НЕ ДОСТУЧАТЬСЯ !!!!


/* Пример 3 с замыканием */
function sayHello(name) {
	var a = 'Hello';
	return function () { //ф-ия продекларирована здесь, хранит переменную a (переменная а замкнулась)
		return a + name;
	}
}

window.onload = function () {
	var user = 'Vasia';
	var result = sayHello(user);
	// console.log(result());
};


/*
			Функции. Рекурсия
*/


function nextElement(el) {
	if (el.nodeType !== 1) {
		console.log(el);
		el = nextElement(el.nextSibling);
	}
	return el;
}

var elem = nextElement(document.getElementById('one').nextSibling);
console.log(elem);





















/*
	ООП. Функциональный подход. Наследование
	Например, у нас есть класс Rabbit. Мы хотим создать класс Cat. Отличие только в определенных свойствах.
	В этом случае применяется наследование - иерархия классов.
	Создается класс, который имеет ощие свойства для обоих подклассов.

	Есть нюанс -  !!!! Но из дочернего элемента к родительским приватным свойствам прямого достпуа нет !!!!!
	1 способ - В этом случае нужно использовать Геттеры и сеттеры.
	2 способ - задавать публичным, как договоренность с каким то префиксом, например this._totalDist.


*/

//имеет общие св-ва и методы
function Animal(name) {
	var totalDist = 0;
	var timer;
	this.name = name;
	var self = this;

	this.run = function () {
		timer = setInterval(function () {
			console.log(totalDist++);
		}, 1000);
	};

	this.stop = function () {
		clearTimeout(timer);
	};

	this.getterSettertotalDist = function (value) {
		if (value === undefined) {
			return totalDist;
		} else {
			value = +value;
			if (!isNaN(value)) {
				totalDist = value
			} else {
				console.log('this.totalDist not number');
			}
		}
	}
}


//имеет собственные св-ва и методы
function Rabbit(name) {

	//Animal.call(this); //Наследование.Вызови Animal и передай туда this
	Animal.apply(this, arguments); //Наследование.Вызови Animal и передай туда this, потом параметры

	this.qw = 'qwqwqw';
	this.z = 'zzz';
}


//имеет собственные св-ва и методы
function Cat(name) {

	//Animal.call(this); //Наследование.Вызови Animal и передай туда this
	Animal.apply(this, arguments); //Наследование.Вызови Animal и передай туда this, потом параметры

	this.as = 'asasas';
	this.r = 'rrr';

	this.fun = function () {

		//return totalDist; // казалось бы мы отнаследовались
		// !!!! Но из дочернего элемента к родительским приватным свойствам прямого достпуа нет !!!!! Поэтому

		return this.getterSettertotalDist();
	}

}

var rabbit = new Rabbit('Baks');
var cat = new Cat('Vaska');



/**
 * 1)
 *  console.log - вывод html структуры разметкой
 *  console.dir - вывод json структурой , объектом
 *
 *  2) call и appply
 *  	func.call(context, arg1, arg2);
 *  	func.apply(context, [arg1, arg2]);
 *
 *   !!!! При помощи call можно легко взять метод одного объекта, в том числе встроенного, и вызвать в контексте другого. !!!!
 *
 */


function showFullName() {
	console.log( this.firstName + " " + this.lastName );
}

var user = {
	firstName: "Василий",
	lastName: "Петров"
};

showFullName();
// функция вызовется с this=user
showFullName.call(user);
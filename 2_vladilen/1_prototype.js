/*
Запускаем файл командой     node js.js (или стрелкой на панели)

Прототип - это отдельный объект, который присутствует у родительских объектов, и вызывается по цепочке сверху вниз.
На самом деле объект создается при помощи new Object (Object - самый глобальный, верхний), даже если использовать литерал

	var person = {
		name: 'Maxim',
		age: 25,
		greet: function () {
			console.log('Greet');
		}
	};
*/

const person = new Object({
	name: 'Maxim',
	age: 25,
	greet: function () {
		console.log('Greet');
	}
});


//расширили базовый прототип, и добавили в него метод (prototype - св-во у ф-ии конструктор)
Object.prototype.sayHello = function () {
	console.log('sayHello from Object.prototype');
};

person.sayHello();


//создаем объект lena используя (на основе) прототип person
const lena = Object.create(person);
lena.name = 'Elena';
lena.sayHello();


let str = new String('i am string'); //можем в консоли посмотреть какие свойства методы есть у строки и цепочку прототипов
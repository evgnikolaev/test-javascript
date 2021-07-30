/*
Запускаем файл командой     node js.js (или стрелкой на панели)

this - контекст выполнения
	смотрим слева от точки:
		window.hello()
		person.sayHello()

Для того чтобы передавать контекст, у ф-ии есть методы:
func.bind(obj,params) - возвращает ф-ию, для вызова используем  func.bind(obj)()
func.call(obj,params) - вызывает сразу ф-ию
func.apply(obj,[params]) - вызывает сразу ф-ию, параметры передаются в массиве (удобно, когда не знаем кол-во параметров)

*/

function hello() {
	console.log('Hello', this);
}

hello(); //this - window (аналогично window.hello())


const person = {
	name: 'Vladilen',
	age: 25,
	sayHello: hello,
	sayHelloWindow: hello.bind(window),// можно hello.bind(this), здесь this - window внутри ф-ии
	logInfo: function (job, phone) {
		console.group(`${this.name} info`);
		console.log(`name is ${this.name}`);
		console.log(`age is ${this.age}`);
		console.log(`job is ${job}`);
		console.log(`job is ${phone}`);
		console.groupEnd();
	}
};

//вывод контекста:
person.sayHello(); //this - person
person.sayHelloWindow(); //this - window
person.logInfo();


const lena = {
	name: 'Elena',
	age: 23,
};

//вызываем ф-ию logInfo в контексте lena
// 1 способ
fnLenaInfoLog = person.logInfo.bind(lena);
fnLenaInfoLog('frontend', '223');
// 2 способ
fnLenaInfoLog = person.logInfo.bind(lena, 'frontend', '223');
fnLenaInfoLog();
// 3 способ (call() - сразу вызывает)
person.logInfo.call(lena, 'frontend', '223');
// 4 способ (apply() - сразу вызывает)
person.logInfo.apply(lena, ['frontend', '223']);


/*  пример  - каждый элемент массива умножаем на число.
	можно ф-ией, но не всегда удобно. Можно расширить прототип Array, и у него вызывать как метод.
*/
const array = [1, 2, 3, 4, 5];

function multBy(arr, n) {
	return arr.map(function (i) {
		return i * n;
	})
}
console.log(multBy(array, 5));


Array.prototype.multBy = function (n) {
	return this.map(function (i) {
		return i * n;
	})
};
console.log(array.multBy(2));
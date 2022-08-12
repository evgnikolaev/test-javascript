/*
https://www.youtube.com/watch?v=b55hiUlhAzI&ab_channel=IT-KAMASUTRA

	Объекты при присвоении это ссылочный объект
	{} != {}   - объекты равны, когда они ссылаются на один и тот же объект!

	пример:
	let a = { value:18};
	let b = { age: a};
	let c = a;

	console.log(a === b.age); //true

	b.age.value = 21;
	console.log(a);
	console.log(c);






__PROTO__
	1) объекты создаются  или с помощью КЛАСОВ или с помощью ФУНКЦИИ конструктора.
	Чтобы понимать, что это за __PROTO__  нужно знать с помощью какой ф-ии конструктора (или класса) создан объект ( new XXX() )

	2) __PROTO__ есть у всех объектов

			let man = {name: 'Vasya'};
			let man2 = {name: 'Max'};
			console.log(man.__proto__ === man2.__proto__); // !!!true так как одного типа







PROTOTYPE
	1) Каждый класс, ф-ия конструктор имеет PROTOTYPE
		Object, Promise, Function
		Boolean, Number, String, Array, Function

		class Samurai{}
		function Component(){}
		const Api  = function(){};

const Api  = function(){};
console.log(Api.prototype); // объект прототипа

const Api2  = () => {};
console.log(Api2.prototype); //у стрелочной ф-ии нет прототипа , прототип есть у ф-ий конструктора или ф-ий, объявленных с помощью function







!!!
	__PROTO__ любого объекта ссылается на PROTOTYPE класса (ф-ии конструктора), с помощью которой этот объект был создан (сконструирован).
!!!


		let promise = new Promise(()=>{});
		console.log(promise.__proto__ === Promise.prototype); //true

		let man = {};
		console.log(man.__proto__ === Object.prototype);//true

		class YoutubeChanel{}
		console.log(YoutubeChanel.__proto__ === Function.prototype);//true

*/

let promise = new Promise(() => {});
console.log(promise.__proto__ === Promise.prototype); //true






function Samurai(name) {
	this.name = name;
}

Samurai.prototype.hello = function () {
	console.log('Hello');
};


let slogun = new Samurai('Dimych');
slogun.hello();























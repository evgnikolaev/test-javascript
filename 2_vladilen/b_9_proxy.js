/*

	Proxy - это класс, который позволяет создавать ловушки для классов, ф-ий, объектов.

	new Proxy (target(цель,что проксируем), {
		handlers (набор хендлеров)
	})

*/


/* ==========================================================================
Пример 1. Objects

*/
const person = {
	name: "Vladilen",
	age: 25,
	job: "Fullstack"
};


const op = new Proxy(person, {

	//ловушка на метод get (target - цель(объект person)   ,  prop - запрашиваемое свойство при get)
	get(target, prop) {
		console.log(`Getting prop ${prop}`); //здесь можно переписывать стандартный функционал
		return target[prop];
	},

	//ловушка на метод set (target - цель(объект person)   ,  prop - запрашиваемое свойство при set,  value - значение)
	set(target, prop, value) {
		if (prop in target) {
			target[prop] = value;
		} else {
			throw new Error(`No prop ${field} in target`); //здесь можно переписывать стандартный функционал
		}
	},

	// есть ли свойство в объекте
	has(target, prop) {
		return ['age', 'job'].includes(prop);
	},

	// при удалении свойства из объекта
	deleteProperty(target, prop) {
		console.log('deleting...', prop);
		delete target[prop];
		return true;
	},

});

/*
//get
console.log(op); // Proxy {name: "Vladilen", age: 25, job: "Fullstack"}
console.log(op.name);// отработает метод get у Proxy

//set
op.age = 26;
//op.qqq = 2;//выдаст ошибку

//has
console.log('name' in op); //false потому что в has мы так описали, хотя  op.name имеется

//delete
delete op.age;
*/

/* ==========================================================================
Пример 2. Functions

*/

const log = text => `Log ${text}`;

const fp = new Proxy(log, {

	//ловушка на вызов ф-ии   apply(  target-ф-ия ,  thisArg - цонтекст ф-ии,   args- все параметры,к-ые передаем в ф-ию)
	apply(target, thisArg, args) {
		console.log('calling fn');//своя логика
		return target.apply(thisArg, args).toUpperCase();//вызов ф-ии (дополнительно преобразовали)
	}

});

// console.log(fp('test')); //Log TEST


/* ==========================================================================
Пример 3. Classes


15.56мин
*/
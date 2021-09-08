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
		if (!(prop in target)) {
			return prop.split('_').map(p => target[p]).join(' ');
		}


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
console.log(op.job_name_age); // Fullstack Vladilen 25


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
18min
*/

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

// PersonProxy с большой буквы, т.к это proxy для класса
const PersonProxy = new Proxy(Person, {

	//На создание объекта construct(target (класс), args (массив параметров (name и age)))
	construct(target, args, newTarget) {
		console.log(`Construct`);

		//return new target(...args);//возвращаем объект, а можем вернуть Proxy на объект
		return new Proxy(new target(...args), {
			get(t, prop) {
				console.log(`getting prop`, prop);
				return t[prop];
			}
		});
	}
});


// const p = new PersonProxy('Maxim', 30);
// console.log(p.name);

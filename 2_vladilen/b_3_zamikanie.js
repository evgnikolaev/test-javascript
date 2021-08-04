/*
Запускаем файл командой     node 1_let_const.js (или стрелкой на панели, или правой кнопкой мыши)

Замыкание - это ф-ия внтури другой ф-ии, которая хранит вышестоящую переменную.
*/

//Пример 1
function createCalcFunction(n) {
	return function () {
		console.log(1000 * n);
	}
}

const calc = createCalcFunction(42);//ф-ия, которая возвращается, уже будет содержать 42
calc();//42


//Пример 2
function createIncremention(n) {
	return function (num) {
		console.log(n + num);
	}
}

const addOne = createIncremention(1);
const addTen = createIncremention(10);
addOne(10);//11 (10+1)
addTen(10);//20 (10+10)


//Пример 3
function ullGenerator(domain) {
	return function (url) {
		return `https://${url}.${domain}`;
	}
}

const comUrl = ullGenerator('com');
const ruUrl = ullGenerator('ru');
console.log(comUrl('google'));
console.log(ruUrl('yandex'));


//Пример 4 - написать ф-ию bind

function bind(context, fn) {
	return function (...args) {
		fn.apply(context, args);
	}
}


function logPerson() {
	console.log(`Person ${this.name} , ${this.age} , ${this.job}`);
}

const person1 = {name: 'Михаил', age: 22, job: 'frontend'};
const person2 = {name: 'Елена', age: 19, job: 'SMM'};

bind(person1, logPerson)();
bind(person2, logPerson)();
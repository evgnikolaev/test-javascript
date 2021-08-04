/*   Запускаем файл командой     node 1_let_const.js (или стрелкой на панели, или правой кнопкой мыши)

	Стрелочные функции

	- более лаконичный синтаксис , есть короткий вариант (лямбда функции)
	- !!! Стрелочная функция не создает свой контекст, и он всегда будет ссылаться на контекст выше !!!

*/


// 	--- Пример 1 ---  //
// 	--- старый вариант ---  //
function sumOld(a, b) {
	return a + b;
}

function cubeOld(a) {
	return a ** 3;
}

var sum1 = function (a, b) {
	return a + b;
};


//	--- новый вариант  ---  //
const sum2 = (a, b) => {
	return a + b;
};

// если только один параметр, то можно без скобок
const cube = a => {
	return a ** 3;
};

// а если ф-ия состоит из одной строчки, и есть return, можно написать (лямбда ф-ии)
const cube2 = a => a ** 3;

// без return, но есть одна строчка
// setTimeout(() => console.log('after 1 sec'), 1000);



// 	--- Пример 2 ---  //
// 	 context
// 	 !!! Стрелочная функция не создает свой контекст, и он всегда будет ссылаться на контекст выше !!!

function log() {
	console.log(this);
}

var log2 = function () {
	console.log(this);
};

const arrowLog = () => console.log(this);

const person = {
	name: 'elena',
	age: 20,
	log: log,
	log2: log2,
	arrowLog: arrowLog,

	// при такой записи создается контекст, вызывается в контексте setTimeout  - this будет global(window)
	delayLogOld: function () {
		const self = this;
		global.setTimeout(function () {
			console.log(self.name + ' ' + self.age);
		}, 500);
	},

	//	!!! Стрелочная функция не создает свой контекст, и он всегда будет ссылать на контекст выше - person !!!
	delayLog: function () {
		global.setTimeout(() => {
			console.log(this.name + ' ' + this.age);
		}, 500);
	}
};

// person.log();        //person
// person.log2();       //person
// person.arrowLog();   // - будет global(window)
// person.delayLogOld();
person.delayLog();
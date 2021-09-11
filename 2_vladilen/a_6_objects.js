/*
нововведения,
1) методы можно писать без function.
2) можно использовать стрелочные ф-ии (так как у него нет своего контекста, не исопльзуем внутри нее this!!)
3) также можно задавать динамические ключи (в квадратных скобках)



Новые методы:
Object.is() - сравниваем на эквивалентность значения
Object.assign() -  объединяем объекты, при этом меняется первый объект
					Object.assign({},first,second) - так мы создадим новый объект

Object.entries() 	- конвертирует в двумерный массив - [ [ 'a', 1 ], [ 'c', 2 ], [ 'd', 3 ] ]
Object.keys(obj) 	- массив ключей объекта
Object.values(obj) 	- массив значений объекта
*/

const cityField = 'city';
const jog = 'frontend';

const person = {
	age: 25,
	name: 'Irina',
	jog, // когда ключ и значение совпадают можно сократить запись job:job;
	[cityField + Date.now()]: 'Saint-Peterburg',//можно задавать динамические поля
	print: () => 'Person',//стрелочная ф-ия не работает с контенкстом
	toString() {//такая ф-ия работает с контекстом
		return Object
			.keys(this)
			.filter(key => key != 'toString')
			.map(key => this[key]).join(' ');
	}
};

//console.log(person.toString());


// Методы
const first = {a: 1};
const second = {b: 1};

// Проверка на эквивалентность
console.log(Object.is(20, 20));//true

// Объединяет объекты
console.log(Object.assign(first, second));//При этом первый объект изменится {a: 1, b: 1}
console.log(Object.assign({}, first, second));//При этом первый объект уже не изменится


// Приведем объект к записи массива
console.log(Object.entries(second));


// Получим ключи и значения
console.log(Object.keys(second));
console.log(Object.values(second));








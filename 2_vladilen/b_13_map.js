/*


// Map - ключи объекты
// Set - уникальные значения
// WeakMap - ключи только объекты. если объект удалил, то в карте он автоматичски удалиться, не будет хранить мусор "ПРОВЕРЯЕТ ЕСТЬ ОБЪЕКТ ИЛИ НЕТ И ХРАНИТ ЕГО ЗНАЧЕНИЕ"
// WeakSet - ключи только объекты. если объект удалил, то в карте он автоматичски удалиться, "ПРОВЕРЯЕТ ЕСТЬ ОБЪЕКТ ИЛИ НЕТ"



Object.entries(obj)  			- Приведем объект к записи массива
Object.fromEntries(entries) 	- Приведем из массива к записи объекта

	Map очень схож с объектами. Это как усовершенствованный, усложненный объект.
	const map = new Map( массив entries);

	.get() - получить
	.set() - задать новый ключ. set - возвращает карту, поэтому можем делать цепочку вызовов
	.delete() - удалить ключ (true/false)
	.has() - есть ключ (true/false)
	.size - размер карты
	.clear() - очистить карту полностью

	Получить массив из карты, 2 способа:
	const arr = [...map];
	const arr2 = Array.from(map);

	Получить объект из карты.  	!!! Но важно помнить ключи будут приводится к строке, даже если там объект!!!
	const mapObj = Object.fromEntries(entries);



Для перебора можем использовать цикл for of  ( map.values()-по значениям     map.keys()-по ключам )
	for (let [key, value] of map) {}

и forEach
	map.forEach((val, key, m) => {});


*/

const obj = {
	name: 'Vladilen',
	address: {
		street: 'Main street'
	},
	age: 26,
	job: 'Fullstack'
};

// Запишем объект в виде массива
const entries = [
	['name', 'Vladilen'],
	['age', '26'],
	['job', 'Fullstack'],
];

// Приведем объект к записи массива
// console.log(Object.entries(obj));


// Приведем из массива к записи объекта
//console.log(Object.fromEntries(entries));


const map = new Map(entries);
// console.log(map.get('name')); // получить

map
	.set('newField', 42)       // задать новый ключ. set - возвращает карту, поэтому можем делать цепочку вызовов
	.set(obj, 'value of obj')  // !! В качестве ключа можем задавать любые типы данных, даже объект
	.set(NaN, 'NaN ??'); // !! В качестве ключа можем задавать любые типы данных, даже NaN

// console.log(map.get(obj));
// console.log(map.get(NaN));

map.delete('job'); // удалить ключ (true/false)

// console.log(map.has('job'));	// есть ключ (true/false)

// console.log(map.size);	// размер карты
// map.clear();			// очистить карту полностью
// console.log(map);


//Получить массив из карты, 2 способа:
const arr = [...map];
const arr2 = Array.from(map);
// console.log(arr,arr2);


//Получить объект из карты. !!! Но важно помнить ключи будут приводится к строке, даже если там объект!!!
const mapObj = Object.fromEntries(map);
// console.log(mapObj);


// ================================================================

// Способ 1. Для карты определен символ итератор, поэтому циклом for of можем пробежаться по map.entries()
for (let entry of map.entries()) {
	// console.log(entry);
}

// Способ 2. Можем ключи и значения получить сраззу в переменных
for (let [key, value] of map.entries()) {
	//console.log(key,value);
}

// Способ 3. По умолчанию если мы делаем итерацию по карте, то вызывается map.entries()
for (let [key, value] of map) {
	// console.log(key,value);
}

// Перебор по значениям
for (let value of map.values()) {
	// console.log(value);
}

// Перебор по ключам
for (let keys of map.keys()) {
	// console.log(keys);
}

// Способ 4. Можем использовать forEach
map.forEach((val, key, m) => {
	//console.log(key, val);
});


// ================================================================
// Практический пример того, что ключами могут быть объекты

const users = [
	{name: 'ELena', age: 25},
	{name: 'Alex', age: 32},
	{name: 'Irina', age: 47},
];

const visits = new Map();
visits
	.set(users[0], '21 Jan')
	.set(users[1], '11 Feb')
	.set(users[2], '14 Apr');

console.log(visits.get(users[2]));























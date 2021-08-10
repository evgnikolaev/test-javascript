/*
	Операторы Spread (разворачивает) и Rest (собирает)
*/

const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];
const citiesEurope = ['Берлин', 'Прага', 'Париж'];

const citiesRussiaWithPopulation = {Moscow: 20, SaintPetersburg: 8, Kazan: 5, Novosibirsk: 3};
const citiesEuropeWithPopulation = {Berlin: 10, Praha: 3, Paris: 2};

/*


	Spread - берет и разворачивает (элементы или ключи) массива или объекта.
	Для массивов по сути убирает '[' , ']'
	!!! Работая с объектом мы должны оборачивать Spread в объект

*/

// Пример 1. Выведет набор строк, развернутых от массива (Массив)
//console.log(...citiesRussia);

// Пример 2. Клонирование (Массив)
const cloneArr = [...citiesRussia];
//console.log(cloneArr);

// Пример 3. Комбинирование (Массив)
//const allCities = citiesEurope.concat(citiesRussia);//раньше делали так
const allCities = [...citiesEurope, 'Вашингтон', ...citiesRussia];
// console.log(allCities);


// Пример 1. !!! Работая с объектом мы должны оборачивать Spread в объект (Объект)
//console.log(...citiesRussiaWithPopulation); //Ошика "Found non-callable @@iterator" .
//console.log({...citiesRussiaWithPopulation});// так правильно

// Пример 2. Комбинирование. Умный мерж - если ключи одинаковые, они перезапишуться. (Объект)
const allRussiaWithPopulation = {...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation};
// console.log(allRussiaWithPopulation);


// Пример 1. Найдем максимальное число при помощи Math.max(5, 37, 42, 17)  (Practice)
const numbers = [5, 37, 42, 17];
// console.log(Math.max.apply(null, numbers));//так делали раньше
// console.log(Math.max(...numbers));


// Пример 2.  Коллекцию преобразуем в массив для того чтобы использовать ф-ию map  (Practice)
const divs = document.querySelectorAll('div');
const nodes = [...divs];
//console.log(divs, Array.isArray(divs));//false - не массив
//console.log(nodes, Array.isArray(nodes));//true - массив
//nodes.map(node => console.log(node));


/*


	Rest - отличие в области применения.
	В ф-ии или при деструктуризации соберет все остальные элементы в массив.

*/

// Пример 1. В функции.
function sum(a, b, ...rest) {
	console.log(rest);//соберет все остальные элементы в массив
	return a + b + rest.reduce((a, i) => a + i, 0);//сумма всех параметров
}

const numbers1 = [1, 2, 3, 4, 5];
//console.log(sum(...numbers1));//spread


// Пример 2.   При деструктуризации массива
const numbers2 = [1, 2, 3, 4, 5];
// const a = numbers2[0]; // старая запись
// const b = numbers2[1]; // старая запись
const [a, b, ...other] = numbers2; //соберет все остальные элементы в массив
// console.log(a, b, other);


// Пример 3.   При деструктуризации объекта
const person = {
	name: 'Max',
	age: 20,
	city: 'Moscow',
	country: 'Russia'
};

const {name, age, ...address} = person;
// console.log(name, age, address);













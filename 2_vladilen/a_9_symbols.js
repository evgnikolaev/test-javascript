/*
	Новый тип в es6 .
	Symbol - это какое-то уникальное значение.
	Пишется без new.
	Symbol-ы нужны для задания определенных , уникальных свойств, методов для каких-либо объектов, ф-ий или классов, и для того чтобы их использовать.
	Например на нем построен цикл for...off.

	Подробнее:
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol

*/

const symbol = Symbol('demo');
const other = Symbol('demo');
// console.log(symbol);
// console.log(other);

// symbol-ы всегда уникальны
// console.log(symbol === other);//false

const obj = {
	name: 'Elena',
	demo: 'demo',//зададим ключ с названием как symbol (demo), в этом случае конфликта не будет
	[symbol]: 'meta',
};

// symbol-ы всегда уникальны
// console.log(obj[symbol]); //-meta
// console.log(obj[other]); //-undefined

// при этом данные поля symbol сокрыты
// (пробежимся по полям объекта, этот цикл также бежит по полям прототипа)
for (let key in obj) {
	console.log(key);//name
}
console.log(Object.keys(obj));


//зададим ключ с названием как symbol (demo), в ээтом случае конфликта не будет
console.log(obj.demo);
console.log(obj[symbol]);


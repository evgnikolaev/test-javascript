/*

	Генераторы - ф-ии, которые могут последовательно (порционно) выдавать результат его работы.

	function* strGenerator(){}   или  function *strGenerator(){}
	yield 'H'; - порционная выдача
	.next() - метод ф-ии, для получении порционной выдачи

*/


// Пример 1
function* strGenerator() {
	yield 'H';
	yield 'e';
	yield 'l';
	yield 'l';
	yield 'o';
}

const str = strGenerator();
// console.log(str.next()); //{value: "H", done: false}
// console.log(str.next()); //{value: "e", done: false}
// console.log(str.next()); //{value: "l", done: false}
// console.log(str.next()); //{value: "l", done: false}
// console.log(str.next()); //{value: "o", done: false}
// console.log(str.next()); //{value: "undefined", done: true} - генератор закончился


// Пример 2
function* numberGen(n = 10) {
	for (let i = 0; i < n; i++) {
		yield i;
	}
}

const num = numberGen(3);
// console.log(num.next());//{value: "0", done: false}
// console.log(num.next());//{value: "1", done: false}
// console.log(num.next());//{value: "2", done: false}
// console.log(num.next());//{value: "undefined", done: true} - генератор закончился


// Пример 3 . Опишем свой генератор, который повторяет логику генераторов
const iterator = {
	gen(n = 10) {
		let i = 0;
		return {
			next() {
				if (i < n) {
					return {value: i++, done: false}
				} else {
					return {value: undefined, done: true}
				}
			}
		}
	}
};

const itr = iterator.gen(3);
// console.log(itr.next());//{value: "0", done: false}
// console.log(itr.next());//{value: "1", done: false}
// console.log(itr.next());//{value: "2", done: false}
// console.log(itr.next());//{value: "undefined", done: true} - генератор закончился


/*
 	Пример 4 . Цикл for of.
		По сути for of работает со спциальным типом Symbol (symbol iterator).
		for of может работать со строчками, массивами, объектами, потому что в них определен в прототипе symbol iterator.

		for (let key of 'Hello'){
			console.log(key);
		}

		Если передадим iterator в цикл, получим ошибку "iterator is not iterable"
		 for (let key of iterator){
			console.log(key);
		}

		Если же перепишем ф-ию gen на специальный ключ [Symbol.iterator], то мы уже сможем использовать этот объект в цикле for of

		В генераторах же тоже по умолчанию определен
*/


const iterator2 = {
	[Symbol.iterator](n = 5) {
		let i = 0;
		return {
			next() {
				if (i < 2) {
					return {value: i++, done: false}
				} else {
					return {value: 1, done: true}
				}
			}
		}
	}
};

for (let key of iterator2){
	console.log(key);
}

for (let key of strGenerator()){
	console.log(key);
}













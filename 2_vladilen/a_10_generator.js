/*
  -------   ОПИСАНИЕ ИТЕРАТОРА   ------------
  Для массивов , для строк по умолчанию определен Symbol.iterator(уникальный) - возвращается ф-ия.
  Благодаря этому можем итеративно получать элементы строки или массива.
  новый цикл for..off,
*/
const array = [10, 20, 30];
const strr = 'hello';


//для массивов , для строк по умолчанию определен Symbol.iterator(уникальный) - возвращается ф-ия.
// console.log(array[Symbol.iterator]);
// console.log(strr[Symbol.iterator]);


//вызвав ф-ию, вернется объект Array Iterator, у которой можно вызвать метод next()
const iter = array[Symbol.iterator]();
// const iter = strr[Symbol.iterator]();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); //value: 30, done: false
console.log(iter.next()); //value: undefined, done: true - закончился


// новый цикл for..off - смотрит за Symbol.iterator, и мы можем обращаться к тем объектам для которого определен символ итератора - это зашито в языке
for (let item of array) {
	console.log(item);
}


/*

	Аналогично b_11_generator.js.

	ГЕНЕРАТОРЫ - ф-ии, которые могут последовательно (порционно) выдавать результат его работы.

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













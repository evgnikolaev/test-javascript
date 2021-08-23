/*

	Set - объект с уникальными значениями.
	const set = new Set([1, 2, 2, 3, 3, 3, 4, 5, 5, 6]);

	.add() - задать новый элемент. set - возвращает карту, поэтому можем делать цепочку вызовов
	.delete() - удалить элемент (true/false)
	.has() - есть элемент (true/false)
	.size - размер Set
	.clear() - очистить карту полностью

	Получить массив из set, 2 способа:
	const arr = [...set];
	const arr2 = Array.from(set);


Для перебора мжоем использовать цикл for of  ( map.values()-по значениям     map.keys()-по ключам )
!! Но здесь ключи и значения будут совпадать, для легкого перевода из set в map (set то облегченная версия map)
	for (let [key, value] of map) {}

и forEach
	map.forEach((val, key, m) => {});


*/


const set = new Set([1, 2, 2, 3, 3, 3, 4, 5, 5, 6]);
set.add(6).add(7);
set.delete(3);
// set.clear();
console.log(set);
console.log(set.has(30));
console.log(set.size);


for (key of set) {
	// console.log(key);
}

set.forEach((val, key, m) => {
	// console.log(val);
});


// ================================================================
// Практический пример: получить ункальные значения массива (при помощи spread развернули Set)

function uniqValues(array) {
	return [...new Set(array)];
}

console.log(uniqValues([1, 2, 3, 3, 3, 5, 1, 6]));









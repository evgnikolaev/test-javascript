/*

	Weakmap - (слабая карта) тот же map, с ограничениями. Но у него свои особенности.
	С помощью Weakmap можем избегать утечек данных в js.
	!!!Ключами здесь могут быть только объекты.

	.get() - получить
	.set() - задать новый ключ. set - возвращает карту, поэтому можем делать цепочку вызовов
	.delete() - удалить ключ (true/false)
	.has() - есть ключ (true/false)
	.size - размер карты (!Узнать размер карты нельзя)
	.clear() - очистить карту полностью (! Этого метода тоже нет)

	!!! Перебор по weakmap не работает
Для перебора можем использовать цикл for of  ( map.values()-по значениям     map.keys()-по ключам )
	for (let [key, value] of map) {}

и forEach
	map.forEach((val, key, m) => {});

*/


/*
================================================================
Рассмотрим пример с утечкой данных

Хотя obj присвоили null, его значение все равно остается, так как до этого мы его сохранили в массиве.
Но в случае, когда мы работаем с картами, здесь могут быть нюансы.
В карте ключами могут быть объекты, и если мы удалили объект, получается, что мы не сможем получить значение по ключу объекта у карты.
Поэтому получаются лишние данные, происходит утечка данных.

*/

// Пример1. Утечка данных (с массивом)
let o = {name: 'arr'};
const arr = [o];
o = null;
// console.log(o);   //null
// console.log(arr);  //[ { name: 'arr' } ]


// Пример2. Утечка данных (с Map)
let ob = {name: 'weakmap'};
let map = new Map();
map.set(ob, 'obj data');
ob = null;
// console.log(ob);   //null
// console.log(map);  //[ { name: 'arr' } ]


// Пример3. Объект удалили, она автоматом удалилась из weakmap
let obj = {name: 'weakmap'};
let weakmap = new WeakMap();
weakmap.set(obj, 'obj data');
// obj = null;
// console.log(obj);   //null
// console.log(weakmap.get(obj));  //undefined


// ================================================================
// Практический пример: пример с кешем


const cache = new WeakMap();

function cacheUser(user) {
	if (!cache.has(user)) {
		cache.set(user, 'Cache value: ' + user.name);
	}
	return cache.get(user);
}


let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;// Предположим в какой то момент, удалили объект lena

console.log(cache.has(lena)); //false , по ссылке из weakmap он тоже удалился
console.log(cache.has(alex)); //alex




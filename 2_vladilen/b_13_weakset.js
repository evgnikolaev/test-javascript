/*

	WeakSet - (слабый set) тот же set, с ограничениями. Но у него свои особенности (Работает аналогично как WeakMap).
	!!!Ключами здесь могут быть только объекты.


	.get() - получить
	.set() - задать новый ключ. set - возвращает карту, поэтому можем делать цепочку вызовов
	.delete() - удалить ключ (true/false)
	.has() - есть ключ (true/false)
	.size - размер карты (!Узнать размер карты нельзя)
	.clear() - очистить карту полностью (! Этого метода тоже нет)

	!!! Перебор по weakset не работает
Для перебора можем использовать цикл for of  ( map.values()-по значениям     map.keys()-по ключам )
	for (let [key, value] of map) {}

и forEach
	map.forEach((val, key, m) => {});

*/

const users = [
	{name: 'ELena', age: 25},
	{name: 'Alex', age: 32},
	{name: 'Irina', age: 47},
];

const visits = new WeakSet();
visits.add(users[0]).add(users[1]);

users.splice(1, 1);//Удалили users[1]

console.log(visits.has(users[0]));
console.log(visits.has(users[1]));// так как удалили, из weakset он тоже удалился

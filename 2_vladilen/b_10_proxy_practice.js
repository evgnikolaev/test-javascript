/*

	Proxy - это класс, который позволяет создавать ловушки для классов, ф-ий, объектов.

	new Proxy (target(цель,что проксируем), {
		handlers (набор хендлеров)
	})

*/


/*
 	Пример 1. wrapper . Добавляем значения по умолчанию ключам, которые не определены.
 */

const withDefaultValue = (target, defaultValue = 0) => {
	return new Proxy(target, {
		get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
	});
};

const position = withDefaultValue({
	x: 23,
	y: 24
}, 0);

//console.log(position.x);
//console.log(position.z);//дефолтное значение нового свойства 0


/*
 	Пример 2. hidden properties . Прячем свойства с префиксом у объекта
 */

const withHiddenProperties = (target, prefix = '_') => {
	return new Proxy(target, {
		has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),

		//ownKeys - говорит, какие ключи есть внутри объекта
		//Reflect - объект позволяет более детально работать с объектом.    Reflect.ownKeys(obj) - вернет массив ключей
		ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),

		//receiver - это тот объект который мы возвращаем (то есть тот объект proxy с которым мы ведем работу)
		//obj - это объект target
		//мы можем его получить, благодаря тому что описали ownKeys
		//void 0 - это то же самое что undefined
		get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
	});
};

const data = withHiddenProperties({
	name: 'Vladilen',
	age: 25,
	_id: 1
});

/*
console.log(data.name);//Vladilen

console.log(data._id);//undefined
console.log('_id' in data);//false
for (let key in data) {
	console.log(key);
}
console.log(Object.keys(data));//['name', 'age']
*/

/*
 	Пример 3. Optimization

 	const userData = [
		{id: 11, name: 'Vladilen', job: 'Fillstack', age: 25},
		{id: 22, name: 'Elena', job: 'Student', age: 22},
		{id: 33, name: 'Viktor', job: 'BackEnd', age: 23},
		{id: 44, name: 'Vasilisa', job: 'Teacher', age: 24},
	];

	//find - пробегает по всему массиву, Каждый раз использовать его трудозатратно
	console.log(userData.find(user => user.id === 33));

	//Мы же можем создать index
	const index = {};
	userData.forEach(i => index[i.id] = i);
	console.log(index[33]);

	//Такому методу мы можем следовать и описать Proxy для класса Array

 */

const IndexedArray = new Proxy(Array, {
	construct(target, [args]) {

		//создаем index
		const index = {};
		args.forEach(item => index[item.id] = item);

		//вернем proxy к объекту массива
		return new Proxy(target(...args), {
			get(arr, prop) {
				//и здесь мы можем описывать новые методы, которые не были доступны у массивов
				switch (prop) {
					//перепишем стандртный push у массива, при этом обновим index
					case 'push':
						return item => {
							index[item.id] = item; //обновим index
							arr[prop].call(arr, item)
						};
					//Опишем свой метод
					case 'findById':
						return id => index[id];
					default:
						return arr[prop]
				}
			}
		})
	},

});


const users = new IndexedArray([
	{id: 11, name: 'Vladilen', job: 'Fillstack', age: 25},
	{id: 22, name: 'Elena', job: 'Student', age: 22},
	{id: 33, name: 'Viktor', job: 'BackEnd', age: 23},
	{id: 44, name: 'Vasilisa', job: 'Teacher', age: 24},
]);

// console.log(users[0]);
// console.log(users.findById(33));//при помощи proxy описали свой метод



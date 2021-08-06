/*

Object.create({будет прототипом},{
	свойства, параметры (дескрипторы) в виде объекта
		enumerable: true, 		- видимость свойства (например в цикле for), false по умолчанию
		writable: 	true, 		- возможность перезаписать свойство, false по умолчанию
		configurable:true 		- возможность удалить свойство, false по умолчанию
		get()					- возвращать нужно новое значение (можно опираться на значения предыдущих полей). вернется при person.age
		set(v)					- ф-ия отработает при person.age = 'sets' . И здесь мы можем делать любые действия
})
*/

const person = Object.create({
	//прототип для будущего объекта
	calculateAge() {
		console.log('age', new Date().getFullYear() - this.birthYear);
	}
}, {
	name: {
		value: 'Vladilen',
		enumerable: true,   // будет видна
		writable: true,     // можно изменять
		configurable: true  // можно удалить
	},
	birthYear: {
		value: 1993,
		writable: true,
	},
	age: {
		get() {
			//возвращать нужно новое значение (можно опираться на значения предыдущих полей)
			// вернется при person.age
			return new Date().getFullYear() - this.birthYear
		},
		set(v) {
			//ф-ия отработает при person.age = 'sets' . И здесь мы можем делать любые действия
			this.birthYear = 1990;
			//document.body.style.backgroundColor = 'green';
			console.log('set age', v);
		},
		enumerable: true,
		configurable: true
	}
});

// person.calculateAge(); //age 28

// writable
// person.name = 'Maxim';

// enumerable
for (let key in person) {
	if(person.hasOwnProperty(key)){		// пробегись только по собственным ключам (не бери ключи из прототипа)
		console.log(key, person[key]); //name Maxim, age 28
	}
}

// configurable
// delete person.name;
// delete person.age;
// console.log(person);	//{age:[getter/setter]}

// геттеры сеттеры
// console.log(person.age);
// person.age = 'sets';
// console.log(person.age);
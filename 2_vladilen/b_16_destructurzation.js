/*
	Деструктуризация
*/

let result = [52, undefined, 14, 37, 25];

//по старому
const x = result[0];
const y = result[1];
console.log(x, y);

/*
	Деструктуризация массива  , для массива в квадратных скобках
	[a,   b = `Значение по умолчанию, если вдруг так undefines`,    c,    `Можем опустить переменную`     , ...other (Можем использовать оператор Rest)  ] = result;
 */
const [a, b = 11, c, , ...other] = result;
console.log(a, c, other, b);


//------------------------------------------------------------------------


const person = {
	name: 'Max',
	age: 20,
	address: {
		country: 'Russia',
		city: 'Moscow'
	}
};

//по старому
// const name = person.name;

/*
	Деструктуризация объекта  , для массива в фигурных скобках
	
		const {
			name: firstName = 'Без имени',	- можем переопределить переменную (будет доступна по firstName, а не по name)
			age,			
			car = 'Машины нет',           	- можем задать значение по умолчанию
			address: {						- деструктурищация в деструктуризации, address будет недостпен, Зато будут доступны переменные homeTown и country
				city: homeTown,
				country
		}

		
 */
const {
	name: firstName = 'Без имени',
	age,
	car = 'Машины нет',
	address: {
		city: homeTown,
		country
	}
} = person;

console.log(firstName, age, homeTown);

const {name, ...otherObj} = person; //Можем использовать оператор Rest
console.log(name, otherObj);


// Практический пример. Деструктуризация параметров в ф-ии
function logPerson(per) {
	console.log(per.name + per.age);
}

function logPersonDestruct({name: firstName = 'Alex', age}) {
	console.log(name + age);// разбили по переменным
}

logPerson(person);
logPersonDestruct(person);




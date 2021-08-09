/*
	Методы в массиве
*/

const people = [
	{name: 'Владилен', age: 25, budget: 40000},
	{name: 'Елена', age: 17, budget: 3400},
	{name: 'Игорь', age: 49, budget: 50000},
	{name: 'Игорь', age: 49, budget: 50000},
	{name: 'Михаил', age: 15, budget: 1800},
	{name: 'Василиса', age: 24, budget: 25000},
	{name: 'Виктория', age: 38, budget: 2300}
];

//обычный цикл (es5)
for (let i = 0; i < people.length; i++) {
	//console.log(people[i]);
}

//цикл for of (es6)
for (let person of people) {
	//console.log(person);
}


/*  На каждой итерации делаем действие
*	1)
* 	forEach (элемент итерации, index - необязательный, весь массив - необязательный)
*	Не генерирует новый массив
*
* */
people.forEach(function (person, index, pArr) {
	// console.log(person);
	// console.log(index);
	// console.log(pArr);

});
//people.forEach(person => console.log(person));


/*
*	2)
* 	Map (элемент итерации, index - необязательный, весь массив - необязательный)
*	генерирует новый массив (используем return) , т.е видоизменяем массив
*
* */
const newPeople = people.map(person => {
	return `${person.name} ${person.age * 2}`;
});
//console.log(newPeople);


/*
*	3)
* 	filter (элемент итерации)
*	на каждой итерации возвращаем true или false
*
* */

const adults1 = [];
for (let i = 0; i < people.length; i++) {
	if (people[i].age > 18) {
		adults1.push(people[i]);
	}
}
//console.log(adults1);

const adults = people.filter(person => person.age > 18);
// console.log(adults);


/*
*	4)
* 	reduce (  (total,элемент итерации)=>{}  , начальное значение, которое будет присвоено переменной total   ) - немного отличается от предыдущих
* 	total - изменяемое (или собирательное значение)
* 	служит для того, чтобы получили какое то финальне значение, совершив итерацию по какому-то массиву
*
*	Посчитаем бюджет всех элементов:
* */

let amount1 = 0;
for (let i = 0; i < people.length; i++) {
	amount1 += people[i].budget;
}
// console.log(amount1);


const amount = people.reduce((total, person) => {
	return total + person.budget;
}, 0);
// console.log(amount);


/*
*	5)
* 	find (  (элемент итерации)=>{} )
* 	поиск по массиву (вернет первый найденный элемент - значение)
*
* 	findIndex - аналогично, но вернет индекс
* */
const igor = people.find(person => person.name == 'Игорь');
// console.log(igor);


const igorIndex = people.findIndex(person => person.name == 'Игорь');
// console.log(igorIndex);


/*
*	Практический пример
*	Использование цепочки вызовов (ЧЕЙН)
*
* */

const newPeopleAr = people
	.filter(person => person.budget > 3000)
	.map(person => {
		return {
			info: `${person.name} ${person.age}`,
			budget: person.budget
		}
	});
console.log(newPeopleAr);
















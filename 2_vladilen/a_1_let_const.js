/*   Запускаем файл командой     node 1_let_const.js (или стрелкой на панели, или правой кнопкой мыши)

	- любые переменные созданные с помощью let видны только внутри фигурных скобок где они определены.
	- переменные созданные с помощью let и const они не хостятся(не всплывают), мы не можем к ни обращаться пока их не объявили
	- const, нельзя переприсвоить значение,
	  но можно менять внутреность массива или объекта (поэтому нужно быть аккуратным, т.к. получается это не совсем константа)


*/

// Пример 1
if (true) {
	let a = 5;
}
console.log('a2', a);// ошибка, let видны только внутри фигурных скобок


// Пример 2
//	--- hoisting ---  //
b = 20;
console.log(b); //ошибка
let b = 1;		//через var бы заработало


// Пример 3
//	--- const ---  //
const color = 'ffeebb';
//color = 'new'; - error

const array = [1, 2, 3, 5, 8];
console.log(array);
array.push(13); // здесь уже изменится!!!
console.log(array);
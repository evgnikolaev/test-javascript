/*
		объект Math
	   (математические операции)

	   https://javascript.ru/math

	   Math.random() -  Cлучайное число от 0(включительно) до 1
	   поэтому

	   Случайное число между min и max
			function getRandomArbitary(min, max) {
				return Math.random() * (max - min) + min;
			}

		Случайное целое между min и max
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
*//*
		Пример 1. Генератор  паролей
*/
var passwordParts = ['a', 'r', '&', '_'];
var lengthPass = 8;

function generatePassword() {
	var str = '';
	for (var i = 0; i < lengthPass; i++) {
		var n = getRandomNum(0, passwordParts.length - 1);
		str = str + passwordParts[n];
	}
	showPassword(str);
}

function showPassword(string) {
	document.querySelector('output').innerHTML = string;
}

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('generate').addEventListener('click', generatePassword, false);


/*
		Пример 2
*/
var passwordParts2 = ['a', 'r', '&', '_'];
origPassw = '';

function replaceSymbol() {
	var str = this.value;
	origPassw += str.substr(-1);
	str = str.slice(0, -1);
	var n = getRandom(0, passwordParts.length - 1);
	this.value = str + passwordParts[n];
	console.log(origPassw);
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('inp').addEventListener('keyup', replaceSymbol, false);
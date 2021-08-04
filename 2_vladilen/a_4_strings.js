/*

	Строки
	- появились обратные кавычки - `` (они учитвыают пробелы и в них можно задавать переменные и выражения и функции)
	- новые методы
		.startsWith() - начинается ли с подстроки
		.endsWith() - заканчивается ли с подстроки
		.includes() - есть ли подстрока
		.repeat() - повтори строку n раз
		.trim()   /   .trimEnd()   /   .trimStart() - удалить пробелы (сначала и сконца, сконца, сначала)
		.padStart(кол-во, какой строкой заполнить пробелы)   / .padEnd() - задать минимальную длину строки


*/
const title = 'hello';
const isVisble = () => Math.random() > 0.5;

const template = `
	${isVisble ? `visible` : ``}
	<h1> ${2}</h1>  
`;

// console.log(template);


//	--- Новые методы ---  //
const str = 'hello';
console.log(str.startsWith('he'));
console.log(str.endsWith('lo'));
console.log(str.includes('ll'));
console.log(str.repeat(3));
console.log(str.padStart(10, 12389));
console.log(str.padEnd(10, 12389));
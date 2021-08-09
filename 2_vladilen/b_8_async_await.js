/*

	https://jsonplaceholder.typicode.com/ - фейковый запрос на сервер
	Пример вызова (браузерный вызов)
	fetch('https://jsonplaceholder.typicode.com/todos/1')
	  .then(response => response.json())
	  .then(json => console.log(json))
*/

const delay = ms => {
	return new Promise(resolve => setTimeout(() => resolve(), ms));
};
delay(2000).then(() => console.log('2 seconds'));


const url = 'https://jsonplaceholder.typicode.com/todos/1';


/*
  Пример 1. На промисах
*/

//через 2 секунды делаем запрос на сервер, и вернем промис
/*
function fetchTodos() {
	console.log('fetch todo started...');
	return delay(2000)
		.then(() => {
			return fetch(url) // аналог ajax, нативный запрос на сервер, возвращается промис
		})
		.then(response => response.json());
}

fetchTodos()
	.then((data) => console.log(data))
	.catch((e) => console.log(e));
*/

/*
  Пример 2. async await

 	! При выполнении кода подобный синтаксис async await потом все равно оборачивается в промисы.
   async await служит для того чтобы было проще разрабатывать.
	async function foo(){} всегда возвращает промис

	Те ф-ии которые внутри принимают await, должны быть асинхронными
 	Как будто пишем синхронный код. мы не перейдем к новой строчке, пока промис не зарезолвится

*/
async function fetchAsyncTodos() {
	console.log('fetch todo started...');
	try {
		await delay(2000); // равносильно тому, что мы обрабатываем промис
		// на этой строке выполняем логику, ! мы не перейдем к этой строчке, пока промис выше не зарезолвится
		const response = await fetch(url); // обрабатываем промис, данные кидаем в переменную
		const data = await response.json();
		console.log(data);
	} catch (e) {
		console.error(e);
	} finally {

	}
}

fetchAsyncTodos();




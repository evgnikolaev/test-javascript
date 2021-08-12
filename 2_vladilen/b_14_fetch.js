/*

https://jsonplaceholder.typicode.com/ - фейковый запрос на сервер

	Fetch - более новый api.
	!!! fetch возвращает промис c объектом response. Чтобы получить данные у response вызывем методы:
		response.text()
		response.json()


	Пример вызова (браузерный вызов)
	fetch('https://jsonplaceholder.typicode.com/todos/1',{параметры})
	  .then(response => response.json())
	  .then(json => console.log(json))


*/
const requestUrl = 'https://jsonplaceholder.typicode.com/users';


function sendRequest(method, url, body = null) {

	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {'Content-Type': 'application/json'}
	}).then(response => {
		if (response.ok) {
			return response.json()
		}
		//обработка ошибок, так как json() возвращает тоже промис, опишем следующим образом
		return response.json().then(error => {
			const e = new Error('Что то пошло не так');
			e.data = error;
			throw e;//выбрасываем ошибку
		});
	});

}


// Пример GET


// sendRequest('GET', requestUrl)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));


// Пример POST


const body = {
	name: 'Vladilen',
	age: 26
};

sendRequest('POST', requestUrl, body)
	.then(data => console.log(data))
	.catch(err => console.log(err));






























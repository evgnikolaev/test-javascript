/*

XMLHttpRequest (XHR) - более универсальный, работает на старых браузерах
https://jsonplaceholder.typicode.com/ - фейковый запрос на сервер

*/
const requestUrl = 'https://jsonplaceholder.typicode.com/users';


function sendRequest(method, url, body = null) {
	return new Promise((resolve, reject) => {

		const xhr = new XMLHttpRequest();
		xhr.open(method, url);  // Открыть соединение. Методы: GET-получить данные,	POST-создание, PUT-полное обновление элемента, PATCH-частичное обновление элемента, DELETE - удалить


		xhr.responseType = 'json'; // тип
		xhr.setRequestHeader('Content-Type', 'application/json'); // установка HEADER
		xhr.onload = () => {   //при загрузке
			if (xhr.status > 400) {
				reject(xhr.response);
			} else {
				resolve(xhr.response);   //Если бы не использовали xhr.responseType = 'json'  то было бы  JSON.parse(xhr.response)
			}
		};

		xhr.onerror = () => {  // При ошибке, например отвалился интернет
			reject(xhr.response);
		};

		xhr.send(JSON.stringify(body));// Отправить. Можем передать post параметры

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






























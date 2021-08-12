/*

window.localstorage - локальное хранилище браузера, будет доступно после перезагрузки страницы.
					  мини БД для брузера. 	!!! Умеет работать только со строками.
					  !!! Как и куки работает с текущим доменом .  Куки - для сервера, localstorage - для клиента.


	.removeItem('number') 					- удалить ключ
	.setItem('number', 'значение строкой')	- задать ключ
	.getItem('number')						- получить ключ
	.clear()								- полностью очистить localstorage


	JSON.stringify() - объект в строку
	JSON.parse()     - строку в объект


 LocalStorage это синхронное API прямо связанное с нагрузками на дисковую подсистему.
 Иными словами, когда один код работает с LocalStorage то другой код(вне зависимости от того в какой он вкладке и к какому домену относится) ждет, пока такая работа завершиться.

*/


const myNumber = 42;


localStorage.removeItem('number');
localStorage.setItem('number', myNumber.toString());
// console.log(localStorage.getItem('number'));
localStorage.clear();


// Запишем объект при помощи JSON.stringify()
const obj = {
	name: 'Max',
	age: 25
};

localStorage.setItem('person', JSON.stringify(obj));
const person = localStorage.getItem('person');
console.log(JSON.parse(person));



/*

	Слушатель 'storage'.
	Например для синхронизации вкладок, когда приложение открыто в разных вкладках!!

	Вызывается когда в одной вкладкке записываем в localStorage:	localStorage.setItem() ,
	а в другой вкладке это событие отработает и выведет console.log()

*/
window.addEventListener('storage', event => {
	console.log(event);
});





















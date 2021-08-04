/*
Запускаем файл командой     node 1_let_const.js (или стрелкой на панели, или правой кнопкой мыши)

Асинхронность.
При выполнении кода, записывается в стек. При этом поток не блокируется.
То место, где есть асинхронность (обычно жто внешнее web api), мы закидываем в определенное место web apis,
внешнее api обрабатывает функцию и закидывает в очередь.
Эта очередь обычным циклом (EventLoop) проверяется и если ф-ия готова, возвращается обратно в стек.
Асинхронность( это слушатели событий, setTimeout, работа с сервером ).


Полезный сервис для демонстрации:
http://latentflip.com/loupe/


!!! EventLoop выполнится после того как весь синхронный стек выполнится !!!
*/

console.log('start');

//window.setTimeout - браузерный api
setTimeout(function () {
	console.log('after 5 sec');
}, 5000);

setTimeout(function () {
	console.log('after 2 sec');
}, 2000);

console.log('end');


// пример2
// setTimeout 0ms;
//!!! EventLoop выполнится после того как весь синхронный стек выполнится !!!
console.log("Hi!");

setTimeout(function timeout() {
	console.log("Click the button!");
}, 0);

for (var i = 1; i < 1000; i++) {
	console.log(i);
}

console.log("Welcome to loupe.");

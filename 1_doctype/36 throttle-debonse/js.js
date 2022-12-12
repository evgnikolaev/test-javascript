/*
https://www.youtube.com/watch?v=7o5sRSBlKwo&ab_channel=%D0%95%D0%BB%D0%B5%D0%BD%D0%B0%D0%9B%D0%B8%D1%82%D0%B2%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%E2%80%94%D0%98%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8


debonce - схлопывание вызовов функций.
Чтобы 50 вызовов функциий не вызвать сразу при ресайзе например. Или при каждом наборе символа не отправлять форму.

throttle - разрежевание вызовов функций.
Например, вызывать функция через 50 px сроллинга.


*/

// const f = debonce(console.log, 1000);
const f = throttle(console.log, 1000);
f(1);
f(2);
setTimeout(() => f(3), 100);
setTimeout(() => f(4), 500);
setTimeout(() => f(5), 900);

// setTimeout(() => f(6), 1100); // 6 вызовется только последняя при debonce


function debonce(callback, delay) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback.apply(this, args);
		}, delay);
	}
}



function throttle(callback, delay) {
	let isWaiting = false;

	let savedArgs = null;
	let savedThis = null;

	return function wrapper(...args) {
		if (isWaiting) {
			savedArgs = args;
			savedThis = this;
			return;
		}
		callback.apply(this, args);
		isWaiting = true;


		setTimeout(() => {
			isWaiting = false;			//разреженный вызов
			if (savedThis) {
				wrapper.apply(savedThis, savedArgs);   //вызов последнего
				savedThis = null;
				savedArgs = null;
			}
		}, delay);
	}
}


















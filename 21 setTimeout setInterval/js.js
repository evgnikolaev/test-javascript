/*
	Отложенный запуск или ассинхронность
			setTimeout(  ф-ия обратного вызова , время , аргуметы ф-ии  ) - ждет указанное время, и один раз запустит     | вернит id счетчика
			setInterval(  ф-ия обратного вызова , время , аргуметы ф-ии ) - постоянно запускать ф-ию через определенное время  | вернит id счетчика
			clearTimeout( id счетчика ) - останавливает счетчик

			!!! если ф-ия не закончила отработывать за время, setInterval -у все равно. Он запустит заново (будет наложение).
				в этом случае нежно использовать рекурсивный stTimeout !!!!
*/
var a = 1;

function fun(c) {
	if (a === 3) {
		clearTimeout(t);
	}
	console.log(a++);
	console.log(c);
}

// var t = setInterval(fun, 1000, 'ar');
// setTimeout(fun, 1000, 'ar');


/*
   рекурсивный stTimeout
*/

function funx() {
	y++;
	console.log(y);
	if (y === 4) {
		clearTimeout(timer);
		return;
	}
	timer = setTimeout(funx, 1000);
}

var y = 0;
// var timer = setTimeout(funx, 1000);


/*
   пример 1
*/

setInterval(function () {
	var d = new Date();
	document.body.innerHTML = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
},1000);























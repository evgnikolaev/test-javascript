/*
			объект Date

	new Date() - текущая
	new Date(timestamp) - дата по временной метке(мсек с 1 января 1970г)
	new Date( 'строка по стандарту' ) - используется редко (вернет null или дата)
										формат  USO8601extend    -   YYYY-MM-DDTHH:mm:ss.sssZ Z-код часового времени, T-разделитель времени/даты.
	new Date(  год обязательный,   месяц обязательный "С нуля",    день"с единицы",   часы,  минуты,  секунды,  милисекунды  ) - самый удобный
			исли передать значения больше, он автоматом пересчитает.


	методы
		.getTime()  - получить метку

		.getFullYear()  - вернет год
		.getMonth() - число месяца
		.getDate() - день
		.getHours() - часы
		.getMinutes() - минуты
		.getSeconds() - секунды
		.getMilliseconds() - милисекунды
		.getDay() - номер дня недели (с нуля-воскресенье)


		Все считается от UTC (гринвич),    Если нужно получить время Гринвича, добавляем UTC к методам, - getUTCHours(), getUTCMinutes() ...
			.getTimezoneOffset()  - разница в минутх между UTC и вашей временной зоной


		.setTime()  - полностью меняем дату по метке
		.setFullYear()  - установит год
		.setMonth() - число месяца
		и тд


		Приведение Даты к числу вернет метку d=+d;


		вывод строкой в формате USO8601extend  без локализации
		.toString() - строка без локализации
		.toDateString() - дата без локализации
		.toTimeString() - время без локализации
		.toLocaleString('код страны',{можно передать настройки}) - вывод в формате локальном
*/


var d = new Date(); //хранится ссылка на объект даты
d.getFullYear();
d.getMonth();
d.getDate();
d.getHours();
d.getMinutes();
d.getSeconds();
d.getMilliseconds();
d.getDay();
d.getTime();
d.getTimezoneOffset();

d.setFullYear(2025);
var t = +d;//приведение даты к числу (будет метка)
d.toString();
d.toDateString();
d.toTimeString();
d.toLocaleString('ru');
d.toLocaleString('en');
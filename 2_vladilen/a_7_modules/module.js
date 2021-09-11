/*
файлы в js - это модули.
Для доступности в других файлах можно экспоритровать переменные, ф-ии, классы.

*/


export const color = '#bababa';

export function compute(a, b) {
	return a + b;
}



//приватная переменная, видна только внутри этого модуля, так как мы е не экспортируем
const privateVariable = 42;

//экспорт по дефолту (класс или объект)
export default {
	log(){
		console.log(privateVariable);
	}
}

console.log(gsap.utils.clamp(0, 100, 105)); // 100, сохранение числа в диапазоне, при выходе за диапазон, везьмется крайний
console.log(gsap.utils.getUnit('10deg')); 	// deg,  единица измерения
console.log(gsap.utils.interpolate(0, 360, 0.5)); // 180 , половина от 360

console.log(gsap.utils.interpolate('#f00', '#00f', 0.5)); // rgba(128,0,128,1), интерполяция цвета, половина между красным и синим
//можем построить градиент
// for (let i = 0; i < 10; i++) {
// 	let color = gsap.utils.interpolate('#f00', '#00f', i / 10);
// 	console.log(`%c шаг №${i}`, `color:#fff; background: ${color}`); //стилизация консоли
// }

console.log(gsap.utils.mapRange(23, 45, 100, 200, 39)); // 172.7 , сопоставление 23-100, 45-200, находим промежуточное
console.log(gsap.utils.normalize(23, 45, 39));  //0.72 ; normalize(0,1,x),  23-0 , 45-1, находим промежуточное
console.log(gsap.utils.random(10, 100, 10));  //рандомное значение, при этом 3-ий параметр указывает шаг
console.log(gsap.utils.random(['Коля', 'Даша']));  //рандомное значение


// последовательное выполнение в параметрах, сперва выполнится 1-ый параметр, передастся во 2-ой, выполнится там и так далее
// аналогично console.log(Math.round(Math.random() * 80) + 20); //случайное значение 20-100
console.log(gsap.utils.pipe(a => Math.random(), a => a * 80, a => Math.round(a), a => a + 20)());

console.log(gsap.utils.shuffle(['Коля', 'Даша', 'Петя'])); //перемешай . Исходный массив тоже перемешивается, если его передать


const mySnap5 = gsap.utils.snap(5); // привязка , то есть будет стараться возвращать элементы кратные 5
console.log(mySnap5(12)); //10
console.log(mySnap5(13)); //15

console.log(gsap.utils.splitColor('navy'));  //	[0, 0, 128],  расщепление текстового значения цвета

//Разбитие , этим методом например можно посчитать день недели в году
console.log(gsap.utils.wrap(0,5,0)); //0
console.log(gsap.utils.wrap(0,5,1)); //1
console.log(gsap.utils.wrap(0,5,4)); //4
console.log(gsap.utils.wrap(0,5,5)); //0
console.log(gsap.utils.wrap(0,5,9)); //4
console.log(gsap.utils.wrap(0,5,10)); //0






































































// https://www.youtube.com/watch?v=TEeKr2ON66A&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E

/*
МЕТРИКИ. РАБОТА С ЭЛЕМЕНТОМ:

	elem.offsetParent - родительский элемент, относительно которого позиционирован наш элемент.

			Это ближайший предок, который удовлетворяет следующим условиям:
			1) является css-позиционирванным (css свойство position  равно absolute, relative, fixed, sticky)
			2) или теги <td>, <th>, <table>
			3) или <body>

			Ситуации, при которых offsetParent равно null:
			1) для скрытых элементов (css свойство display:none или когда его нет в документе)
			2) для элементов <body>,  <html>
			3) для элементов с position: fixed

	elem.offsetTop - Получаем позцию относительно предка
	elem.offsetLeft

	elem.offsetWidth - Получаем размеры (с border, padding и полосой прокрутки) (для непоказываемых элементов равны нулю)
	elem.offsetHeight

	elem.clientTop - Отступы внуренней части от внешней (ширина border и полоса прокрутки, если он слева)
	elem.clientLeft

	elem.clientWidth - Получаем размеры (без border и полосы прокрутки)
	elem.clientHeight

	elem.scrollWidth - Размеры  объекта включающие в себя прокрученную (которую не видно часть) (без border и полосы прокрутки)
	elem.scrollHeight

	!margin не учитывается нигде в расчетах.



	elem.scrollLeft - Размеры прокрученной области (Работают не только на чтение)
	elem.scrollTop

	elem.scrollBy(x, y)  - прокручивает относительно предыдущего положения
	elem.scrollTo(x,y)   - прокрутка на абсолютные значения / Можно задать опции. Опции не работают в Safari!
	elem.scrollIntoView(true/false)  - прокрутка до элемента (true - до верха, false - до низа элемента) / Можно задать опции. Опции не работают в Safari!



	Координаты:
	Большинство соответствующих методов javascript работают в одой из двух указанных систем координат:
	1) clientX/clientY - Относительно окна браузера (Как position:fixed, отчет идет от верхнего левого угла окна)

			elem.getBoundingClientRect().left
			elem.getBoundingClientRect().top

	2) pageX/pageY - Относительно документа (Как position:absolute, относительно <body>, отчет идет от верхнего левого угла доумента)

			elem.getBoundingClientRect().top + window.pageYOffset


	Получение объекта по координатам
	document.elementFromPoint(x,y)

*/


const block = document.querySelector('.lesson__block');
console.log(block.offsetParent);


//Получаем позцию относительно предка
// console.log(block.offsetTop);
// console.log(block.offsetLeft);

// Получаем размеры (с border, padding и полосой прокрутки)
// console.log(block.offsetWidth);
// console.log(block.offsetHeight);

//Отступы внуренней части от внешней (ширина border и скролл, если он слева)
// console.log(block.clientTop);
// console.log(block.clientLeft);

// Получаем размеры (без border и полосы прокрутки)
// console.log(block.clientWidth);
// console.log(block.clientHeight);

// Размеры  объекта включающие в себя прокрученную (которую не видно часть) (без border и полосы прокрутки)
// console.log(block.scrollWidth);
// console.log(block.scrollHeight);


// Размеры прокрученной области (Работают не только на чтение)
// block.scrollTop = 50;
// console.log(block.scrollLeft);
// console.log(block.scrollTop);

// scrollBy
// block.scrollBy({
// 	top: 20,
// 	left: 20,
// 	behavior: "smooth"
// });

//Координаты относительно окна браузера
// console.log(block.getBoundingClientRect().top);

//Координаты относительно окна документа
// console.log(block.getBoundingClientRect().top + window.pageYOffset);

//Получение объекта по координатам
// console.log(document.elementFromPoint(800, 100));














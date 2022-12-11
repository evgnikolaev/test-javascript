// https://www.youtube.com/watch?v=TEeKr2ON66A&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E

/*


РАБОТА С ОКНОМ БРАУЗЕРА:
document.documentElement.clientWidth - Доступная ширина и высота окна браузера
window.innerWidth 		- Ширина и высота с полосой прокрутки
window.pageXOffset 		- количество прокрученных пикселей

window.scrollBy(x, y)  - прокручивает относительно предыдущего положения
window.scrollTo(x,y)   - прокрутка на абсолютные значения / Можно задать опции. Опции не работают в Safari!
elem.scrollIntoView(true/false)  - прокрутка до элемента (true - до верха, false - до низа элемента) / Можно задать опции. Опции не работают в Safari!
Если хотим запретить прокрутку вовсе, нужно передать overflow:hidden



	1) Доступная ширина и высота окна браузера (для объекта document (тег html)):
		document.documentElement.clientWidth
		document.documentElement.clientHeight

*/
function documentWidth() {
	const mainElement = document.documentElement;
	console.log(mainElement.clientWidth);
	console.log(mainElement.clientHeight);
}


/*
	2) Ширина и высота с полосой прокрутки (для объекта window):
  		window.innerWidth
  		window.innerHeight
*/
function windowWidth() {
	console.log(window.innerWidth);
	console.log(window.innerHeight);
}


/*
	3) Ширина и высота всего документа, включаяя прокрученную часть
*/
function allDocumentWidth() {
	let scrollWidth = Math.max(
		document.body.scrollWidth, document.documentElement.scrollWidth,
		document.body.offsetWidth, document.documentElement.offsetWidth,
		document.body.clientWidth, document.documentElement.clientWidth
	);
	let scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);
	console.log(scrollWidth);
	console.log(scrollHeight);
}


/*
	4) Получить количество прокрученных пикселей (для объекта window и только на чтение):
  		window.pageXOffset
  		window.pageYOffset
*/
function getScroll() {
	console.log(window.pageXOffset);
	console.log(window.pageYOffset);
}


/*
	5) Управление прокруткой страницы(для объекта window):
  		window.scrollBy(x, y)  - прокручивает относительно предыдущего положения
  		window.scrollTo(x,y)   - прокрутка на абсолютные значения / Можно задать опции. Опции не работают в Safari!
  		elem.scrollIntoView(true/false)  - прокрутка до элемента (true - до верха, false - до низа элемента) / Можно задать опции. Опции не работают в Safari!
  		Если хотим запретить прокрутку вовсе, нужно передать overflow:hidden
*/
function scroll1() {
	window.scrollBy(0, 50);
}

function scroll2() {
	window.scrollTo(0, 100);
	//Можно задать опции. Опции не работают в Safari!
	window.scrollTo({
		top:500,
		left:0,
		behavior:"smooth"//smooth,instant,auto(по умолчанию) Опции не работают в Safari!
	});
}

function scroll3() {
	document.querySelector('.scrollElement').scrollIntoView(true);
	//Можно задать опции. Опции не работают в Safari!
	document.querySelector('.scrollElement').scrollIntoView({
		block:"center",//Позиция вертикальная - start,end,nearest,center(по умолчанию)
		inline:"nearest",//Позиция горизонтальная - start,center,end,nearest(по умолчанию)
		behavior:"smooth"//smooth,auto(по умолчанию)
	});
}

//Если хотим запретить прокрутку вовсе, нужно передать overflow:hidden
function toggleScroll() {
	document.body.classList.toggle('scroll-lock');
}

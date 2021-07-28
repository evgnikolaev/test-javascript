/*
	РАБОТА С АТРИБУТАМИ
	( все СТАНДАРТНЫЕ атрибуты хранятся в свойствах ноды )
 */
var img = document.getElementsByTagName('img');
//console.log(img[0].src); //асолютный путь !!!
//console.log(img[0].className); //строка (в атрибут class)  - не удобен
img[0].src = img[1].src;

var a = document.getElementsByTagName('a');
console.log(a[0].href); //асолютный путь !!!

var input = document.getElementsByTagName('input');
input[0].type = 'text';


// методы
img[0].hasAttribute('width'); // есть или нет   true/false
img[0].getAttribute('src');  //строка (то что в атрибуте src)
img[0].setAttribute('data', 'asd'); //установить


/*
	 ДЛЯ РАБОТЫ С КЛАССОМ ( и для IE>10)
	classList
 */
img[0].classList.contains('mb-2');    // есть или нет   true/false
img[0].classList.add('new-class');  //добавить
img[0].classList.remove('new-class');  //удалить
img[0].classList.toggle('new-class');  //переключатель


/*
	 ДЛЯ РАБОТЫ С STYLE
	classList
 */
img[0].style.color;


/*
	data атрибуты
 */
//   1)
img[0].getAttribute('data-petya');
//   2)  и для IE>10
var petya = img[0].dataset.petya;


/*
	вычисленное значение браузера после рендеринга
 */
getComputedStyle(img[0]).width;
getComputedStyle(img[0]).height;


/*
	Пример 1
 */
function clearActive(collection) {
	var i = 0;
	for (i = 0; i < collection.length; i++) {
		collection[i].classList.remove('active');
	}
}

function tabShow(el) {

	var tabWrap = document.getElementsByTagName('li');
	clearActive(tabWrap);
	var tabCollection = document.getElementsByClassName('tab');
	clearActive(tabCollection);

	el.classList.add('active');
	var id = el.getAttribute('data-target');
	document.getElementById(id).classList.add('active');
}



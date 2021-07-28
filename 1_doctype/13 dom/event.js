/*
	Манипуляция с DOM
*/


/*
	!!!!   Лучше собрать, и один раз вставить в DOM  ( DOM лучше дергать реже )   !!!!


	1) СОЗДАТЬ HTML НОДУ
			document.createElement('имя тега');    - добавляет в память, (не в DOM) (метод у document)

	2) СОЗДАТЬ ТЕКСТОВУЮ НОДУ
			document.createTextNode('текст');    - добавляет в память, (не в DOM)  (метод у document)

	3) ВСТАВИТЬ НОДУ
			- добавляет в родителя ПОСЛЕДНИМ (или в DOM)
			parentNode.appendChild('Node');

			- добавляет в родителя ПЕРЕД (или в DOM)
			parentNode.insertBefore('Node которуюю вставляем' , 'Node перед которой вставляем' );

	4) КЛОНИРОВАТЬ НОДУ
			el.cloneNode(true/false);  -  клонирует саму нода с детьми/без детей ( в память )

	5) УДАЛИТЬ НОДУ
			parentNode.removeChild('Node');

	5) ЗАМЕНИТЬ НОДУ
			parentNode.replaceChild('Новая Node', 'Старая Node');

*/

/*  appendChild  */
var p = document.createElement('p');
var text = document.createTextNode('text node');
p.appendChild(text);
document.getElementById('box').appendChild(p);


/*  insertBefore  */
var ul1 = document.querySelectorAll('.ul1')[0];
var newLi1 = document.createElement('li');
newLi1.innerHTML = 'newLi1';
var temp1 = document.querySelectorAll('.li1');
ul1.insertBefore(newLi1, temp1[1]);


/*  cloneNode  */
var ul2 = document.querySelectorAll('.ul2')[0];
var list2 = document.querySelectorAll('.li2');
var newCloneLi = list2[1].cloneNode(true);
ul2.appendChild(newCloneLi);


/*  removeChild  */
var ul3 = document.querySelectorAll('.ul3')[0];
var list3 = document.querySelectorAll('.li3');
ul3.removeChild(list3[0]);


/*  replaceChild  */
ul3.replaceChild(newCloneLi, list3[2]);


/*
	!!  Если сперва удалить , потом заменить элемент на этот удаленный, то будет ошибка   !!

		DOM и наши переменныые(коллекции) - разные вещи.

	!! Исключения  document.getElements... - они живые.
	Когда меняется DOM, меняются и содержимое переменных коллекции. !!

	querySelector - быстрее, чем getElements... (если не нужен живой поиск, используем querySelector)
 */
var ul4 = document.querySelectorAll('.ul4')[0];
// var lis4 = document.querySelectorAll('.li4');
var lis4 = ul4.getElementsByTagName('li');
ul4.removeChild(lis4[0]);
var newLis4 = document.createElement('li');
newLis4.innerHTML = 'newLi4';
ul4.replaceChild(newLis4, lis4[0]); //выдаст ошибку, если коллекция получена при помощи querySelectorAll


/*
	Пример1
*/
var primer = document.getElementById('primer1');
primer.addEventListener('click', fun, false);

function fun(e) {
	var el = e.target;
	if (el.tagName === 'BUTTON') {
		var li = el.parentNode;
		switch (el.dataset.action) {
			case 'prev':
				remove(li.previousElementSibling);
				break;
			case 'next':
				remove(li.nextElementSibling);
				break;
		}
	}
}

function remove(node) {
	if (node !== null) {
		primer.removeChild(node);
	}
}
/*
	Введение в ООП

	Ранее мы все привязывали жестко к элементам. Если мы решим еще на странице добавить например календарь, у нас будет постоянное дублирование кода.

 	Поэтому создаем класс (Функцию конструктор) - чертеж, по которому будет создан объект. (при этом не будет дуюлей, например, "если нужно создать 29 студентов")
 	Функцию конструктор принято с большой буквы.
	ООП позволяет все ф-ии относящиеся к опред. объекту, позволяют объединить в одном месте.


 	в конструкторе  	var - локальное защищенное свойство
 					this - (контекст, в котором сейчас все происходит - пробрасываем из объекта ссылку наружу) публичное свойство или метод
					CONST - константа, просто договоренность(на самом деле переменная)
*/


function Student(n, a) {
	this.name = n;
	this.age = a;
	var CONST = 55;

	this.sayHello = function () {
		console.log('hello from ' + this.name);
	};

	this.getAge = function () {
		console.log('age diff = ' + calc());
	};

	var self = this;
	var calc = function () {
		//return CONST - this.age;  //если писать так то в this попадет объект window
		return CONST - self.age;
	};
}

var s = new Student('Alex', 25);
s.sayHello();
s.getAge();


/**
 *  		ПРИМЕР 1 "ООП СТИЛЬ"
 *
 *  		Когда мы работаем с функциями, приходится много данных гонять туда-сюда.
 *     		А здесь все в одном месте. (И читаемтость лучше)
 */

function HTMLElement(tag, content, bgc) {

	var create = function () {
		var el = document.createElement(tag);
		el.innerHTML = content;
		el.style.backgroundColor = bgc;
		return el;
	};

	var el = create();

	this.show = function () {
		document.body.appendChild(el);
	};

	this.remove = function () {
		document.body.removeChild(el);
	};
}

var el = new HTMLElement('div', 'content', 'yellow');
el.show();

var el2 = new HTMLElement('div', 'content2', 'green');
el2.show();


/**
 *  		ПРИМЕР 1 "ПРОСТОЙ СТИЛЬ"
 */
function create(tag, content, bgc) {
	var el = document.createElement(tag);
	el.innerHTML = content;
	el.style.backgroundColor = bgc;
	document.body.appendChild(el);
	return el;
}

function remove(el) {
	document.body.removeChild(el);
}

var el4 = create('p', 'content3', 'red');
var el5 = create('p', 'content4', 'red');
remove(el4);


/**
 *   ПРИМЕР 2. tooltips
 */

function Popup(options) {
	var tip = document.createElement('div');

	this.toggle = function () {
		tip.classList.toggle('active');
	};

	function addPosition(position) {
		switch (position) {
			case 'top':
				tip.style.top = '-100%';
				tip.style.left = '0';
		}
	}

	this.init = function () {
		tip.classList.add('popup');
		tip.innerHTML = options.content;
		options.node.appendChild(tip);
		options.node.style.position = 'relative';

		addPosition(options.position);
		options.node.addEventListener('click', this.toggle, false);
	};

	this.init();
}


var t = new Popup({
	node: document.getElementById('el1'),
	content: 'content1',
	position: 'top'
});

var t2 = new Popup({
	node: document.getElementById('el2'),
	content: 'content2',
	position: 'left'
});

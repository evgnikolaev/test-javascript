/*
	ООП. Функциональный подход. getter/setter

	Геттеры и сеттеры:
	Берут на себя проверку на то какие данные будут загружены и какие данные будут получены.
	Делаются приватные свойства, чтобы прятать логику. Чтобы код не ломался. Еесли уже нужен доступ к ним извне, делаются getter/setter.

	например totalDist - приватное свойство - на запись/чтение извне быть не должно. делаем getter/setter для нее.
	1) Пишется отдельный getter/setter для определенного приватного свойства.
	2) Либо еще дополнительно можно описать общий getter. Для setter лучше так не делать, т.к. разные данные.
		this.get  = function(  'Имя свойства'  ){  'описываю, что должно возвращать'  }

*/

function Rabbit(name) {
	var totalDist = 0;
	this.name = name;
	var timer;

	this.run = function () {
		timer = setInterval(function () {
			console.log(totalDist++);
		}, 1000);
	};

	this.stop = function () {
		clearTimeout(timer);
	};


	// 1 вариант,  описываем определенный getter/setter для определенного приватного свойства.


	//Описываем геттер для определенного приватного свойства
	this.get_totalDist = function () {
		return totalDist;
	};

	//Описываем setter для определенного приватного свойства
	this.set_totalDist = function (value) {
		value = +value;
		if (!isNaN(value)) {
			totalDist = value
		} else {
			console.log('totalDist not number');
		}
	};


	//  Общий геттер
	this.get = function (propertyName) {
		if (propertyName === 'timer') {
			return undefined;
		}

		//свойство публичное?
		if (this[propertyName] !== undefined) {
			return this[propertyName];
		} else {
			//свойство приватное?
			return this['get_' + propertyName]();
		}
	};


	//2 вариант, одновременно и getter и setter (аналогично как в jquery)
	this.getterSetterTotalDist = function (value) {
		if (value === undefined) {
			return totalDist;
		} else {
			value = +value;
			if (!isNaN(value)) {
				totalDist = value
			} else {
				console.log('totalDist not number');
			}
		}
	}
}


var rabbit = new Rabbit('baks');


/**
 *  Пример 1. (геттер и сеттер)
 */

function MyHtml(id) {
	var el = document.getElementById(id);

	this.width = function (value) {
		if (value === undefined) {
			return getComputedStyle(el).width;
		} else {
			value = parseFloat(value);
			if (!isNaN(value)) {
				el.style.width = value + 'px';
			}
		}
	}
}

var pr1 = new MyHtml('pr1');













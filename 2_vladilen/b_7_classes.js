/*
	Классы, наследование, геттеры сеттеры
*/

/*
* 	Класс, название задается с большой буквы
*
* */

class Animal {

	//статические переменные
	static type = 'ANIMAL';

	constructor(options) {
		this.name = options.name;
		this.age = options.age;
		this.hasTail = options.hasTail;
	}

	voice() {
		console.log('I am animal');
	}
}

const animal = new Animal({
	name: 'Animal',
	age: 5,
	hasTail: true
});

// console.log(animal);	//наследник класса Animal
// animal.voice();			//этот метод будет в прототипе Animal
// console.log(Animal.type);	//вывод статической переменной


/*
* 	Наследование
*
* */
class Cat extends Animal {

	static type = 'CAT';

	constructor(options) {
		super(options);//вызов родительского конструктора, без него ошибка
		this.color = options.color;
	}

	voice() {
		super.voice();//вызов родительского метода, можно и без него
		console.log(111);
	}


	//Геттеры и сеттеры
	//вызов же будет как свойство, а не как метод - cat.ageInfo (  а не  cat.ageInfo()  )
	get ageInfo() {
		return this.age * 7;
	}

	//установка cat.ageInfo = 8
	set ageInfo(newAge) {
		this.age = newAge;
	}

}

const cat = new Cat({
	name: 'Animal',
	age: 5,
	hasTail: true,
	color: 'black'
});

// console.log(cat);
// console.log(Cat.type);
// cat.voice();
// console.log(cat.ageInfo);//вызов геттера
// cat.ageInfo = 8;//сеттер
// console.log(cat);//вызов геттера


/*
* 	Пример 1
*			Когда мы работаем с функциями, приходится много данных гонять туда-сюда.
*     		А здесь все в одном месте. (И читаемтость лучше). Избегаем постоянного дублирования кода.
* */


// класс с селектором, есть методы спрятать, показать
class Component {
	constructor(selector) {
		this.$el = document.querySelector(selector);
	}

	hide() {
		this.$el.style.display = 'none';
	}

	show() {
		this.$el.style.display = 'block';
	}
}

// наследник "квадрат", с размерами и цветом
class Box extends Component {
	constructor(options) {
		super(options.selector);
		this.$el.style.width = this.$el.style.width = options.size + 'px';
		this.$el.style.backgroundColor = options.color;
	}
}

// наследник "круг", с размерами и цветом от "квадрата"
class Circle extends Box {
	constructor(options) {
		super(options);
		this.$el.style.borderRadius = '50%';
	}
}

const box1 = new Box({
	selector: 'body',
	size: 100,
	color: 'red'
});

const box2 = new Box({
	selector: '#box2',
	size: 100,
	color: 'blue'
});

const c = new Circle({
	selector: '#circle',
	size: 100,
	color: 'green'
});

box1.hide();
box2.show();
c.hide();
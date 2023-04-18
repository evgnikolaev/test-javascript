<? /*

https://www.youtube.com/watch?v=809-Abmk--w&list=PLOQDek48BpZFzxKS-2sLAeSBB83x-xILB&index=2&ab_channel=htmllab



1) Введение
gsap.to('.selector',{
	x:100,
	translateY:100,
	background:'gray',
	duration:1,              //длительность
	delay:1,                 //задержка

	//задержку можно задать ф-ией, задержка для i-го элемента
    delay: function (i, el) {
        return i * 0.05;
    },

	repeat:2,                //кол-во повторов
	repeatDelay:1,           // задержка (вконце) между повторами
	stagger:1,               // задержка старта для каждого селектора, когда их несколько

	// можно задать объектом
    stagger: {
        each: .5,
        from: 'center',
        grid: 'auto', // позволяет определить где находится центр, и начинать анимацию с нее
        // grid:[13,12] // можно указать полпожение
        axis:'x'
    }

	ease:"power2.inOut",     //анимация  https://greensock.com/docs/v3/Eases
	paused:true,             //на паузу

    // обработчики
    onComplete: function () { console.log('анимация завершена'); },
    onRepeat: function () { console.log('анимация повторяется'); },
    onReverseComplete: function () { console.log('Обратная анимация завершена'); },
    onStart: function () { console.log('анимация стартует'); },
    onUpdate: function () { console.log('Выполнен один тик (кадр, ход) анимации'); },

});




2) Можно также менять свойства объекта
const myObj = {
	subscriber: 6000,
	sponsor:3,
	delta:.5,
	myColor:"#12356"
};

gsap.to(myObj,{
	subscriber:100000,
	sponsor:8,
	delta:.8,
	delta2:.8,
	myColor:"#987654",

	duration:10,
	delay:1
});




3) Timeline - временная линия

const tween = gsap.timeline({ repeat: 0, repeatDelay: 1 });

tween.to('h1', {
    x: 0,
    ease: 'bounce',
    duration: 2
});

tween.to('footer', {
    x: 0,
    ease: 'bounce',
    duration: 2
}, '-=1'); // (- 1 секунда) смещение анимации на одну секунду после начала анимации заголовка








4) Draggable - перетаскивание

Draggable.create('.selector', {
	type: 'x,y',  //по каким осям можно перетаскивать
	bounds: '#box', //не выводи элемент за границы
	edgeResistance: 0.5, // степень вытаскиваемости за границы
	inertia: true, //инерционность, для использования этого свойства нужно подключать платный плагин
	liveSnap: { //привязка к краям (или к линиям сетки)
		x: function (endValue) {
			return Math.round(endValue / 100) * 100
		},
		y: function (endValue) {
			return Math.round(endValue / 100) * 100
		},
	},
	lockAxis:true, //,блокировка оси при перетаскивании

	// повороты
	// type: 'rotation',
	// liveSnap: function (endValue) {
	// 	return Math.round(endValue / 45) * 45
	// },

	//обработчики
	onClick: function () {
		console.log('клик');
	},
	onDragStart: function () {
		console.log('Старт перетаскивания');
	},
	onDragEnd: function () {
		console.log('финиш перетаскивания');
	},
	onDrag: function () {
		console.log('перетаскивание');
	},
});





5)  TextPlugin  - побуквенная замена в тексте

 gsap.registerPlugin(TextPlugin);
 gsap.to('.selector', {
 	duration: 1,
 	text: {
		value: "Your new text", //новый текст
 		oldClass: "class1",
 		newClass: "class2", // новый класс, когда измнения произойдут
		delimiter: "", //анимация побуквенно, если ' ' - по словам
 		type:'diff' // алогритм замены, можно не указывать
	}
 });







6) MotionPathPlugin - движенние по пути

gsap.registerPlugin(MotionPathPlugin);

gsap.to('.selector', {
	duration: 2,
	motionPath: {
		path: document.querySelector('.yourPath'), // выбираем путь
		align: '.yourPath', // левый верхний угол бежит по середине пути
		alignOrigin: [0.5, 0.5], //по центру линии
		autoRotate: true, // кубик будет поворачиваться по изгибам линии
		start: 0.4, // откуда начать
	},
	ease: "bounce"
});





7) Utility Methods


gsap.utils.clamp(0, 100, 105);               // 100, сохранение числа в диапазоне, при выходе за диапазон, везьмется крайний
gsap.utils.getUnit('10deg'); 	             // deg,  единица измерения

gsap.utils.interpolate(0, 360, 0.5);         // 180 , половина от 360
gsap.utils.interpolate('#f00', '#00f', 0.5); // rgba(128,0,128,1), интерполяция цвета, половина между красным и синим

gsap.utils.mapRange(23, 45, 100, 200, 39);   // 172.7 , сопоставление 23-100, 45-200, находим промежуточное
gsap.utils.normalize(23, 45, 39);            //0.72 ; normalize(0,1,x),  23-0 , 45-1, находим промежуточное
gsap.utils.random(10, 100, 10);              //рандомное значение, при этом 3-ий параметр указывает шаг
gsap.utils.random(['Коля', 'Даша']);          //рандомное значение


// последовательное выполнение в параметрах, сперва выполнится 1-ый параметр, передастся во 2-ой, выполнится там и так далее
// аналогично console.log(Math.round(Math.random() * 80) + 20); //случайное значение 20-100
gsap.utils.pipe(a => Math.random(), a => a * 80, a => Math.round(a), a => a + 20)();


gsap.utils.shuffle(['Коля', 'Даша', 'Петя']);     //перемешай . Исходный массив тоже перемешивается, если его передать

const mySnap5 = gsap.utils.snap(5);             // привязка , то есть будет стараться возвращать элементы кратные 5
mySnap5(12); //10
mySnap5(13); //15

gsap.utils.splitColor('navy');                  //	[0, 0, 128],  расщепление текстового значения цвета

//Разбитие , этим методом например можно посчитать день недели в году
gsap.utils.wrap(0,5,0); //0
gsap.utils.wrap(0,5,1); //1
gsap.utils.wrap(0,5,4); //4
gsap.utils.wrap(0,5,5); //0
gsap.utils.wrap(0,5,9); //4
gsap.utils.wrap(0,5,10); //0





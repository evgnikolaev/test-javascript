/*

1) Если слайдер находится внутри флекс или грид элемента, то он ломается.
	Нужно этому флекс элементу задать min-width:0

2) Пагинации, стрелки, скролл можем размещать в любом месте

3) Атрибут dir="rtl"  - для стран которые пишут справа налево

4) lazyloading
	добавляем div , и картинке задаем класс и дата атрибут:
	<img class="swiper-lazy" data-src="img/1.png" src="img/1x1.png" alt="Картинка">
	<div class="swiper-lazy-preloader"></div>
	И настариваем Lazyloading

5) Слайдеры можно вкладывать друг в друга.
	Например в слайд засунуть еще один слайдер

6) Можно 2 слайдера связывать друг с другом при помощи
	myImageSlider.controller.control = myTextSlider;

7) Бывают случаи когда слайдер например скрыт в табе, и при переключении таба слайдер может не подгрузиться.
	Для этого есть свойства:
	observer:true,
	observeParents:true,
	observeSlideChildren:true,

8) можно использовать эффекты параллакса при смене слайда
	Нужно включить parallax:true,  и расставить дата атрибуты:
		data-swiper-parallax - сдвиг
		data-swiper-parallax-scale - маштаб
		data-swiper-parallax-opacity - прозрачность
		data-swiper-parallax-duration - скорость проигрывания
	 Лучше работает когда slidesPerView: 1

*/


let myImageSlider = new Swiper('.image-slider', {


	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},


	//Навигация
	pagination: {
		el: '.swiper-pagination',

		/*
		// 1) Буллеты (точки)
		type: 'bullets',
		clickable: true, //кликабельный
		dynamicBullets: true,//динамические буллеты (точки с разным размером)
		//Кастомный булллет
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		*/


		// 2) Фракция (текущая страница слайдера из общего числа)
		type: 'fraction',
		//Кастомная фракция
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},


		/*
		// 3) Прогрессбар
		type: 'progressbar',
		*/
	},


	/*
		// Скролл
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,//возможность перетаскивать скролл
		},
	*/


	// свайп - перетаскивание
	simulateTouch: true,
	touchRatio: 1,//чувствительность свайпа
	touchAngle: 45,//угол срабатывания свайпа
	grabCursor: true,//курсор перетаскивания (поменяется на cursor:pointer)
	slideToClickedSlide: true,//переключение при клике на следующий(предыдущий) слайд


	/*
	//Навигация по хешу, для этого для слайдов добавляем data-hash="slide-2"
	hashNavigation: {
		//отслеживать состояние (добавляет хеши в строку браузера tutorials/2_swiper/#slide-3)
		watchState: true,
	},
	*/

	//Управление клавиатурой
	keyboard: {
		//включить/выключить
		enabled: true,
		//включить/выключить только когда слайдер в пределах вьюпорта (т.е когда она видна в браузере, когда до слайдера доскроллили)
		onlyInViewport: true,
		//включить/выключить управление клавишами pageDown, pageUps
		pageUpDown: true,
	},


	//Управление колесом мыши
	mousewheel: {
		sensitivity: 1,//Чувствительность колеса мыши
		eventsTarget: '.image-slider',//Класс объекта на котором будет срабатывать прокрутка мышью
	},


	//------------------------------------


	//Автовысота слайдера подстраивается под контент (удобно когда много текста)
	autoHeight: false,


	/*
	Количество слайдов для показа
	Автовысота будет работать для группы, пагинация (буллеты,...) отображают страницы слайдера
	slidesPerView: 1.2 - можно указывать и дробные и целые значения
	slidesPerView: 'auto' - можно задать автоширину слайдов (или задать свою ширину слоайдов в css   .image-slider .swiper-slide{ width: auto; })
	также 'auto' не будет работать при slidesPerColumn: '2 и больше'
	*/
	slidesPerView: 3,


	//отключение функционала слайдера если слайдов меньше чем нужно
	watchOverflow: true,


	//Отступ между слайдами (px)
	spaceBetween: 20,


	//Количество пролистываемых слайдов
	slidesPerGroup: 1,


	//Активный слойд по центру (не слева)
	centeredSlides: false,


	//Стартовый слайд (с какого слайда начать)
	initialSlide: 0,


	/*
	Мультирядность
	Для корректной работы убрать autoHeight, Также нужно поменять стили
	*/
	slidesPerColumn: 1, //(не сработал)


	/*
	Бесконечность
	Не подразумевает скролл scrollbar, поэтому его нужно отключить,
	также не работает с мультирядностью slidesPerColumn
	Если мы используем  slidesPerView: 'auto', нам нужно вручную добавить количество дублирующих слайдов   loopedSlides: 3,
	*/
	loop: false,
	//Количество дублирующих слайдов
	loopedSlides: 0,


	/*
	Свободный режим
	Можем свайпать слайды без фиксированных позиций
	А если использовать mousewheel мы можем просто скролить слайды  без фиксированных позиций
	*/
	//freeMode: true,


	/*
	//Автопрокрутка
	autoplay: {
		//Пауза между прокруткой
		delay: 1000,
		//Закончить на последнем слайде если выключен loop
		stopOnLastSlide: true,
		//Отключить автопрокрутку после ручного переключения
		disableOnInteraction: true,
	},
	*/


	//Скорость переключения слайдов
	speed: 1500,


	/*
	//Вертикальный слайдер
	direction: 'vertical',
	*/


	/*
	//Эффекты переключения  'slide', 'fade', 'cube', 'coverflow', 'flip' ,'creative'
	effect: 'coverflow',

	//Дополнение к 'fade',
	fadeEffect: {
		crossFade: true,//Параллельная смена прозрачности
	},

	//Дополнение к flip',
	flipEffect: {
		slideShadows: true,//тень
		limitRotation: true,//показ только активного слайда
	},

	//Дополнение к 'cube',
	cubeEffect: {
		//настройка тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},

	//Дополнение к 'coverflow',
	coverflowEffect: {
		rotate: 20,//угол
		stretch: 50,//наложение
		slideShadows: true,//тень
	},
	*/


	/*
	breakpoints, работают по принципу mobile-first
	можем менять только те настройки, которые не меняют структуру и логику всего слайдера
	например сменить горизонтальный вид на вертикальный не сможем.
	в 5-ой версии появилсась возможность указывать пропорции (высота/ширину) @0.75

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30
		},
	},
	*/

	/*
	Lazyloading
	 */
	//отключить подзагрузку всех картинок
	preloadImages: false,
	lazy: {
		//Подгружать на старте переключения слайда
		loadOnTransitionStart: false,
		//Подгрузить предыдущую и следующую картинки
		loadPrevNext: false,
	},
	//Слежка за видимыми слайдами
	watchSlidesProgress: true,
	//Добавление класса видимым слайдам
	watchSlidesVisibility: true,


	//зум картинки, увеличивает не в попапе! также нужно задать слайду класс swiper-zoom-container
	zoom: {
		maxRatio: 5,//макисмальное увеличение
		minRatio: 1//минимальное увеличение
	},


	//Минниатюры, превью
	thumbs: {
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5,
			spaceBetween: 20,
		}
	},


	//Обновить свайпер при изменении элементов слайдера
	observer: true,
	//Обновить свайпер при изменении родительских элементов слайдера
	observeParents: true,
	//Обновить свайпер при изменении дочерних элементов слайдера
	observeSlideChildren: true,


	//Доступность (для людей с ОВЗ, для устройств)
	a11y: {
		//Включить, выключить
		enabled: true,
		//Сообщения
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
		firstSlideMessage: 'This is the first slide',
		lastSlideMessage: 'This is the last slide',
		paginationBulletMessage: 'Go to slide {{index}}',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: ''
	},


	//События
	on: {
		//Событие инициализации
		init: () => {
			console.log('Слайдер запущен');
		},
		//Событие смены слайда
		slideChange: () => {
			console.log('Слайдер переключен');
		}
	}

});


let myTextSlider = new Swiper('.text-slider', {
	slidesPerView: 3,
	spaceBetween: 30,

	//Параллакс
	parallax: true,

});


/*
	Передача управления
	Можно передать управление и парамтером, только в этом случае привязка будет работать для одного слайдера
	controller:{
		control: myTextSlider,
	}
*/
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;


let myVirtualSlider = new Swiper('.virtual-slider', {
	slidesPerView: 3,
	spaceBetween: 30,

	/*
	Виртуальные слайды
	Структура перестраивается при смене слайда
	при этом не сработает loop:true и с мультирядностью slidesPerColumn
	*/
	virtual: {
		// slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
		slides: (function () {
			let slide = [];
			for (let i = 0; i < 10; i++) {
				slide.push(`<div class="image-slider__text">Слайд №${i}</div>`)
			}
			return slide;
		}())
	},

});


/*
	Также можно править параметры за пределами инициальзации
 */


//Получение
let qSlides = myImageSlider.slides.length;
console.log(qSlides);
//Изменение
myImageSlider.params.speed = 3000;


/*
	Методы
 */


//Обновить слайдер
myImageSlider.update();
//Переключить слайдер на 2 , со скоростью 800
myImageSlider.slideTo(2, 800);


/*
	События
 */
myImageSlider.on('slideChange', () => {
	console.log('Слайдер переключен 2');
});


/*
	Пример автопрокрутки при наведении
 */
let sliderBlock = document.querySelector('.image-slider');
sliderBlock.addEventListener('mouseenter', (e) => {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 500;
	myImageSlider.autoplay.start();
});
sliderBlock.addEventListener('mouseleave', (e) => {
	myImageSlider.autoplay.stop();
});


/*
	Пример работы фракции и прогрессбара вместе
 */

let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');
mySliderAllSlides.innerHTML = myImageSlider.slides.length;
myImageSlider.on('slideChange', () => {
	let currentSlide = ++myImageSlider.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
});















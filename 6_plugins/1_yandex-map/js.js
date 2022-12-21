/*

https://www.youtube.com/watch?v=JT5XTA2zjTU&list=PLCMvV-acWe2CGsH4coojxWVEUUyZqhi6l&index=1&ab_channel=MaxGraph-c%D0%B0%D0%B9%D1%82%D1%8B%D0%BA%D0%B0%D0%BA%D1%81%D1%82%D1%80%D0%B0%D1%81%D1%82%D1%8C

Порядок инициализации:
https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html?from=jsapi
1) Получите API-ключ (в кабинете разработчика https://developer.tech.yandex.ru/services)
2) Подключите API
3) Создайте контейнер для карты
4) Создайте карту


Сервис определения координат: https://yandex.ru/map-constructor/location-tool/?from=club

Балун - всплавющее подсказка на карте

*/

ymaps.ready(init);

function init() {
	/*
		1) Создание карты, маркера и балуна
	*/
	var map = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 7
	});


	//добавить маркер
	let placemark = new ymaps.Placemark([55.76, 37.64], {
		/*
			Свойства балуна
			стандартные
			balloonContentHeader:'Хедер балуна',
			balloonContentBody:'боди балуна',
			balloonContentFooter:'футер балуна',

			или своя разметка
			balloonContent:'';
	*/
		balloonContent: `
		<div class="balloon">Адрес</div>
		<div class="balloon__contacts">Контаты</div>
		`,
	}, {
		// свойства иконки
		iconLayout: 'default#image', //будет своя иконка
		iconImageHref: 'https://cdn-icons-png.flaticon.com/512/2098/2098567.png',
		iconImageSize: [20, 20], //размер
		iconImageOffset: [-10, -10] //отступ от центра
	});
	map.geoObjects.add(placemark); //добавить маркер

	placemark.balloon.open();//открытие балуна по умолчанию

	// Панели
	map.controls.remove('zoomControl'); //удалить контроль зуммирвоания
	map.controls.remove('geolocationControl'); //удалить геолокацию
	map.controls.remove('searchControl'); //удалить поиск
	map.controls.remove('trafficControl'); //удалить контрол траффика ("пробки")
	map.controls.remove('typeSelector'); //удалить тип ("слои")
	map.controls.remove('fullscreenControl'); //удалить кнопку перехода в полноэкранный режим
	map.controls.remove('rulerControl'); //удалить контроль правил (линейки)
	map.behaviors.disable(['scrollZoom']); //отключить зуммирование карты


	/*
		2) Создание маршрута
	*/
	var mapRoute = new ymaps.Map("mapRoute", {
		center: [55.76, 37.64],
		zoom: 17,
		controls: ['routePanelControl'] // добавляем панель маршрута
	});

	//получаем панель маршрута
	let control = mapRoute.controls.get('routePanelControl');
	//управляем состоянием маршрута
	control.routePanel.state.set({
		type: 'masstransit', //такси, общественный транспорт ...
		fromEnabled: false, // начальное значчение редактируемо или нет
		from: [55.76090633, 37.64231743],
		toEnabled: true, // конечное значение редактируемо
		to: [55.76019249, 37.64240326],
	});

	//управляем опциями для маршрута
	control.routePanel.options.set({
		types:{
			masstransit:true, //общественный транспор
			pedestrian:true, // пешеход
			taxi:true // nfrcb
		}
	});
}



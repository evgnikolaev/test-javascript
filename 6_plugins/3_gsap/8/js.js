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

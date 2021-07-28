/*
	34 jQuery. Пишем свой плагин

	1)
	--------
	Не очень удобно var t = new Tooltip({}) , то как организована это в jquery удобнее, например $('.tooltipped').myPlugin()
	Мы расширяем стандартные возможности, это называется плагином
	jQuery.fn - объект в jQuery, сюда добавляем свои методы на лету


	jQuery.fn.myPlugin = function () {
		console.log(111);
	};
	$('.tooltipped').myPlugin();   -  вызовется один раз, что делаем там внутри с элементами, это уже другое




	2)
   -------
	Такой способ не удобен
	мы хотим использовать ф-ию fun в плагине, но она в глобальной, и могут пересечься имена,
	function fun() { console.log('fun');}

	jQuery.fn.myPlugin = function () {
		fun();
	};



	!!!!!!!!!!   НУЖНО ОГРАНИЧИВАТЬ ОБЛАСТЬ ВИДИМОСТИ ПЛАГИНА   !!!!!!!!!!
	!!!!!!!!!!   ()(); - ВЫЗОВИ Ф-ИЮ СЕБЯ СРАЗУ САМ, МЫ ЗАМЫКАЕМ НА Ф-ИИ jQuery   !!!!!!

	(function ($) {
		function fun() {
			console.log(this);	-  Window
		}

		$.fn.myPlugin = function () {
			console.log(this); -  jQuery-объект из выборки
			fun();

			return this;  - Нужно вернуть this, чтобы делать цепочки вызовов
		}
	})(jQuery);

 */


(function ($) {

	$.fn.myPlugin = function () {
		var self = this;
		// setTimeout(function () {
		// 	self.hide(1000);
		// }, 1000);

		this.width(200);

		return this;
	}

})(jQuery);


$('.tooltipped').myPlugin().animate({
	marginLeft: 500
}, 1500);


/*
	3) Пример tooltip
	-------
*/


(function ($) {

	//по умолчанию
	var settings = {
		position: 'top',
		duration: 1000,
	};


	function show() {
		$(this).addClass('active');
	}


	function hide() {
		var self = $(this);
		setTimeout(function () {
			self.removeClass('active');
		}, settings.duration);
	}


	var createTooltip = function (parent) {
		// 		js
		// 		tooltip = document.createElement('div');
		// 		tooltip.innerHTML = message;
		// 		tooltip.classList.add('tooltip');
		// 		tooltip.classList.add(position);
		// 		return tooltip;

		return $('<div></div>').addClass('tooltip')
			.addClass(settings.position)
			.text(parent.data('message'))
			.on('mouseover', show)
			.on('mouseout', hide);
	};


	$.fn.tooltip = function (options) {
		//  $.extend  - объединить 2 массива, к settings добавить options
		settings = $.extend(settings, options);

		return this.each(function () {
			$(this).css({'position': 'relative'}).append(createTooltip($(this)));
		});


	}

})(jQuery);


// $('.tooltip').tooltip({
// 	property: true,
// 	position: 'bottom',
// });


/*
	!!!!!!!!!!!    4) Пример, Добавляем доступ к методам извне
	-------
*/


(function ($) {
	var settings = {
		position: 'top',
		duration: 1000,
	};

	// создается объект, сюда вынесена вся логика плагина.
	var methods = {

		init: function (options) {
			settings = $.extend(settings, options);
			return this.each(function () {
				$(this).css({'position': 'relative'}).append(methods.create($(this)));
			});
		},

		show: function () {
			$(this).addClass('active');
		},

		hide: function () {
			var self = $(this);
			setTimeout(function () {
				self.removeClass('active');
			}, settings.duration);
		},

		create: function (parent) {
			return $('<div></div>').addClass('tooltip')
				.addClass(settings.position)
				.text(parent.data('message'))
				.on('mouseover', methods.show)
				.on('mouseout', methods.hide);
		},
		showAlert: function () {
			console.log(111);
		}
	};

	//передаем метод
	$.fn.myPlugin2 = function (action) {
		if (methods[action]) {
			// ? запомнить
			return methods[action].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof action === 'object' || !action) {

			// так как в method - this - это window
			//мы передаем текущий this при помощи apply в ф-ию init
			//!!!!!!   apply - примени к ф-ии  с текущим this
			return methods.init.apply(this, arguments);
		} else {
			console.info('Action ' + action + ' not found');
		}
	}


})(jQuery);

$('.tooltip').myPlugin2();

//Теперь можно извне запустить ф-ию show() для элемента
// $('.tooltip').eq(0).myPlugin2('showAlert');

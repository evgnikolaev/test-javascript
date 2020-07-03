/*
	Пример. Слайдер
*/

function Slider(settings) {
	var slider = document.getElementById(settings.sliderId);
	var sliderContent = slider.getElementsByClassName('slider-content')[0];
	var sliderItems = slider.getElementsByClassName('slider-item');
	var sliderWidth = parseFloat(getComputedStyle(sliderContent).width);
	var singleSlideWidth = 0;
	var sliderButtons = slider.getElementsByClassName('slider-button');
	var self = this;

	var showSlides = function (a) {
		for (var i = 0; i < sliderItems.length; i++) {
			if (sliderItems[i].style.left !== '') {
				var current = parseFloat(sliderItems[i].style.left);
				sliderItems[i].style.left = (current + (singleSlideWidth) * a) + 'px';
			} else {
				sliderItems[i].style.width = singleSlideWidth + 'px';
				sliderItems[i].style.left = (singleSlideWidth * i) + 'px';
			}
		}
	};

	this.move_left = function () {
		if (parseFloat(sliderItems[sliderItems.length - 1].style.left) >= sliderWidth) {
			showSlides(-1);
		} else {
			console.log('error left prev');
		}
	};

	this.move_right = function () {
		if (parseFloat(sliderItems[0].style.left) < 0) {
			showSlides(1);
		} else {
			console.log('error right next');
		}
	};

	var init = function () {
		if (!settings.sliderToShow || isNaN(+settings.sliderToShow)) {
			settings.sliderToShow = 1;
		}
		singleSlideWidth = sliderWidth / settings.sliderToShow;

		showSlides(1);

		for (var i = 0; i < sliderButtons.length; i++) {
			sliderButtons[i].addEventListener('click', function () {
				self['move_' + this.dataset.action]();
			});
		}
	};

	init();
}





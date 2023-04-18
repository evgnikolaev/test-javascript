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
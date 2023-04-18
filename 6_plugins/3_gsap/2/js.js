// https://www.youtube.com/watch?v=RdfoCQ2ujTo&list=RDCMUCZ9Wq5uBtG3zDrNx0ztXhDQ&index=3&ab_channel=%D0%94%D0%B0%D0%B2%D0%B0%D0%B9%D0%9F%D0%BE%D0%BF%D1%80%D0%BE%D0%B1%D1%83%D0%B5%D0%BC%3AJavaScript

gsap.registerPlugin(ScrollTrigger);


const t1 = gsap.timeline();

t1
	.fromTo('.hero__subtitle', {
			x: -100,
			opacity: 0,
		}, {
			x: 0,
			opacity: 1,
			duration: 2
		},
		1 //время от начала всего timeline
	)

	.fromTo('.hero__title', {
			y: 50,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 1
		},
		0.4
	)

	.fromTo('.hero__text', {
			y: 50,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 1
		},
		0.6
	)

	.fromTo('.hero__btn', {
			y: 50,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 1
		},
		1.5
	)

	.fromTo('.logo', {
			y: -50,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 1
		},
		2
	)

	.fromTo('.menu li', {
			y: -50,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 1,
			stagger: 0.15 // шаги между li
		},
		2
	)

	.fromTo('.start', {
			scale: 0,
		}, {
			scale: 1,
			duration: 1,
			stagger: 0.3 // шаги между li
		},
		2
	);


//scrollTrigger
gsap.to('.hero', {
	scrollTrigger: {
		trigger: '.header',  //скролл отслеживаем только на .header
		// markers: true,
		//start:"center top"  //center (.header)  - top (viewport)
		start: "top top",       //top (.header)  - top (viewport)
		scrub: true
	},
	yPercent: 100,
	xPercent: -80,
	scale: 0.5,
	opacity: 0
});


gsap.to('.hero__bg', {
	scrollTrigger: {
		trigger: '.header',  //скролл отслеживаем только на .header
		// markers: true,
		start: "top top",
		scrub: true
	},
	scale: 1.2,
});


gsap.to('.hero__img', {
	scrollTrigger: {
		trigger: '.header',
		start: "top top",
		scrub: true,
		// markers: true
	},
	scale: 2,
});


//Stars
gsap.to('[data-speed]', {
	y: (i, el) => {
		return -(1 - parseFloat(el.getAttribute('data-speed'))) * ScrollTrigger.maxScroll(window);
	},
	scrollTrigger: {
		scrub: 0
	}
});


gsap.from('.regions__img', {
	scrollTrigger: {
		trigger: '.section__regions',
		start: "-30% center",
		end: "+=300px", //Анимация будет длиться на протяжении 300px
		// markers: true,
		scrub: 1
	},
	scale: 0,
	transformOrigin: 'left center',
	stagger: 1
});


gsap.from('.info__item--left', {
	scrollTrigger: {
		trigger: '.section__info',
		start: "top center",
		// markers: true,
		scrub: 1
	},
	yPercent: 30,
});


const items = gsap.utils.toArray('.featured__item');
gsap.to(items, {
	scrollTrigger: {
		trigger: '.section__featured',
		start: "-30% bottom",
		markers: true,
		scrub: 1
	},
	xPercent: -100 * (items.length - 1),
});


































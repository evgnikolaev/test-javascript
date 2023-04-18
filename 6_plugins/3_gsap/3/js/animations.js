// https://www.youtube.com/watch?v=otbdCCtvTfU&list=RDCMUCZ9Wq5uBtG3zDrNx0ztXhDQ&index=9&ab_channel=%D0%94%D0%B0%D0%B2%D0%B0%D0%B9%D0%9F%D0%BE%D0%BF%D1%80%D0%BE%D0%B1%D1%83%D0%B5%D0%BC%3AJavaScript

gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline();

tlLoader
	.set('.loader__item', {
		yPercent: -100
	})
	.set('.loader__title', {
		opacity: 0
	})
	.to('.loader__item', {
		yPercent: 0,
		duration: 0.5,
		stagger: 0.25
	})
	.to('.loader__item', {
		yPercent: 100,
		duration: 0.5,
		stagger: 0.25
	})
	.set('.loader__item', {
		yPercent: -100
	})
	.to('.loader__title', {
		opacity: 1,
		duration: 1,
		scale: 1.2
	})
	.to('.loader__title', {
		opacity: 0,
		duration: 1,
		scale: 0.2
	})
	.to('.loader', {
		yPercent: -100,
		duration: 1,
	}, "-=0.2");


if (window.matchMedia('(min-width:992px)').matches) {

	//hero
	gsap.to('.section__hero', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: 'top top',
			scrub: true,

		},
		css: {
			backgroundColor: '#1089',
		}
	});

	gsap.to('.title__row-1', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: '-100 0',
			scrub: true,
		},
		yPercent: -100
	});

	gsap.to('.hero__image', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: 'top top',
			scrub: true,
		},
		scale: 1.3
	});


	//section materials
	gsap.from('.materials__title', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-300 0',
		},
		opacity: 0.5,
		y: 20
	});

	gsap.from('.products__img', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-300 0',
		},
		x: -100,
		opacity: 0,
		stagger: 0.2
	});


	//choose
	const tlChoose = gsap.timeline();
	tlChoose
		.from('.section__choose', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '0 0',
				scrub: true,
				pin: true // Секция стоит на месте, а скролл работает
			},
		})
		.from('.choose__title', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-150 0',
				scrub: true,
			},
			y: 30
		})
		.from('.choose__text', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-120 0',
				scrub: true,
			},
			y: 30
		})
		.from('.why__image', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '0 0',
				scrub: true,
			},
			css: {
				width: 0,
				height: '100%'
			}
		})
		.from('.why__item', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '0 0',
				scrub: true,
			},
			y: 50,
			stagger: 0.25,
			autoAlpha: 0, //то же, что и opacity
		})


		// examples
		.from('.examples__item', {
			scrollTrigger: {
				trigger: '.section__examples',
				start: '0 center',
				scrub: true,
				end: '+=550'
			},
			y: 50,
			stagger: 0.25,
			autoAlpha: 0, //то же, что и opacity
		})


		// testimonials
		.from('.section__testimonials', {
			scrollTrigger: {
				trigger: '.section__testimonials',
				start: '0 center',
				scrub: true,
				end: '+=550'
			},
			css: {
				backgroundColor: '#575533'
			}
		})

		// section__blog
		.from('.blog__item', {
			scrollTrigger: {
				trigger: '.section__blog',
				start: '0 center',
				scrub: true,
			},
			stagger: 0.2,
			y: 100,
			opacity:0
		})

		// section__subscribe
		.from('.subscribe__image', {
			scrollTrigger: {
				trigger: '.section__subscribe',
				start: '0 center',
				scrub: true,
				end: '+=550'
			},
			x: 150
		});
}







































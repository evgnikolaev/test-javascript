// https://www.youtube.com/watch?v=ZYqBZmU-tA0&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9


const videoObserver = new IntersectionObserver(
	([entry], observer) => {
		const video = entry.target;

		if (!entry.isIntersecting) {
			video.pause();
		} else {
			video.play();
		}

	},
	{
		threshold: [0.2, 0.8]
	});


document.querySelectorAll('video').forEach((video) => {
	videoObserver.observe(video);
});



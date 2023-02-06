// https://www.youtube.com/watch?v=JfZx2VZ_B3M&ab_channel=%D0%9C%D0%B8%D1%88%D0%B0%D0%A0%D1%83%D0%B4%D1%80%D0%B0%D1%81%D1%82%D1%8B%D1%85


options = {
	// rootMargin: '50px 0px 0px',
	// threshold: [0.5, 1] //   0-1,   1- когда 100% элемента попала в область слежения
	threshold: [0.5] //   0-1,   1- когда 100% элемента попала в область слежения
};

const callback = (entries, observer) => {
	entries.forEach((entry) => {
		console.log(entry);

		//колбек сработает и в 1-ый раз, также сроботает в обе стороны - при прокрутке и вверх и вниз
		console.log('callback work');


		const {target, isIntersecting, intersectionRatio} = entry;


		if (isIntersecting) {  // 0-1
			target.classList.add('red');
			console.log('пересекается');
		} else {
			target.classList.remove('red');
			console.log('не пересекается');
		}

		console.log(intersectionRatio); // 0-1  , странное поведение, если threshold указать 0.5 , то intersectionRatio не будет 0.5

	})
};

const observer = new IntersectionObserver(callback, options);


const target = document.querySelector("#target");
observer.observe(target);






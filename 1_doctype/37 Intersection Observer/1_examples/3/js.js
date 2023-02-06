// https://www.youtube.com/watch?v=ZYqBZmU-tA0&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.menu-item');


const sectionObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach(entry => {

			if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
				links.forEach(link => {
					link.classList.remove('active');
				});
				const activeId = entry.target.id;
				const activeLink = document.querySelector(`.menu-item[href="#${activeId}"]`);
				if (activeLink) {
					activeLink.classList.add('active');
				}
			}
		})
	},
	{
		threshold: [0.1, 0.5, 0.9]
	});


sections.forEach((s) => {
	sectionObserver.observe(s);
});



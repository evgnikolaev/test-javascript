// https://www.youtube.com/watch?v=ZYqBZmU-tA0&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

let nextPage = 2;

const infiniteObserver = new IntersectionObserver(([entry], observer) => {
	if (entry.isIntersecting) {
		observer.unobserve(entry.target);

		loadPosts(nextPage++);

	}
}, {threshold: 1});


const loadPosts = (page = 1) => {
	fetch('https://jsonplaceholder.typicode.com/posts?_limits=5&_page=' + page)
		.then(response => response.json())
		.then(posts => {
				posts.forEach(post => {
					const card = document.createElement('div');
					card.innerHTML = `<h3>${post.id} ${post.title}</h3><p>${post.title}</p>`;
					card.className = 'card';
					document.body.append(card);
				});

				const lastCard = document.querySelector('.card:last-child');
				if (lastCard) {
					infiniteObserver.observe(lastCard);
				}
			}
		)
		.catch(console.error)
};


loadPosts();



















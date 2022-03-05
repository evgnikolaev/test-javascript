// https://www.youtube.com/watch?v=p78ff9QzWzU&ab_channel=selfedu

// Событие бедет срабатывать и на дочернем элементе

function showTag(event) {
	console.log(
		event.eventPhase + ' : ' + // номер фазы события
		event.currentTarget.tagName  //currentTarget - элемент, на котором описали событие onclick
		+ ' от ' + event.target.tagName //target - от какого элемента пришло событие (куда кликнули)
	);
	event.stopPropagation();     //Остановка всплытия
	// event.stopImmediatePropagation(); //используется когда добавлено несколько событий при помощи addEventListener()
}

function showTag2(event) {
	console.log(222);
}

document.querySelector('#first').addEventListener('click', showTag);
document.querySelector('#second').addEventListener('click', showTag2);
document.querySelector('#third').addEventListener('click', showTag);

const btn = document.querySelector('#button');

btn.addEventListener('custom', function (e) {
	e.preventDefault();
	console.log(e.detail.param1);
	console.log('event', this);
});

// создаем объект события и вызываем
const dblEvent = new CustomEvent('custom', {
	bubbles: true, // для всплытия
	detail: {param1: 'value1'}, // для передачи параметров
	cancelable: true // для preventDefault (без этого флага preventDefault не сработает)
});
btn.dispatchEvent(dblEvent);

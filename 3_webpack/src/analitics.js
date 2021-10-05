import * as $ from 'jquery';// установка библиотеки npm i -S jquery
$('#pre').html('use jquery in analitics');

function createAnalitics() {
	let counter = 0;
	let destroyed = false;

	console.log('test');

	const listener = () => counter++;
	document.addEventListener('click', listener);

	return {
		destroy() {
			document.removeEventListener('click', listener);
			destroyed = true;
		},
		getClicks() {
			if (destroyed) {
				return 'Analitics is destroyed';
			}
			return counter;
		}
	}
}


window.analitics = createAnalitics();
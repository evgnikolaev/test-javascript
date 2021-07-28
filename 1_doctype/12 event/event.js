/*
	ДЕЛЕГИРОВАНИЕ СОБЫТИЯ
	( Когда группы с событиями )

	!!!  Событие ставим на родителя.  !!!
	!!!  И через event.target будет доступен элемент на котором произошло событие  !!!

*/


/*
 	Пример 1
 */
var activeEl;

function changeBg(event) {
	var target = event.target;
	if (target.tagName === 'TD') {
		if (activeEl !== undefined) {
			activeEl.style.backgroundColor = '';
		}
		activeEl = target;
		target.style.backgroundColor = 'red';
	}
}

var table = document.querySelector('table');
table.addEventListener('click', changeBg, false);


/*
	Пример 2
 */

function getDataFromInput(id) {
	return +document.getElementById(id).value;
}

function checkNum(num) {
	return !isNaN(num);
}

function showError() {
	document.getElementById('result').innerHTML = 'error';
}

function showResult(result) {
	document.getElementById('result').innerHTML = result;
}

function calculate(e) {
	var a = getDataFromInput('a');
	var b = getDataFromInput('b');
	if (checkNum(a) && checkNum(b)) {
		var result;
		switch (e.target.dataset.action) {
			case '+':
				result = a + b;
				break;
			case '-':
				result = a - b;
				break;
			case '*':
				result = a * b;
				break;
			case '/':
				result = a / b;
				break;
		}
		showResult(result);
	} else {
		showError()
	}
}


var actions = document.querySelector('.actions');
actions.addEventListener('click', calculate, false);


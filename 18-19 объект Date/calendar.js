/*
			практика КАЛЕНДАРЬ
*/


var nowDate = new Date();
var today = nowDate.getDate();
var currentMonth = nowDate.getMonth();
var currentYear = nowDate.getFullYear();

var temp = new Date(currentYear, currentMonth + 1, 0); //последний день в меяце
var lastDay = temp.getDate();

var table = document.getElementById('table');
var caption = document.getElementById('caption');
caption.innerHTML = 'Today ' + nowDate.toLocaleDateString('ru');

function createTable() {
	var d = new Date(currentYear, currentMonth, 1); //первый день в месяце

	var t = d.getDay() - 1;
	if (t < 0) {
		t = 6;
	}

	var a = 0; //линия недели
	var next;
	while (d.getMonth() === currentMonth) {
		var tr = document.createElement('tr');
		var i = 0;
		while (i < 7) {
			var td = document.createElement('td');

			if (a === 0) {
				//на первой линии проверяем пустышки
				if (i < t) {
					td.innerHTML = '';
				} else {
					td.innerHTML = d.getDate();
					d.setDate(d.getDate() + 1);
				}
			} else {
				if (next > currentMonth) {
					break;
				}
				td.innerHTML = d.getDate();
				d.setDate(d.getDate() + 1);
				next = d.getMonth();
			}

			tr.appendChild(td);
			i++;
		}
		table.appendChild(tr);
		a++;
	}
}

createTable();
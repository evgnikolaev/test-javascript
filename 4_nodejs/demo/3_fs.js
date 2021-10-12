/*
File System

Есть:
	fs.mkdir() - синхронные ф-ии
	fs.mkdirSynch() - ассинхронные ф-ии (с префиксом)
Лучше использовать асинхронные, т.к. они не блокируют поток


Также в асинхронные в колбек 1-м параметром попадает ошибка, которую можем отработать
	fs.mkdir(path.join(__dirname, 'mkdir'), (err) => {
		if (err) {
			throw err;
		}
		console.log('Папка создана');
	});
*/


const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, 'mkdir', 'test.txt');

// Создать папку (Если папка есть, выдаст ошибку)
fs.mkdir(path.join(__dirname, 'mkdir'), (err) => {
	if (err) {
		throw err;
	}
	console.log('Папка создана');
});


//Запись файла (перетирает)
fs.writeFile(filepath, 'Hello nodeJS', err => {
	if (err) {
		throw err;
	}
	console.log('Файл создан');
});


//Добавление контент в файл
fs.appendFile(filepath, 'Hello nodeJS2', err => {
	if (err) {
		throw err;
	}
	console.log('Добавлен контент в файл');
});


//Чтение файла
fs.readFile(filepath, (err, content) => {
	if (err) {
		throw err;
	}
	console.log(content); //чтение происходит в буфер, поэтому используем контсрукцию ниже
	const data = Buffer.from(content);
	console.log('Контент: ', data.toString());
});


//Чтение файла, пример с кодировкой
fs.readFile(filepath, 'utf-8', (err, content) => {
	if (err) {
		throw err;
	}
	console.log(content);
});


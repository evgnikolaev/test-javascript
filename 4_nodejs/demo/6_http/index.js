/*
Создание своих web-серверов
nodemon - пакет, который видит изменения в файлах и перезапускает сервер.
Мы можем вызвать запуск через npm run dev (запуск скрипта через package.json)
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

/*  Создаем сервер
req - инфа, к-ую клиент отправляет на сервер
res - ответ сервера*/
const server = http.createServer((req, res) => {

	
		//Считываем url
		if (req.url === '/') {
			fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
				if (err) {
					throw err;
				}

				//Отправляем заголовки
				res.writeHead(200, {
					'Content-Type': 'text/html'
				});

				//завершить ответ сервера, передаем строку res.end('<h1>Hello nodeJS!<h1>');
				res.end(data);
			});
		}


		// .... Аналогично здесь можем описать когда будут окрываться другие url


		//так как могут подключаться другие типы файлов, ставим проверку
		if (req.url === '/style.css') {
			fs.readFile(path.join(__dirname, 'public', 'style.css'), (err, data) => {
				if (err) {
					throw err;
				}
				res.writeHead(200, {'Content-Type': 'text/css'});
				res.end(data);
			});
		}
	}
);


//Стартуем сервер
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`Server has been started on ${PORT}...`);
});


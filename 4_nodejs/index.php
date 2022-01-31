<? /*

https://www.youtube.com/watch?v=3aGSqasVPsI


node            - попадаем в консоль-среду node, т.е мы можем писать js-код и терминал будет понимать
node index.js   - запуск js файла (можно без расширения node index)
npm (node package manager), служит для установки пакетов


npm init  - создает package.json, в котором будем зранить список зависимостей приложения
npm i chalk@4.1.2 - устанавливаем пакет chalk
npm i nodemon -D - устанавливаем пакет nodemon

package.json:
	dependencies    - для прода
	devDependencies - для разработки


npm - модульная система, и каждый файл - это модуль.
Под капотом он как бы оборачивает каждый файл ф-ией
    (function (exports, require, module, __dirname, __filename) {...});
	Поэтому на доступны ф-ии:
		const chalk = require('chalk');
		module.exports = text;

	Модули бывают:
	- Встроенные  (Например: path, fs(file system), os(operation system), events (Составляет ядро node), http (создание своих web-серверов))
		https://nodejs.org/dist/latest-v17.x/docs/api/synopsis.html
	- Можно скачивать
	- Можно писать свои
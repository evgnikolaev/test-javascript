// (function (exports, require, module, __dirname, __filename) {
//    ...
// });


const chalk = require('chalk');
const text = require('./data'); // подключаем свой модуль

console.log(chalk.blue('Hello NodeJS'));
console.log(chalk.blue(text));
console.log(__dirname);
console.log(__filename);

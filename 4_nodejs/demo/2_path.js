const path = require('path');

console.log('Название файла: ', path.basename(__filename)); //Название файла: 2_path.js

console.log('Название директории: ', path.dirname(__filename)); //Название директории:  C:\Users\e.nikolaev\PhpstormProjects\test-javascript\4_nodejs\demo

console.log('Расширение файла: ', path.extname(__filename)); //Расширение файла:  .js

console.log('Parse: ', path.parse(__filename));
/*
Parse:  {
  root: 'C:\\',
  dir: 'C:\\Users\\e.nikolaev\\PhpstormProjects\\test-javascript\\4_nodejs\\demo',
  base: '2_path.js',
  ext: '.js',
  name: '2_path'
}
*/

console.log(path.join(__dirname, 'server', 'index.html')); // Выведет полученную строку C:\Users\e.nikolaev\PhpstormProjects\test-javascript\4_nodejs\demo\server\index.html



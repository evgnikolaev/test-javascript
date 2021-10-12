/*
Operation System
*/

const os = require('os');

console.log('Операционная система: ', os.platform()); //Операционная система: win32

console.log('Архитектура процессора: ', os.arch()); //Архитектура процессора: x64

console.log('Инфа по процессорам: ', os.cpus());
/*
 [{
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: {
      user: 8856046,
      nice: 0,
      sys: 2768281,
      idle: 121339437,
      irq: 82015
    }
  }]
*/

console.log('Сводбодная память: ', os.freemem());//Сводбодная память: 9473323008

console.log('Всего памяти: ', os.totalmem());//Всего памяти: 17069989888

console.log('Домашняя директория: ', os.homedir());//Домашняя директория: C:\Users\e.nikolaev

console.log('Сколько времени включена система (сек): ', os.uptime());//Сколько времени включена система:  503140


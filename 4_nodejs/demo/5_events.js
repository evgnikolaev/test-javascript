/*
Составляет ядро node
*/

const EventEmitter = require('events');//Возвращается класс

const emiter = new EventEmitter();

//Мы можем ставить свою прослушку, свое событие
emiter.on('anything', (data) => {
	console.log('ON anything ', data);
});

//Здесь это событие вызвать
emiter.emit('anything', {a: 1});


//Опишем обертку под это
class Dispatcher extends EventEmitter {
	subscribe(eventName, callback) {
		console.log('[Subscribe...]');
		this.on(eventName, callback)
	}

	dispatch(eventName, data) {
		console.log('[Dispatching...]]');
		this.emit(eventName, data)
	}
}

const dis = new Dispatcher();
dis.subscribe('aa', (data) => {
	console.log('ON aa ', data);
});
dis.dispatch('aa', {a: 1});

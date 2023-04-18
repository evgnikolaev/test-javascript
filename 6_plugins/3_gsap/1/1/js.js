

gsap.to('.selector',{
	x:100,
	translateY:100,
	background:'gray',
	duration:1, //длительность
	delay:1,  //задержка
	repeat:2,  //кол-во повторов
	//repeatDelay:1, // задержка (вконце) между повторами
	stagger:1, // задержка старта для каждого селектора, когда их несколько
	ease:"power2.inOut", //анимация  https://greensock.com/docs/v3/Eases
	// paused:true, //на паузу
	onCompleted:function () {
		console.log('Готово');
	}
});
const myObj = {
	subscriber: 6000,
	sponsor: 3,
	delta: .5,
	myColor: "#12356"
};

gsap.to(myObj, {
	subscriber: 100000,
	sponsor: 8,
	delta: .8,
	delta2: .8,
	myColor: "#987654",

	duration: 10,
	delay: 1,
	onUpdate: () => {
		document.querySelector('pre').innerHTML = JSON.stringify({
			subscriber: myObj.subscriber,
			sponsor: myObj.sponsor,
			delta: myObj.delta,
			myColor: myObj.myColor,
		},null,' ');
	}
});


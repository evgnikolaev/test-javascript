gsap.registerPlugin(TextPlugin);
// gsap.to('.selector', {
// 	duration: 1,
// 	text: {
// 		value: "Your new text", //новый текст
// 		oldClass: "class1",
// 		newClass: "class2", // новый класс, когда измнения произойдут
// 		delimiter: "", //анимация побуквенно, если ' ' - по словам
// 		type:'diff' // алогритм замены, можно не указывать
// 	}
// });


gsap.to('.text', {
	duration: 1,
	text: {
		value: "HTML5",
		newClass: "class1",
		delimiter: "",
	}
});

gsap.to('.text', {
	duration: 2,
	delay:2,
	text: {
		value: "JavaScript",
		newClass: "class2",
		delimiter: "",
	}
});

gsap.to('.text', {
	duration: 2,
	delay:4,
	text: {
		value: "GSAP",
		newClass: "class3",
		delimiter: "",
	}
});
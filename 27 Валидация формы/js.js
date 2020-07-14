/*
	Валидация формы

	для работы с формой есть 	documents.form
	documents.form.elements - получим все input, textarea, select у формы (чтобы не испольщовать getElements..)

*/

var forms = document.getElementsByTagName('form');
for (var i = 0; i < forms.length; i++) {
	forms[i].addEventListener('submit', validator);
}

// Опишем объект с функциями правил!!!
var rules = {
	required: function (el) {
		if (el.value !== '') {
			return true;
		}
		return false;
	},
	email: function (el) {
		var reg = /^\w{1,}@\w{2,}\.\w{1,}$/;
		return reg.test(el.value);
	},
};


function validator(e) {
	e.preventDefault();
	var errors = [];
	e.preventDefault();
	var inputs = this.elements;
	for (var i = 0; i < inputs.length; i++) {
		var rulesList = inputs[i].dataset.rule;
		if (!rulesList) {
			continue;
		}
		rulesList = rulesList.split(' ');
		for (var j = 0; j < rulesList.length; j++) {
			//!!Здесь вызываю в цикле соответствующее правило!!
			if (rulesList[j] in rules) {
				if (!rules[rulesList[j]](inputs[i])) {
					errors.push({
						name: inputs[i].name,
						error: rulesList[j]
					});
				}
			}
		}
	}
	if (errors.length > 0) {
		e.preventDefault();
		showErrors(errors);
	}
}


function showErrors(errors) {
	console.log(errors);
}
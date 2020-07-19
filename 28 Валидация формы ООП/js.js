/*
	Валидация формы

	для работы с формой есть 	documents.form
	documents.form.elements - получим все input, textarea, select у формы (чтобы не испольщовать getElements..)

*/
var validatorMethods = {
	notEmpty: function (el) {
		return '' !== el.value;
	},

	pattern: function (el, pattern) {
		return pattern.test(el.value)
	},

};


function Validator(settings) {
	var formEl = document.getElementById(settings.id);
	var formFields = formEl.elements;
	var errors = [];
	var rulesPattern = {
		email: /^\w{1,}@\w{1,}\.\w{2,}$/,
	};

	var isValid = function (el) {

		//очищаем ошибку на данном input
		var tpmErr = [];
		for (var i = 0; i < errors.length; i++) {
			if (errors[i].el !== el) {
				tpmErr.push({
					el: errors[i].el,
					err: errors[i].param2
				});
			}
		}
		errors = tpmErr;

		var methods = settings.methods[el.getAttribute('id')];
		var param2;
		if (methods !== undefined) {
			for (var i = 0; i < methods.length; i++) {
				if (methods[i][0] in validatorMethods) {
					//   !! Здесь вызываю в цикле соответствующее правило!!
					//    validatorMethods[methods[i][0]]     (   el,   param2    )
					param2 = rulesPattern[methods[i][1]];
					if (!validatorMethods[methods[i][0]](el, param2)) {
						errors.push({
							el: el,
							err: param2
						});
					}
				}
			}

			//если ошибка, валидация не прошла
			for (var i = 0; i < errors.length; i++) {
				if (errors[i].el === el) {
					return false;
				}
			}
		}
		return true;
	};


	var checkIt = function () {
		if (isValid(this)) {
			console.log('valid');
			console.log(errors);
			showSuccess(this);
		} else {
			console.log('no valid');
			console.log(errors);
			showError(this);
		}
	};


	//init
	for (var i = 0; i < formFields.length; i++) {
		if (formFields[i].tagName === 'BUTTON') {
			continue;
		}
		formFields[i].addEventListener('change', checkIt);
	}


	var showError = function (el) {
		el.parentNode.classList.remove('success');
		el.parentNode.classList.add('error');
		el.nextElementSibling.innerHTML = el.dataset.error;
	};

	var showSuccess = function (el) {
		el.parentNode.classList.remove('error');
		el.parentNode.classList.add('success');
		el.nextElementSibling.innerHTML = '';
	};


	/*
			Добавил сам дополнительно
	 */
	formEl.addEventListener('submit', function (e) {
		console.log(111);
		e.preventDefault();
		/*
				!!! Конструкцией триггерим событие на каждый input
				  var event = new Event("change");
				 formFields111[i].dispatchEvent(event);
		 */
		var ev = new Event("change");
		for (var i = 0; i < formFields.length; i++) {
			if (formFields[i].tagName === 'BUTTON') {
				continue;
			}
			formFields[i].dispatchEvent(ev);
		}
	})


}
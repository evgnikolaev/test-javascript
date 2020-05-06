var academy = {
	groups: [
		{
			number: 12,
			teacher: 'alex'
		},
		{
			number: 22,
			teacher: 'petia'
		}
	],
	students: [
		{
			number: 11,
			phone: '111-11'
		}
	],
	showGroups: function () {
		for (var i = 0; i < academy.groups.length; i++) {
			console.log(academy.groups[i].teacher);
		}
	}
};

academy.showGroups();

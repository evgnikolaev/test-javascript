/*

Рефлекты - по сути это некое мета программирование в js.
Не то что оно принесло что то новое, при этом оно существенно структурировало ф-ии, работающие с метаданными.

Создаем объект с помощъю Рефлект (а не через ключевое слово new):
Reflect.construct(
	Student, - таргет ф-ии
	 ['Igor'], - параметры  которые попадут в конструктор
	ProtoStudent - передадим прототип, то есть будет инстансом от ProtoStudent!
);

*/
class ProtoStudent {
	univercity1 = 'Oxford';
	greet() {
		console.log(`Hi my name is ${this.name} from Protostudent`);
	}
}


class Student {
	univercity = 'MGY';

	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log(`Hi my name is ${this.name}`);
	}
}

// const student  = new Student('student');  //создание объекта при помощи neq

const student = Reflect.construct(Student, ['Igor'], ProtoStudent); //здесь же создаем объект при помощи Reflect
// console.log(student);
// console.log(student.__proto__ === Student.prototype);		 //false
// console.log(student.__proto__ === ProtoStudent.prototype);	//true . При указании 3-его параметра, будет инстанс от этого прототипа

/*
Методы в рефлекте
	Reflect.apply() -	позволяет вызывать с каким-либо контекстом, и с нужными параметрами
	Reflect.apply(
		student.greet, - метод
		{name:'Tester'}, - в контексте этого объекта
		[] - набор аргументов для метода
	)

	Reflect.ownKeys(student) - какие собственные ключи есть у объекта

	Reflect.preventExtensions(student) - заблокируем модификации объекта (не позволит добавить новые ключи)
	Reflect.isExtensible(student) - расширяемый ли объект? (заблокирован ли объект)
*/

Reflect.apply(student.greet,{name:'Tester'},[]);//Hi my name is Tester from Protostudent
console.log(Reflect.ownKeys(student));//['univercity', 'name']

Reflect.preventExtensions(student);// не позволит добавить новые ключи
student.age = 25;
console.log(student);//ProtoStudent {univercity: 'MGY', name: 'Igor'}

console.log(Reflect.isExtensible(student)); //false - не расширяем, заблокирован

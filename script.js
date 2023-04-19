// complete this js code
function Person(name, age) {
       this._name = name;
	   this._age = age;
}
Person.prototype.greet = function(){
	console.log(`Hello, my name is ${this._name}, I am ${this._age} years old.`);
}

function Employee(jobTitle) {
	this._jobTitle = jobTitle;
}

Employee.prototype.jobGreet = function(){
		console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}.`);
					
	}
Employee.prototype.__proto__ = Person.prototype;

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

// complete this js code
function Person(name, age) {
       this._name = name;
	   this._age = age;
}
Person.prototype.greet = function(){
	console.log("Hello, my name is "+this._name+," I am "+this._age+" years old.");
}
const person = new Person();
function Employee(name, age, jobTitle) {
	this._name = name;
	this._age = age;
	this._jobTitle = jobTitle;
}
const employee = new Employee();
Employee.prototype.jobGreet = function(){
		console.log("Hello, my name is "+this._name+," I am"+this._age+" years old, and my job title is "+this._jobTitle+".);
					
	}
Person.prototype.__proto__ = Employee.prototype;

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

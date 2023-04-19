// complete this js code
function Person(name, age) {
       this._name = name;
	   this._age = age;
	this.greet = function(){
		console.log("Hello, my name is "+this._name+," I am "+this._age+" years old.");
	}
}

function Employee(name, age, jobTitle) {
	this._jobTitle = jobTitle;
	super(name, age)

	this.jobGreet = function(){
		console.log("Hello, my name is "+this._name+," I am"+this._age+" years old, and my job title is "+this._jobTitle+".);
					
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

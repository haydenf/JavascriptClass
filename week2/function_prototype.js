function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// instance of function

var person1 = new Person("Hayden", "Fuller", 23)
console.log("my name is", person1.firstName, person1.lastName, "and my age is", person1.age)


// creation of person

// to add custom functions to a function object, use prototype keyword

Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
console.log(person1.fullName());
// created a function for person that prints full name with fullName

var person2 = new Person ("Alex", "Holder", 23);
console.log(person2.fullName(), person2.age);


// can assign variables and primitive data with prototype
Person.prototype.height = "6 ft";
console.log(person2.fullName(), person2.age, person2.height);
console.log(person1.fullName(), person1.height);


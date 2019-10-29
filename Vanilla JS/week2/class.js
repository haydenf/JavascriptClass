// es6 syntax for swapping over to js, makes it easier to understand how to make classes
class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
person1 = new Person("jo", "dunham", 22);
// instance of person
console.log(person1.firstName);
console.log(person1.fullName());

Person.prototype.speak = function () {
    return ` hey how are you ${this.fullName()}`
}
// prototype still works even with using class syntax
console.log(person1.speak())
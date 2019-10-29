var person = {
    firstName: "alex",
    lastName: "holder",
    fullName: function () {
        console.log(`hello ${this.firstName} ${this.lastName}`)
    }
}

console.log(person.firstName);
console.log(person.lastName);
person.fullName();
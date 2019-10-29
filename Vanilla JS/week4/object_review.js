var person = {
    name: "Hayden",
    age: 23,
    hobbies: ["music", "Coding"],
    address: {
        street: "118 Walker St",
        city: "Sydney",
        postCode: 2566
    },
    greet: function (){
        console.log(`hello ${this.name}`)
    }
}

person.name = "Alex";
person.greet
person.hobbies[2] = "cars"
console.log(person.hobbies)
function person() {
    console.log("normal function");

}

// arrow function 
() => {
    console.log("arrow function");
}

// Functions are objects in js, function can be passed to another function, can be part of an array, part of an objects and can b e assigned to a variable. functions can also be invoked.

/////////////passing function to function
// function person(function1){
//     console.log("pperson function");
// }
// function function1(){
//     console.log("another function");
// }
// person(function1)
//////creating a function without defining it, created anon function
// person (function (){
//     console.log("another function");
// })
///////// arrow function annon
// person (() => {
//     console.log("another function");
// })


let array = ["name", "name1", "name2"];
function func1() {
    console.log("func 1")
}

function func2() {
    console.log("func 2")
}

function func3() {
    console.log("func 3")
}
let arrayOfFunctions = [func1, func2, func3]
arrayOfFunctions[0]();
// can pass functions like an array, alwaqys need to invoke with () others it'll just show the object and not pass the function

// function within an object and invoking it.
// dont use fat arrow within functions cause can't use this with arrow.
var person = {
    name: "Hayden",
    last: "Fuller",
    fullName: function() {
        console.log(this.name + this.last)
    }
}
person.fullName();


let name = "name"
let greet =  function() {
    console.log("hello");
}
greet();
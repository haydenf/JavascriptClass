// JE
// hoists function statements
// function greet(){
//     console.log('welcome')
// }
//greet();

// function expressions or anonymous functions
// does not execute if you invoke before definition

// let anonymousFunc = function(){
//     console.log("i am anon");
// }
// anonymousFunc();

// anon functions can not be hoisted
// anon functions are created by assigning a function to a variable and not giving the function a name, example below. Can only use after creating it not before.
/*
var age = prompt("Enter your age");

if (age > 18){
    var welcome = function (){
        console.log("nice you're an adult");
    }
} else {
    var welcome = function () {
        console.log(" you're too young buddy");
    }
}
welcome();
*/


            ////////////////////// Immediately invoked function expressions ////////////////////////////////
// function welcome(){
//     console.log("hello world");
// }
// welcome();
// standard way to invoke function

(function(){
    console.log("hello world");
}());
// this is the IIFE you encapsulate the funciton within () brackets so (function(){......}());
// you;'re creating an invoking 


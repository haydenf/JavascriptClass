/* Functions in javscript work like objects in ruby, they are first class citizens basically.

*/

function adder(x, y) {
sum = x + y;
return sum;
}
var total = adder(100, 28)
console.log(total);

function myArgs(){
    console.log(arguments);
};
myArgs(1,2,3,4)
// this creates an object. 
// arguments will pass everything if you didnt pass any arguments into your function. 

function myOtherArgs(x, ...otherArgs){
    console.log(x, otherArgs);
}
myOtherArgs("bob", "ross", "nice", "hello");

// x will be used as usual and all the other arguments will be put into an array



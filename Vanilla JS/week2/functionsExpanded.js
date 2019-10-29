
function myFunc1() {
    var name = "Alex";
    console.log(name);
}
function myFunc2() {
    console.log(name);
}

myFunc1();
myFunc2();
// even though var is global, it is inside the scope of func1 and func2 can't call on name variable //


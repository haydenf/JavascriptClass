// // throw "something went wrong";
// // throw 1;
// // throw {msg: "something went wrong"};
try {
    console.log("before throw")
    throw "something went wrong";
    console.log("after throw"); //masked cause its after throw
} catch(error) {
    console.log(error);
}

console.log("continues to execute code")

// // try and catch will try a code and catch the error but still executes the code instead of breaking the code


try {
    function sumOfTwoNumber(num1,num2){
        if(isNaN(num1) || isNaN(num2)){
            throw "please input number only";
        } else{
            return num1 + num2
        }
    }
} catch(error) {
    console.log(error)
}
sumOfTwoNumber(1, "error");


try {
    console.log("before throw")
    throw "something went wrong";
    console.log("after throw"); //masked cause its after throw
} catch(error) {
    console.log(error);
}

console.log("continues to execute code")


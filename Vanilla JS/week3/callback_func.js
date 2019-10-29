function adder(x, y, callback){
    let answer = x + y;
    if(callback) {
        callback(answer)
    } else {
        return answer
    }
}
//saySomething will be callback
function saySomething(input){
    console.log(`answer is from callback ${input}`)

}
adder(20,20, saySomething);
console.log(adder(10,5));

// callback -> function that doesn't immediately run
//asynchronous vs sychronous
// non block vs blocking code

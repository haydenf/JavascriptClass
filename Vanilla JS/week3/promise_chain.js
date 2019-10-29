function adder(x, y){
    let answer = x + y;
    return new Promise((resolve, reject) => {
        if (isNaN(answer)){
            reject("please input number");  
        }
        resolve(answer)
    });
}
// promise chaining
adder(6, 7)
    .then(answer1 => {
        return adder(answer1, 5)})
    .then(answer2 =>{
        return adder(answer2, 98)})
    .then(answer3 => { 
        return adder(answer3, 42)})
    .then(answer4 => console.log(answer4))
    .catch(err => console.log(err));
     
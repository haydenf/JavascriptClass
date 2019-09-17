
const addTwoNumber = new Promise((resolve, reject) => {
    if(isNaN(num1) || isNaN(num2)){
        reject 'enter number'
    } else{
        resolve (num1 + num2)
    }
})
let answer1 = await adder(10, 20);
let answer2 = await adder(answer1, 30)
}
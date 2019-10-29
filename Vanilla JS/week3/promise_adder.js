function adder(x, y){
    let answer = x + y;
    return new Promise((resolve, reject) => {
        if (isNaN(answer)){
            reject("please input number");  
        }
        resolve(answer)
    });
}

adder(10, 20)
    .then((answer) => {
        console.log(answer)
    })
    .catch((err) =>{
        console.log(err)
    });

    // alternative writing
    adder(4,5)
    .then (answer => console.log(answer))
    .catch (err => console.log(err));
    
    console.log("hello")
    // promises go into the callback queue

    // promise hell example
    adder(4, 5)
    .then(answer1 => {
        adder(answer1, 6)
            .then(answer2 => {
                adder(answer2, 7)
                    .then(answer3 =>  console.log(answer3))
                    .catch(err =>  console.log(err))
            })
            .catch(err =>  console.log(err))
    })
    .catch(err => console.log(err)); 

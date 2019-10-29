console.log(1);

// set timeout is a funciton that puts function to a callback queue
setTimeout(() => {
    console.log(2);
}, 0);
console.log(3)
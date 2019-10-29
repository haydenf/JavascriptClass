// promises are used for ayschronous tasks and error handling (resolve/reject)
// async is syntatic sugar for promises
//a sychronous function can be made asynchronous by adding async keyword infront of it
// always returns a promise.
async function greet(){
    return "hello";
}
// this returns a promise: Promise {'hello'}
console.log(greet());
// must use .then and .catch when using async 
greet()
    .then (m => console.log(m))
    .catch(err => console.log(err));

async function greeterr(){
    throw "something went wrong";
}  
// showing that you can use throw to throw an error if needed
greetErr()
    .then (m => console.log(m))
    .catch(err => console.log(err));

///// what is await?
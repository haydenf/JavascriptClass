// using promisr all you can send all the requests at one time. 
function user1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("David")
        }, 2000);
    })
}

function user2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kats")
        }, 3000);
    })
} 
function user3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Shun")
        }, 5000);
    })
} 

var userList = [user1(), user2(), user3()];

Promise.all(userList)
    .then(userNames => console.log(userNames))
    .catch(err => console.log(err));

    // Promise all waits for all the functioins to resolve before doing what its asked
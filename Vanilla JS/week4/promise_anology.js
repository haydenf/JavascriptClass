console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseMyFriendHasTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("ticket"), 5000);
        })
}
// const getPopcorn = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Popcorn');
//     })
// }


// chaining promises
const getPopcorn = promiseMyFriendHasTicket()
    .then(ticket => {
    console.log(`friend has ${ticket}`);
    console.log('lets go in')
    console.log('I want popcorn')
    return new Promise((resolve, reject) => {
        resolve(`${ticket} and popcorn`)
    })
})



const addButter = getPopcorn.then(items => {
    console.log(`i have the ${items}`)
    console.log('Lets finally go in');
    return new Promise((resolve,reject) => {
        resolve(`${items} butter `)
    })
});

addButter
    .then(ticket => console.log(`Person 3: shows the ${ticket}`))
    .catch(err => console.log(err));

// promiseMyFriendHasTicket()
//     .then(ticket => console.log(`Person 3: shows the ${ticket}`))
//     .catch(err => console.log(err));

console.log('person 4: shows ticket')
console.log('person 5: shows ticket')


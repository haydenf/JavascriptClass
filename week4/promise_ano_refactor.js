console.log('person1: shows ticket');
console.log('person2: shows ticket');

//es5
// async function preMovie(){
//     return'ticket'
// }
//es6
const preMovie = async () => {
    promiseMyGirlFriendIsBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() =>  resolve("ticket"), 5000);
    })

    const getPopCorn = new Promise((resolve, reject) => {
        resolve("popcorn");
    })
  
    const addButter = new Promise((resolve, reject) => {
        resolve ("butter");
    })

    let ticket = await promiseMyGirlFriendIsBringingTicks;

    console.log(`girl friend:  I got ${ticket}`);
    console.log("me: lets go in ");
    console.log("girl friend:  I want the pop corn");

    let popCorn = await getPopCorn;

    console.log(`me: got ${ticket} and ${popCorn}`);
    console.log("girl friend: I want butter on my pop corn");

    let butter = await addButter;
    console.log("me : lets go in")

    console.log(ticket, popCorn, butter);

    return ticket;

}

preMovie()
    .then(t =>  console.log(`person3 : shows ${t}`))
    .catch(err =>  console.log(err));
console.log('person4: shows ticket');
console.log('person5: shows ticket');

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseMyFriendHasTicket = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("ticket"), 5000);
//         })
// }
// // const getPopcorn = () => {
// //     return new Promise((resolve, reject) => {
// //         resolve('Popcorn');
// //     })
// // }


// // chaining promises
// const getPopcorn = promiseMyFriendHasTicket()
//     .then(ticket => {
//     console.log(`friend has ${ticket}`);
//     console.log('lets go in')
//     console.log('I want popcorn')
//     return new Promise((resolve, reject) => {
//         resolve(`${ticket} and popcorn`)
//     })
// })



// const addButter = getPopcorn.then(items => {
//     console.log(`i have the ${items}`)
//     console.log('Lets finally go in');
//     return new Promise((resolve,reject) => {
//         resolve(`${items} butter `)
//     })
// });

// addButter
//     .then(ticket => console.log(`Person 3: shows the ${ticket}`))
//     .catch(err => console.log(err));

// // promiseMyFriendHasTicket()
// //     .then(ticket => console.log(`Person 3: shows the ${ticket}`))
// //     .catch(err => console.log(err));

// console.log('person 4: shows ticket')
// console.log('person 5: shows ticket')

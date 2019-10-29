/*
CHALLENGE 1: Quirky Clock

    You have to create a clock that - instead of telling time - tells you if the time ends on an even number.

    1.1 - Core Functionality
    Using Date, promises & setTimeout, you need to find out what the current time is and determine if it ends in an even number.
    Then, build up some suspense! Make the user wait 3 seconds before telling them if the time is even or odd.
    Use resolve for even, reject for odd.

    1.2 - Showing Suspenseful Build-up
    See challenge 5 from yesterday -- suspense while waiting/loading still means you need to show some loading progression dots or loading bar to the user!
    So, while you're making the user wait 3 seconds before telling them if the time ends in an even or odd number, show something such as:
    "Loading..."
    "Loading...."
    "Loading....."
    "Loading......"
    "The time ends in an EVEN number!"
*/
/*
1. find what time is, save it to variable
2. compare the time variable to an even number and print if its even or odd
3. 
*/
// function isEven(time) {
// 	if (time%2 == 0)
// 		console.log("Time is even");
// 	else
//     console.log("Time is odd");
// }

// isEven(Date.now())

function isEven() {
    let time = Date.now()
    return new Promise((resolve, reject) => {
        if (time%2 == 0){
            return resolve("Time is even");
        }else{
            return reject("Time is odd");
             }
        });
    }
isEven()
    .then(answer1 => {setTimeout(function(){console.log(answer1);}, 3000)
    .catch(err => console.log(err));
    

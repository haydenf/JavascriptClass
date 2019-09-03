/*
CHALLENGE 1: Function Fix-Ups
    Fix up the code provided below to make it work.
    Then, identify the 3 different function types being used here.
    They could be any of these: 
    - Regular function, 
    - Returning function, 
    - Anonymous function, 
    - IIFE or self-invoking function, 
    - Arrow function.

    
    Function 1 is a: anonymous function
    Function 1 was fixed by: 
    Function 2 is a: arrow function and also an IIFE
    Function 2 was fixed by: using = (Fat arrow) instead of -
    Function 3 is a: returning function, the function is being hoisted
    Function 3 was fixed by: adding tion to func
    */

// Function 1:
// var funky = function() {
//     console.log('I am funky');
// };
// funky();

// Function 2:
// (()=> {
//     console.log("Another freaky function type is here!")
// })();

// Function 3:
// console.log(myFunction(5));

// function myFunction(y) {
//   return y * y;
// }





/*
CHALLENGE 2: Pig Latin Converter

What is pig latin? Pig latin takes the first letter of every word, moves it to the end of the word and adding ‘ay’. 
For example, "the quick brown fox" becomes "hetay uickqay rownbay oxfay".


Write a function that translates provided text to Pig Latin.

_E.g._ pig_latin("Sydney or Melbourne or Perth are possible destinations") should return "ydneySay roay elbourneMay roay erthPay reaay ossiblepay estinationsday"

_E.g._ pig_latin("A") should return "Aay"

_E.g._ pig_latin("") should return "ay"


Regex is a string of text that allows you to create patterns that help match, locate, and manage text.
*/
// function splitSentence(string) {
//     return string.split('')
//     // splits the string into individual single character strings in an array
// }

// function latinWord(word) {
//     let characters = splitSentence(word);
//     console.log(characters)
//     return characters.slice(1).join('') + characters[0] + 'ay';
//      console.log(characters.slice(1))
//     // 
// }

// function pigLatin(sentence) {
//     return sentence.replace(/\w+/g, latinWord); // /\w+/g is regex w means word and + is 1 or more, g means globally /\ is how you open up a regex and / to close. Using regex is neccessary to make this work for sentences
    
// }
// console.log(splitSentence("Sydney or Melbourne or Perth are possible destinations"))
// console.log(latinWord("Sydney or Melbourne or Perth are possible destinations"))
// console.log(pigLatin("Sydney or Melbourne or Perth are possible destinations"));
/*
CHALLENGE 3: Loop Racer

Write a set of functions that use different types of loops to print numbers from 1 to a specific number (eg. 1000).

Your functions might look like this:
*/
// START CODE EXAMPLE
// function forLoopRacer (maxCountingNumber) {
//     var startTime = Date.now();

//     // your loop stuff goes here 
//     for (var i = 0; i < maxCountingNumber; i++){
//         console.log(i);
//     }

//     var finishTime = Date.now();

//     var functionDuration = (finishTime - startTime) / 1000; // convert from milliseconds to seconds with "/1000"
//     console.log(`The for loop function took ${functionDuration} seconds to run.`);
// }
// forLoopRacer(1000);


                             ///////////////// While loop////////////////////////////////
// function forLoopRacer (maxCountingNumber) {
//     var startTime = Date.now();
//     var i = 0;
//     while (i < maxCountingNumber){
//          console.log(i);
//          i++;
//     }

//     var finishTime = Date.now();

//     var functionDuration = (finishTime - startTime) / 1000; // convert from milliseconds to seconds with "/1000"
//     console.log(`The for loop function took ${functionDuration} seconds to run.`);
// }
// forLoopRacer(1000);



                     /////////////////////////// Do while /////////////////////////////////
// function forLoopRacer (maxCountingNumber) {
//     var startTime = Date.now();
//     var i = 0;
//     do {
//          i++;
//          console.log(i);
//     }
//     while (i < maxCountingNumber)

//     var finishTime = Date.now();

//     var functionDuration = (finishTime - startTime) / 1000; // convert from milliseconds to seconds with "/1000"
//     console.log(`The for loop function took ${functionDuration} seconds to run.`);
// }
// forLoopRacer(1000);



/*




Make sure you write functions that cover these types of loops:
    - while
    - do while
    - for in
    - for of
And yes, your functions must be able to count up to any number. They must use a parameter!


*/



/*
CHALLENGE 4: Array Iterators
Make sure you've done Challenge 3 before doing this. 
This is a bit trickier - it has more moving parts than Challenge 3.

Just like in Challenge 3, we must count from 1 up to a specified number and see how long it takes.
This time, we're going to use the "forEach" function that JavaScript provides for arrays.
So you will need to:
    - create an array of a certain size
    - fill that array with numbers from 1 up to the specified number 
    - initialize a starting time before the loop runs
    - use the "forEach" function to loop through each entry of the numbers array
    - print a number from the array to console in every iteration of the loop
    - initialize a finishing time after the loop finishes
    - calculate the duration in seconds based on the difference between starting & finishing time
You may need multiple functions to keep this solution clean, dry & easy to read. 

So, is that ".forEach" iterator faster than any of the basic loop types? 


*/
var startTime = Date.now();
var i = 0;
var arraySize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



//     var finishTime = Date.now();

//     var functionDuration = (finishTime - startTime) / 1000; // convert from milliseconds to seconds with "/1000"
//     console.log(`The for loop function took ${functionDuration} seconds to run.`);
// }
// forLoopRacer(1000);

/*
CHALLENGE 5: Array Unique Merger
Take the provided arrays (see below), merge them into a new array using a rest or spread operator.
Remove any duplicate items from the array and print the length of the array.
Use functions to keep the solution clean, dry & easy to read.

var randomNumbers = [2, 9, 17, 144, 98, 187, 610, 256, 110, 386, 3, 0, 21]
var fibonnaciNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
var moreRandomNumbers = [98, 1010, 138, 1, 233, 84, 17, 256, 1100, 9, 9, 18, 2]


*/
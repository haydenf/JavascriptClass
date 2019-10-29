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
// var startTime = Date.now();
// var i = 0;
// var arraySize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



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

/*
CHALLENGE 1: Construct a Bee

Using the provided code (see below), create a constructor appropriate for the various class functions.
Hunger should be lower if the bee has eaten lots of food. (0 = full, can't eat any more)
Same with thirst. (0 = full, can't drink any more)

*/

// class Bee {

//     getCurrentPosition () {
//         return (`The bee named ${this.name} is at coordinates X: ${this.positionX} , Y: ${this.positionY}`);
//     }

//     refillHunger () {
//         this.hungerLevel = 0;
//     }

//     refillThirst () {
//         this.thirstLevel = 0;
//     }

//     renameBee (newName) { 
//         this.name = newName;
//     }

//     moveToPosition (newX, newY){
//         this.positionX = newX;
//         this.positionY = newY;
//     }
// }

// var newBee = new Bee("Greg", 4, 4);
// console.log(newBee.getCurrentPosition());
// newBee.moveToPosition(10, 20);
// console.log(newBee.getCurrentPosition());


// /*

// CHALLENGE 1.2: Queen Bee
// Create a new QueenBee class that uses JavaScript class inheritance.
// This class will inherit from your completed Bee class, and add new functions to the QueenBee class that covers the following:
// - creates a new bee (give random values for things like name and position)
// - adds the new bee to an array of bees stored in the QueenBee class
// - print a list of all bees and their locations

// */



/*
CHALLENGE 2: Fruit Classes & Objects
Object instantiation is an incredibly powerful feature. 
If you think of fruit as a class, then an item such as an apple will only have a certain number of bites to it.

Create an object from a class named Fruit. 
Update a global variable in the Fruit class that keeps a list of all Fruit in existence - put the newly-created fruit object in that list.
When the object is instantiated from the class, set 3 properties on it (name, colour, bites). 
Also create a function in the class that when called, takes a bite of the fruit and decrements the bites property.
If there are no bites left:
    - remove the fruit object from the global Fruits list
    - log that the Fruit has been completely eaten
If the fruit's bites value is greater than 0:
    - log that the Fruit was delicious, and has ${bites} number of bites left


*/


/*
CHALLENGE 3.1: Your Own Dictionary - JS Edition

Yes, we did this back in Ruby. You must create a Dictionary class that contains:
- an array of words
- but each word should be an object that contains the word and its definition
- functions in the Dictionary class that can add words
- functions in the Dictionary class that can remove words
- functions in the Dictionary class that can update words
- functions in the Dictionary class that can show a specific word if it exists in the array 

*/


/*
CHALLENGE 3.2: Multilingual Dictionary

Modify your dictionary so that you must create a Dictionary as an object - instantiating from the Dictionary class.
You should be able to use code like "var englishDictionary = new Dictionary('eng')" to create a specific language dictionary.
Your Dictionary class should contain an array of all Dictionary objects.
Your Dictionary class should contain a function that can print a list of what dictionary objects exist & how many words are in each dictionary.
eg. "Dictionary.listAllDictionaries()" should show "eng - 44 words, jap - 56 words, fre - 24 words"

*/


/*
CHALLENGE 4.1: JS Pets

Build on the class provided below. You must add more functions that let you do the following:
- increase happiness
- decrease happiness
- increase hunger
- decrease hunger
- increase thirst
- decrease thirst
- name the pet

Your JS app must prompt the user with some options:
- Name their pet
- Play with the pet (increase happiness)
- Feed the pet (decrease hunger)
- Give the pet a drink (decrease thirst)
- Let the pet sing (increase happiness, only available if hunger & thirst are at 0)

Every time the user chooses one of those options, one of these things must happen:
- If they played with the pet, hunger & thirst goes up by 1 each
- If the pet's hunger or thirst are at 0, happiness goes up by 1
- If the pet was fed or had a drink, happiness goes down by 1
- If the pet sang, happiness goes up by 10

*/

class Pet {
    constructor(name){
        this.name = name,
        this.happiness = 50,
        this.hunger = 0,
        this.thirst = 0
    }


}

/*
CHALLENGE 4.2: Multi-pet household

Create a Cat class and a Dog class. These should inherit from Pet.
The Pet app should prompt the user to ask if they want a dog or a cat as their pet. 

The cat's happiness goes up faster when its hunger & thirst are between 0 and 5.
The dog has a special function to Walk. Walking increases hunger & thirst by 3, and increases happiness by 3.

*/


/*
CHALLENGE 5: Loop & Iterator Racer, Mini App Edition

This is very similar to challenge 3 & 4 from yesterday - if you haven't done those yet, no big deal. Start here.
If you did complete those challenges yesterday, this should be quick for you! 

Write a little app that prompts the user to ask what type of loop or iterator they want to run.
There should be a class that contains functions for racing each type of loop or array iterator.
These functions need to use loops or array iterators to print numbers from 1 to a specific number (eg. 1000).
The app should only stop running when the user chooses to exit.
You might want to present options in a list:
- 1: For loop
- 2: While Loop
- 3: Do-While Loop
- 4: For-Of Loop
- 5: Array.forEach
- 6: All at once
- 7: Exit

Your class should contain functions that look like this:

// START CODE EXAMPLE
function forLoopRacer (maxCountingNumber) {
    var startTime = Date.now();

    // your loop stuff goes here 
    for (var i = 0; i < maxCountingNumber; i++){
        console.log(i);
    }

    var finishTime = Date.now();

    var functionDuration = (finishTime - startTime) / 1000; // convert from milliseconds to seconds with "/1000"
    console.log(`The for loop function took ${functionDuration} seconds to run.`);
}
forLoopRacer(1000);

// END CODE EXAMPLE

Make sure you write functions that cover these types of loops:
    - while
    - do while
    - for of
    - array.forEach
And yes, your functions must be able to count up to any number. They must use a parameter!
You may have to create an array of numbers for the "for of" and "array.forEach" iterators - see if you can do that in a class constructor.



*/

/*
CHALLENGE 1: Construct a Bee

Using the provided code (see below), create a constructor appropriate for the various class functions.
Hunger should be lower if the bee has eaten lots of food. (0 = full, can't eat any more)
Same with thirst. (0 = full, can't drink any more)

*/
class Bee {
    constructor(newName, positionX, positionY, hungerLevel, thirstLevel) {
        this.name = newName;
        this.positionX = positionX;
        this.positionY = positionY;
        this.hungerLevel = hungerLevel;
        this.thirstLevel = thirstLevel;
    }
    getCurrentPosition () {
        return (`The bee named ${this.name} is at coordinates X: ${this.positionX} , Y: ${this.positionY}`);
    }

    refillHunger () {
        this.hungerLevel = 0;
        console.log(`${this.name}s hunger has been topped up`)
    }

    refillThirst () {
        this.thirstLevel = 0;
        console.log(`${this.name}s thirst has been quenched`)
    }

    renameBee (newName) { 
        this.name = newName;
    }

    moveToPosition (newX, newY){
        this.positionX = newX;
        this.positionY = newY;
    
    }
}

var newBee = new Bee("Greg", 4, 4, 2, 2);
console.log(newBee.getCurrentPosition());
newBee.moveToPosition(10, 20);
console.log(newBee.getCurrentPosition());
console.log(newBee.hungerLevel);
console.log(newBee.thirstLevel);
newBee.refillHunger();
newBee.refillThirst();
console.log(newBee.hungerLevel);
console.log(newBee.thirstLevel);
var newBee2 = new Bee("Val", 10, 32, 8, 8);
console.log(newBee2.getCurrentPosition());
newBee2.moveToPosition(2, 1);
console.log(newBee2.getCurrentPosition());
console.log(newBee2.hungerLevel);
console.log(newBee2.thirstLevel);
newBee2.refillHunger();
newBee2.refillThirst();
console.log(newBee2.hungerLevel);
console.log(newBee2.thirstLevel);




/*

CHALLENGE 1.2: Queen Bee
Create a new QueenBee class that uses JavaScript class inheritance.
This class will inherit from your completed Bee class, and add new functions to the QueenBee class that covers the following:
- creates a new bee (give random values for things like name and position)
- adds the new bee to an array of bees stored in the QueenBee class
- print a list of all bees and their locations

*/

class Queen extends Bee {
    constructor(newName, positionX, positionY, hungerLevel, thirstLevel){
        super(newName, positionX, positionY, hungerLevel, thirstLevel);
    }
    beeCreate() {
        
    }


}
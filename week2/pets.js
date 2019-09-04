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
        this.name = name;
        this.happiness = 50;
        this.hunger = 0;
        this.thirst = 0;
    }

    play(){
        console.clear();
        this.happiness = this.happiness + 1;
        this.hunger = this.hunger + 1;
        this.thirst = this.thirst + 1;
        console.log(`you played with ${this.name}\nHappiness:${this.happiness}\nThirst:${this.thirst}\nHunger:${this.thirst}`);
        if (this.happiness <= 51){
            console.log(`${this.name} is very happy`);
        }
        this.checker()
    }

    feed(){
        console.clear();
        this.happiness = this.happiness - 1;
        this.hunger = this.hunger - 1;
        console.log(`hunger:${this.hunger}`);
        this.checker()
    }
    drink(){
        console.clear();
        this.happiness = this.happiness - 1;
        this.thirst = this.thirst - 1;
        console.log(`thirst:${this.thirst}`);
        this.checker()
    }
    sang(){
        console.clear();
        this.happiness += 10;
        console.log(`happiness:${this.happiness}`);
        this.checker()
    }

    checker(){
        if (this.thirst === 0 && this.hunger === 0){
            this.happiness += 1;
        }
    }

    status(){
        console.log(`${this.name} Status\nHappiness:${this.happiness}\nThirst:${this.thirst}\nHunger:${this.hunger}`);
    }

}
hopoity = new Pet("hipity")
hopoity.play()

hopoity.feed()
hopoity.drink()



hopoity.status()


// - Name their pet
// - Play with the pet (increase happiness)
// - Feed the pet (decrease hunger)
// - Give the pet a drink (decrease thirst)
// - Let the pet sing (increase happiness, only available if hunger & thirst are at 0)


/*
CHALLENGE 4.2: Multi-pet household
Create a Cat class and a Dog class. These should inherit from Pet.
The Pet app should prompt the user to ask if they want a dog or a cat as their pet. 
The cat's happiness goes up faster when its hunger & thirst are between 0 and 5.
The dog has a special function to Walk. Walking increases hunger & thirst by 3, and increases happiness by 3.
*/
class Cat extends Pet{
    constructor(name){
        super(name);
    }



}

class Dog extends Pet{
    constructor(name){
        super(name);
    }

}

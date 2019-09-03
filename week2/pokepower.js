/*
CHALLENGE 6: Pokemon Team Power Calculator
Create a Pokemon object that has these variables on it:
- Name
- Health Points
- Attack
- Special Attack
- Defence
- Special Defence
- Speed
- Level
Might be good to make a template object, so you can easily make new copies of it with some pre-defined data.
Typically, all values except name & level have a mininum value of 10. 
Level has a minimum value of 1.
Name can be anything.

Create a function that lets you make copies of the Pokemon object & pass through new values for each property on the Pokemon object.

Next, you need to make 6 copies of the Pokemon object. 
Then, create a function that goes through each of those 6 copies and sums up all values (except level & name).
The total that you calculate is the Pokemon team power rating! Tada! 

If you're a huge Pokemon nerd like me (Alex H from Sydney campus), go through Bulbapedia entries on your favourite Pokemon and put in some real Pokemon stats to see what values you can get.


*/



var pokeDefault = {
    name = "name",
    healthPoints = 10,
    attack = 10,
    specialAttack = 10,
    defence = 10,
    specialDefence = 10,
    speed = 10,
    Level = 1,

}

pokeDefault.name =
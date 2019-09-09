class Fruit {
    constructor(name, color, bites){
    this.name = name;
    this.color = color;
    this.bites = bites;
    }
    
}


class Apple extends Fruit {
    constructor(name, color, bites){
        super(name, color, bites);
        this.name = "Apple"
        this.color = "Red"
        this.bites = 6;
    }
}

class Orange extends Fruit {
    constructor(name, color, bites){
        super(name, color, bites);
        name = "Orange"
        color = "Orange"
        bites = 8
        
    }

}

class Banana extends Fruit {
    constructor(name, color, bites){
        super(name, color, bites);
        name = "Banana"
        color = "Yellow"
        bites = 5;
    }

}

fruit1 = new Fruit('Orange', 'orange', 5)
console.log(fruit1)
fruit2 = new Orange()
console.log(fruit2)


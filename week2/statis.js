class Dog {
    constructor(name){
        var i = 0;
        this.name = name;
        this.count = i++;
        
    }
    static dogCount(i){
        return `the dog count is ${i}`;
    }
}
var dog1 = new Dog("Tommy");
var dog2 = new Dog("Rex");

Dog.dogCount();
console.log(Dog.dogCount())
// static keyword makes it a class method and not an instance method anymore.
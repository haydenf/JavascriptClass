class Dog {
    constructor(name){
        
        this.name = name;
        Dog.count = i++;
        
    }
    static getDogCount(){
        return `the dog count is ${Dog.dogCount}`;
    }
    static setDogCount
        Dog.count = 0;
        console.log(Dog.getDogCount());
}
Dog.setDogCount();
var dog1 = new Dog("Tommy");
var dog2 = new Dog("Rex");


console.log(Dog.getDogCount())
// static keyword makes it a class method and not an instance method anymore.
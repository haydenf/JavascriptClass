class Dog {
    constructor(name){
        this.name = name;
        Dog.count++;
    }
    // static makes this method a class method
    static dogCount() {
        console.log(`total number of ${Dog.count}`);
    }
}
Dog.count = 0;
dog1 = new Dog('King');
dog2 = new Dog("Tori");
Dog.dogCount();
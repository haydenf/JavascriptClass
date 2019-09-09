class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }   
}

class Square extends Shape {
    constructor(width, height){
        super(width, height);
    }
    isSquare() {
        if (this.width !== this.height){
            return "is not a square";
            } else {
            return "is a square";
            }
    }
}

var sq = new Square(20, 20);
console.log(sq.calcArea());
console.log(sq.isSquare());


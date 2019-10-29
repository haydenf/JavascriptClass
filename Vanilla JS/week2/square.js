// testing class making and prototype adding
class Shape {
    constructor(width, height){
    this.width = width;
    this.height = height;
    }
    calcArea() {
      return this.width * this.height;
    }
}

square1 = new Shape(50, 50)
Shape.prototype.cms = "area in CMs"
console.log(square1.calcArea(), square1.cms)
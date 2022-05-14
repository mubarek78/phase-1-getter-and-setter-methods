// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    get area() {
      return Math.PI * this.radius ** 2;
    }
  
    set diameter(newDiameter) {
      return (this.radius = newDiameter / 2);
    }
  
    set circumference(newCircumference) {
      return (this.radius = newCircumference / (Math.PI * 2));
    }
    set area(newArea) {
      return (this.radius = Math.sqrt(newArea / Math.PI));
    }
  }
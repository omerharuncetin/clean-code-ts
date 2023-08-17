/**
 * Liskov Substitution Principle (LSP):
 *
 * The Liskov Substitution Principle, often abbreviated as LSP, is one of the five principles of SOLID
 * in object-oriented design and programming. It was introduced by Barbara Liskov in 1987.
 *
 * At its core, the LSP states that objects of a superclass should be replaceable with objects of a
 * subclass without affecting the correctness of the program. In other words, if a class S is a subclass
 * of class T, then an object of class T should be replaceable by an object of class S without
 * altering any of the desirable properties or expected behaviors of the program.
 *
 * Violations of the LSP can lead to unexpected behaviors, bugs, and difficulties in scaling and
 * maintaining software. Adhering to the LSP ensures that subclasses extend the behavior of
 * superclasses in a manner that does not break the expected behavior set by the superclass.
 *
 * By designing with the LSP in mind, developers can produce more modular, maintainable, and
 * robust software systems.
 */


// Interface representing a shape with an area method.
interface Shape {
  area(): number;
}

// Class representing a rectangle implementing the Shape interface.
class Rectangle implements Shape {
  width: number;
  height: number;

  // Constructor initializes the rectangle with given width and height.
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate and return the area of the rectangle.
  area(): number {
    return this.width * this.height;
  }
}

// Class representing a square implementing the Shape interface.
// A square has equal width and height represented by "side".
class Square implements Shape {
  side: number;

  // Constructor initializes the square with given side length.
  constructor(side: number) {
    this.side = side;
  }

  // Method to calculate and return the area of the square.
  area(): number {
    return this.side * this.side;
  }
}

// Array of shapes which can be processed in a consistent manner.
const shapes: Shape[] = [new Rectangle(10, 20), new Square(5)];
for (const shape of shapes) {
  console.log(shape.area());  // This will work as expected.
}

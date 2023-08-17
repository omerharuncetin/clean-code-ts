// Class representing a rectangle with width and height.
class Rectangle {
  width: number;
  height: number;

  // Constructor initializes the rectangle with given width and height.
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Method to set the width of the rectangle.
  setWidth(width: number): void {
    this.width = width;
  }

  // Method to set the height of the rectangle.
  setHeight(height: number): void {
    this.height = height;
  }

  // Method to calculate and return the area of the rectangle.
  area(): number {
    return this.width * this.height;
  }
}

// Square class inheriting from Rectangle.
// This representation is problematic because a square's width and height are always the same.
class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  // Overridden method to set width also sets height to ensure it's a square.
  setWidth(width: number): void {
    this.width = width;
    this.height = width;
  }

  // Overridden method to set height also sets width to ensure it's a square.
  setHeight(height: number): void {
    this.width = height;
    this.height = height;
  }
}

// Using a Square object where a Rectangle is expected can lead to unexpected results.
const r: Rectangle = new Square(5);
r.setWidth(10);
r.setHeight(20);
console.log(r.area());  // This might be unexpected.

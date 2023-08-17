interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
  play(): void;
}

// A problem arises when certain workers, like robots, don't need all methods.
class Robot implements Worker {
  work(): void {
    console.log("Robot working...");
  }
  eat(): void {
    // Robots don't eat.
    throw new Error("Robots don't eat.");
  }
  sleep(): void {
    // Robots don't sleep.
    throw new Error("Robots don't sleep.");
  }
  play(): void {
    console.log("Robot playing...");
  }
}

class Human implements Worker {
  work(): void {
    console.log("Human working...");
  }
  eat(): void {
    console.log("Human eating...");
  }
  sleep(): void {
    console.log("Human sleeping...");
  }
  play(): void {
    console.log("Human playing...");
  }
}

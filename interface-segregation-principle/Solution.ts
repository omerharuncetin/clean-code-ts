/**
 * Interface Segregation Principle (ISP):
 *
 * The Interface Segregation Principle, commonly abbreviated as ISP, is a crucial principle in the
 * SOLID set of object-oriented design principles. It asserts that no client (class, module, function)
 * should be forced to depend on interfaces it doesn't use or need.
 *
 * Here's a breakdown of its implications:
 * - **Focused Interfaces**: Instead of having one large, all-encompassing interface, ISP suggests
 *   breaking it down into smaller, more specific interfaces, so that clients only need to be
 *   concerned with the interfaces relevant to their specific context.
 *
 * - **Reduces Side Effects**: When interfaces are segregated and tailored to specific needs,
 *   changing the behavior or adding methods to one interface is less likely to inadvertently affect
 *   clients that depend on other interfaces.
 *
 * - **Enhances Readability**: Smaller, well-defined interfaces are easier to understand and implement,
 *   leading to cleaner and more intuitive code.
 *
 * Violating the ISP can lead to bloated interfaces, which in turn makes software harder to understand,
 * maintain, and change. Adhering to the ISP promotes modularity and ensures that clients only deal
 * with the relevant parts of an abstraction.
 *
 * In essence, the Interface Segregation Principle promotes creating interfaces that are specific
 * to a client's needs rather than broad and all-encompassing.
 */


interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

interface Playable {
  play(): void;
}

// Now, the Robot only implements the interfaces relevant to its functionalities.
class RobotWorker implements Workable, Playable {
  work(): void {
    console.log("Robot working...");
  }
  play(): void {
    console.log("Robot playing...");
  }
}

// And a human worker can implement all the interfaces as necessary.
class HumanWorker implements Workable, Eatable, Sleepable, Playable {
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

/**
 * Single Responsibility Principle (SRP):
 *
 * The Single Responsibility Principle, often abbreviated as SRP, is a foundational concept in the SOLID
 * set of object-oriented design principles. It asserts that a class or module should have only one
 * reason to change, or in other words, it should have only one responsibility.
 *
 * The main ideas behind SRP are:
 * - **Cohesion**: A class or module should represent a single concept or entity. This ensures that the
 *   functions related to that concept are centralized in one place, making the code more intuitive
 *   and easier to maintain.
 *
 * - **Change Management**: If a class has more than one responsibility, then changes to one
 *   responsibility might inadvertently affect the other. By ensuring a single responsibility,
 *   changes are isolated, making the system more robust and less prone to bugs.
 *
 * - **Reusability**: Classes with a single responsibility are generally more reusable because they
 *   are focused on one particular task or concept.
 *
 * Violations of the SRP can lead to tightly coupled systems, where changes in one part of the system
 * can have unforeseen impacts on other parts. Adhering to the SRP results in a modular and decoupled
 * design, making software easier to understand, modify, and extend.
 *
 * In essence, the Single Responsibility Principle emphasizes that a class or module should focus on
 * one task or concept, thereby making the software design more maintainable and scalable.
 */

interface ISorter {
  sort(collection: []): void;
}

interface IJob {
  doJob(): void;
}

interface IComparable {
  compareTo(): number;
}

interface IRunnable {
  run(): void;
}


export class SorterTask implements ISorter, IJob, IComparable, IRunnable {
  public compareTo(): number {
    return 0;
  }

  public sort(collection: []): void {
    collection.sort();
  }

  public doJob(): void {
    // do job
  }

  public run(): void {
    // run
  }
}

/**
 * And as a result, in example function you can see that we can use SorterTask class as a ISorter, IJob, IComparable and IRunnable.
 * This leads us to use this class in different places and easily maintain the code.
 */
export function example(): void {
  const sorterInstance: ISorter = new SorterTask();
  sorterInstance.sort([]);

  const jobInstance: IJob = new SorterTask();
  jobInstance.doJob();

  const comparableInstance: IComparable = new SorterTask();
  comparableInstance.compareTo();

  const runnableInstance: IRunnable = new SorterTask();
  runnableInstance.run();

}

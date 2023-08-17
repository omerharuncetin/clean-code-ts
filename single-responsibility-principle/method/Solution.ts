import { Account } from "@common/class";
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


/**
 * By splitting changeBalance method to multiple methods and passing the Account instance as parameter to methods fixes the SRP violation.
 * Because in previous example, changeBalance was doing multiple things by taking an "action" parameter. Which causes to multiple if else statements.
 * But in this example we withdraw, deposit and transfer functions. Even, we can add more functions to this class.
 */
export class SRPMethodSolution {

  constructor(private validator) { }

  public withdraw(account: Account, amount: number): void {
    this.validator.validate(amount);
    account.withdraw(amount)
  }

  public deposit(account: Account, amount: number): void {
    this.validator.validate(amount);
    account.deposit(amount)
  }

  public transfer(from: Account, to: Account, amount: number): void {
    this.validator.validate(amount);
    from.withdraw(amount);
    to.deposit(amount);
  }
}

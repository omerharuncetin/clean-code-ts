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


export class SRPStatementSolution {

  constructor(private utils, private currentUser) { }

  /**
   * By splitting the calculation into smaller parts, we can read and maintain each part easily.
   * @param a
   * @param b
   * @param c
   * @returns
   */
  public calculate(a: number, b: number, c: number): number {
    let result = 0;

    ++b;
    b = b * b;
    const d = c / a;

    result = a + (b + 2) * d;

    return result;
  }

  /**
   * By splitting the setting card Id into smaller parts, we can read and maintain each part easily.
   * @param cardInstance
   */
  public setCardId(cardInstance): void {
    const idNo = cardInstance.isCitizen() ? cardInstance.getIdNo() : cardInstance.getPassportNo();
    const backupValue = cardInstance.isCitizen() ? this.currentUser.Id : this.currentUser.PassportNo;

    cardInstance.setIdNo(this.utils.isNullOrEmpty(idNo) ? backupValue : idNo);
  }

}

export class SRPStatement {

  constructor(private utils, private currentUser) { }

  /**
   * Following calculate function is a bad example of SRP. In one statement, it is doing multiple and complex things.
   * It is strongly possible to misunderstand the code and make mistakes. Also, it is not easy to test and maintain the code.
   * @param a
   * @param b
   * @param c
   * @returns
   */
  public calculate(a: number, b: number, c: number): number {
    return a + ++b * c / a + b + 2 * c / a;
  }


  /**
   * Following setCardId function is a bad example of SRP. It is doing an operation in one statement. Also using nested ternary operator, which is not easy to read.
   * @param cardInstance
   */
  public setCardId(cardInstance): void {
    cardInstance.setIdNo(
      cardInstance.isCitizen()
        ? this.utils.isNullOrEmpty(cardInstance.getIdNo()) ? this.currentUser.Id : cardInstance.getIdNo()
        : this.utils.isNullOrEmpty(cardInstance.getPassportNo()) ? this.currentUser.PassportNo : cardInstance.getPassportNo()
    )
  }

}

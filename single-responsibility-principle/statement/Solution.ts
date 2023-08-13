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

export class SRPMethod {
  private balance = 0;
  private logService;

  /**
   * This function neither an atomic method nor procedural method. Thus, it violates the SRP by doing multiple atomic operations in same method.
   * @param action
   * @param amount
   */
  public changeBalance(action: string, amount: number): void {

    if (amount < 0) {
      throw new Error('Amount cannot be negative');
    }

    if (action === 'Deposit') {
      this.balance += amount;
    } else if (action === 'Withdraw') {
      this.balance -= amount;
    } else {
      throw new Error('Invalid action');
    }

    this.logService.info(`Balance changed: ${action} ${amount} , balance: ${this.balance}`);

  }
}

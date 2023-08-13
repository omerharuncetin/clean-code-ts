import { Account } from "@common/class";

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

import { User } from "./User";

export class Account {
  public user: User;
  public balance: number;

  constructor(user: User) {
    this.user = user;
    this.balance = 0;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    this.balance -= amount;
  }

  public transfer(amount: number, account: Account): void {
    this.withdraw(amount);
    account.deposit(amount);
  }
}

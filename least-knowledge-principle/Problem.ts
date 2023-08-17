class Wallet {
  balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  decreaseBalance(amount: number): void {
    this.balance -= amount;
  }
}

class Person {
  constructor(private wallet: Wallet) { }

  buySomething(cost: number): void {
    if (this.wallet.balance >= cost) { // Directly accessing the internal property of Wallet
      this.wallet.decreaseBalance(cost);
      console.log(`Bought an item for $${cost}.`);
    } else {
      console.log("Not enough funds to make the purchase.");
    }
  }
}

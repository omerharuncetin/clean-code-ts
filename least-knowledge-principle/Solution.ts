/**
 * Least Knowledge Principle (LKP) / Law of Demeter (LoD):
 *
 * The Least Knowledge Principle, sometimes referred to as the Law of Demeter, is a design guideline
 * that promotes minimal knowledge of and interaction between classes or objects. It's not about
 * "how many methods a class should have" but rather "which classes it interacts with".
 *
 * Here's a breakdown of its core ideas:
 * - An object should only communicate with its neighbors and should avoid talking to distant objects.
 * - Objects or methods should not expose or be aware of the internal details of other objects or methods.
 *
 * Key takeaways of LKP:
 * - **Reduces Coupling**: When objects have limited knowledge of others, the system becomes less intertwined,
 *   resulting in a more modular and maintainable design.
 *
 * - **Enhances Flexibility**: A system where objects have limited interactions is easier to refactor or extend.
 *
 * - **Simplifies Changes**: With fewer dependencies, making changes or updates to one part of the system
 *   is less likely to inadvertently affect other parts.
 *
 * Violating LKP can lead to a system where a single change can have far-reaching consequences, making
 * the system harder to maintain and extend. By adhering to LKP, you create a design where each component
 * is relatively isolated, leading to a more robust and adaptable architecture.
 *
 * In essence, the Least Knowledge Principle promotes limiting the interactions and dependencies
 * between classes, ensuring each component knows only what's necessary to perform its function.
 */

class BetterWallet {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }

  decreaseBalance(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

class BetterPerson {
  constructor(private wallet: BetterWallet) { }

  buySomething(cost: number): void {
    if (this.wallet.getBalance() >= cost) { // Using a method to get the balance
      this.wallet.decreaseBalance(cost);
      console.log(`Bought an item for $${cost}.`);
    } else {
      console.log("Not enough funds to make the purchase.");
    }
  }
}

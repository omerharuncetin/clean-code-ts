/**
 * Coupling refers to the degree to which one class or module depends on another class or module.
 * Low (or loose) coupling is a design goal because it means you can change one class without affecting others.
 * High (or tight) coupling means classes are interdependent, making the system harder to change and maintain.
*/

interface PaymentStrategy {
  process(amount: number): void;
}

class BetterCreditCardPayment implements PaymentStrategy {
  process(amount: number): void {
    // Process credit card payment
  }
}

class PayPalPayment implements PaymentStrategy {
  process(amount: number): void {
    // Process PayPal payment
  }
}

class BetterOrder {
  private payment: PaymentStrategy;

  constructor(payment: PaymentStrategy) {
    this.payment = payment;
  }

  checkout(amount: number): void {
    this.payment.process(amount);
  }
}

/**
 * In this example, the Order class demonstrates how using interfaces (or the Strategy Pattern, in this case) can achieve loose coupling.
 * By adhering to the Dependency Inversion Principle, we're making the high-level Order class depend on abstractions, not on concrete implementations.
*/
function testPayment(): void {
  const creditCardPayment: PaymentStrategy = new BetterCreditCardPayment();
  const order1: BetterOrder = new BetterOrder(creditCardPayment);
  order1.checkout(100);

  const paypalPayment: PaymentStrategy = new PayPalPayment();
  const order2: BetterOrder = new BetterOrder(paypalPayment);
  order2.checkout(200);
}


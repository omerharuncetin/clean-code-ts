/**
* Consequences of Tight Coupling:
* High coupling between software entities can lead to several problems:
*
* Reduced Reusability: Modules are tightly intertwined, making it hard to reuse a module without dragging along several others.
* Reduced Testability: Testing a module requires setting up and configuring many other tightly coupled modules.
* Decreased Maintainability: A change in one module can have cascading changes in several others.
* Less Scalability: Introducing new functionalities or making systemic changes can be difficult due to inter-dependencies.
*/


class CreditCardPayment {
  process(amount: number): void {
    // Process credit card payment
  }
}

class Order {
  private payment: CreditCardPayment;

  constructor() {
    this.payment = new CreditCardPayment();
  }

  checkout(amount: number): void {
    this.payment.process(amount);
  }
}

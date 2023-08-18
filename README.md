# Clean Code with Typescript 💻

This repository is an educational resource 📚 designed for those looking to learn Clean Code principles with TypeScript.

## Target Audience 🎯

For this training, TypeScript knowledge is required. This training is designed for everyone who wants to design and develop better and cleaner software.

## Objective of the Training 📈

In this training, you will learn Clean Code best practices with Object Oriented Programming.

## How to Use 🛠️

To make the most of this educational material, read and rewrite these examples or similar ones.

## Directory Structure and Descriptions 📂

This project is organized into several directories. Each practice has `Problem.ts` and `Solution.ts`. Each focusing on specific principles or concepts:

- **common** 🌐
  - `class`: Houses general-purpose classes that can be used across different parts of the application.
  - `interface`: Contains interfaces that are commonly used or shared across multiple components or modules.
  
- **cohesion** 🧩
  - `mixed-domain`: Contains examples demonstrating how mixing different domains can affect cohesion.
  - `mixed-instance`: Showcases issues that arise when instances from different contexts are mixed, leading to reduced cohesion.
  - `mixed-interface`: Provides examples of interfaces that serve multiple purposes, illustrating the challenges of maintaining cohesion.

- **coupling** 🧲
  - Coupling refers to the degree to which one class or module depends on another class or module. Low (or loose) coupling is a design goal because it means you can change one class without affecting others. High (or tight) coupling means classes are interdependent, making the system harder to change and maintain.

- **single-responsibility-principle** 📏
    - The Single Responsibility Principle dictates that a class should have only one reason to change, meaning it should have only one job or responsibility. This principle is centered around the idea that each module, class, or function in a software system should have responsibility for a single piece of functionality. Adhering to this principle makes the codebase more maintainable and scalable, as changes to a particular functionality will be localized to a single module or class. The examples in this directory will illustrate how ensuring each component has a singular focus can lead to clearer, more cohesive, and more maintainable code.

  - `statement`: Demonstrates the importance of having each statement (or function) serve a single, clear purpose.
  - `method`: Contains examples where methods either adhere to or violate the Single Responsibility Principle.
  - `class`: Features classes designed with the Single Responsibility Principle in mind, as well as those that don't, to highlight the contrast.
- **open-closed-principle** 🔐
  - The Open/Closed Principle, one of the SOLID principles of Object-Oriented Programming, states that software entities (like classes, modules, functions, etc.) should be open for extension but closed for modification. This means that the behavior of a module can be extended without modifying its source code. This principle promotes a more robust and maintainable codebase by encouraging developers to use interfaces and abstract classes to allow for future growth and changes without altering existing code.
- **liskov-substitution-principle** 🔄
  - The Liskov Substitution Principle, another pillar of SOLID, states that objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program. It emphasizes the importance of ensuring that a subclass is truly a subtype of its superclass, preserving behavior and semantics.
  
- **least-knowledge-principle** 🤫
  - The Least Knowledge Principle, or Law of Demeter, suggests that an object should know as little as possible about other parts of an application. This promotes reducing the direct interactions and dependencies between classes, ensuring each class or component knows only what's necessary for its function. The directories here will contain examples of adherence and violations of this principle, illustrating its importance in maintaining decoupled and modular code.

- **interface-segregation-principle** 🎛️
  - The Interface Segregation Principle insists that no client should be forced to depend on interfaces it doesn't use. In essence, it's better to have several specific interfaces rather than one "do-it-all" interface. The examples in this section will demonstrate the benefits of segregating interfaces and the pitfalls of having bloated, all-encompassing interfaces.

- **dependency-inversion-principle** 🔌
  - Dependency Inversion Principle is about decoupling high-level modules from low-level modules by introducing abstractions between them. High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions. This section will contain examples that demonstrate the value of inverting dependencies, making the system more flexible and easier to maintain.


## Feedback and Contact 📧

For questions, suggestions, or feedback about the training, please reach out at omerharuncetin@gmail.com

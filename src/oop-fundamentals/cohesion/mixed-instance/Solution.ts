
/**
 * Mixed Instance Cohesion Solution
 * - We divided Employee class into multiple classes.
 * - First class is Employee. It has common methods for all employees.
 * - Second class is Manager. It has methods and variable for managers.
 * - Third class is Director. It has bonus variable for director.
 * - Now we have more classes, they are more cohesive.
 * - We can easily add new classes for new types of employees.
 * - By doing that, we can easily manage and maintain our code.
 * - Otherwise for every change related to director or manager, we would need to change the Employee class. But now, we don't need to change the Employee class.
 * - Therefore, we have less coupling.
*/

export class Employee {
  protected _no: number;
  protected _name: string;
  protected _year: string;
  protected _department: string;
  protected _salary: number;


  constructor() {
    // ...
  }

  work(): void {
    // ...
  }

  takeVacation(): void {
    // ...
  }

  calculateSalary(): void {
    // ...
  }

  get no(): number {
    return this._no;
  }

  get name(): string {
    return this._name;
  }

  get year(): string {
    return this._year;
  }

  get department(): string {
    return this._department;
  }

  get salary(): number {
    return this._salary;
  }

  printInfo(): void {
    // ...
  }
}

export class Manager extends Employee {
  protected _departmentManaged: string;


  constructor() {
    // ...
    super();
  }

  work(): void {
    // ...
  }

  takeVacation(): void {
    // ...
  }

  calculateSalary(): void {
    // ...
  }

  manageEmployees(): void {
    // ...
  }

  hire(): void {
    // ...
  }

  get departmentManaged(): string {
    return this._departmentManaged;
  }

  printInfo(): void {
    // ...
  }
}


export class Director extends Manager {
  private _bonus: number;


  constructor() {
    // ...
    super();
  }

  work(): void {
    // ...
  }

  takeVacation(): void {
    // ...
  }

  calculateSalary(): void {
    // ...
  }

  manageEmployees(): void {
    // ...
  }

  hire(): void {
    // ...
  }

  get bonus(): number {
    return this._bonus;
  }

  printInfo(): void {
    // ...
  }
}

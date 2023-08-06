
/**
 * Bad Example of Mixed Instance Cohesion
 * - We have one class with many methods. But actually these methods are related to different types of objects.
 * - For example _type variable is redundant and causes the class to be more complex.
 * - We should split this class into multiple classes.
 * - For example Employee, Manager, Director classes.
*/

export class Employee {
  private _no: number;
  private _name: string;
  private _year: string;
  private _department: string;
  private _salary: number;
  // Manager | Director | Employee
  private _type: string;
  private _departmentManaged: string;
  private _bonus: number;


  createEmployee(): void {
    // ...
  }

  createManager(): void {
    // ...
  }

  createDirector(): void {
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

  manageEmployees(): void {
    // ...
  }

  hire(): void {
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

  get type(): string {
    return this._type;
  }

  get departmentManaged(): string {
    return this._departmentManaged;
  }

  get bonus(): number {
    return this._bonus;
  }

  printInfo(): void {
    // ...
  }
}

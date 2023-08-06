export class User {
  public name: string;
  public email: string;
  public password: string;
  public id: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.password = 'password';
    this.id = 'id';
  }
}


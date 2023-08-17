import { User } from "@common/class";

export class OpenClosedExample {

  constructor(private user: User, private validator) {

  }

  /**
   * This function violates the Open Closed Principle.
   * If there is more types, then we have to add more if else blocks. For the changes we have to change this function's if else statements
   * But OCP tells us software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
   * @param type
   * @param name
   */
  public changeUsername(type: string, name: string): void {

    if (type === 'Admin') {
      if (!this.validator.validateAdmin(this.user)) {
        throw new Error('User is not admin!')
      }
      this.user.name = 'Admin: ' + name;
    } else if (type === 'Director') {
      if (!this.validator.validateDirector(this.user)) {
        throw new Error('User is not director!')
      }
      this.user.name = 'Director: ' + name;
    } else if (type === 'Manager') {
      if (!this.validator.validateManager(this.user)) {
        throw new Error('User is not manager!')
      }
      this.user.name = 'Manager: ' + name;
    }
  }
}


interface XCompanyUser {
  userName: string;
  xId: string;
}

interface XCompanyAPI {
  getUserById: (id: string) => XCompanyUser;
  changeUsername: (id: string, user: XCompanyUser) => XCompanyUser;
  validateName: (name: string) => boolean;
}

/**
 * Let's say we added new user type which is from another company. Thus, we need to use their api and validation.
 * If we still use this architecture we need to change our class like the following.
 * And this is a bad design because we are modifying the class and the function. We could have done that in another class and just pass it's instance to our changeUsername function.
 */
export class OpenClosedExampleV2 {
  constructor(private user: User, private validator, private xCompanyAPI: XCompanyAPI) {
  }

  /**
   * This function violates the Open Closed Principle.
   * If there is more types, then we have to add more if else blocks. For the changes we have to change this function's if else statements
   * But OCP tells us software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
   * @param type
   * @param name
   */
  public changeUsername(type: string, name: string): void {

    if (type === 'Admin') {
      if (!this.validator.validateAdmin(this.user)) {
        throw new Error('User is not admin!')
      }
      this.user.name = 'Admin: ' + name;
    } else if (type === 'Director') {
      if (!this.validator.validateDirector(this.user)) {
        throw new Error('User is not director!')
      }
      this.user.name = 'Director: ' + name;
    } else if (type === 'Manager') {
      if (!this.validator.validateManager(this.user)) {
        throw new Error('User is not manager!')
      }
      this.user.name = 'Manager: ' + name;
    } else if (type == 'XUser') {
      if (this.xCompanyAPI.validateName(name)) {
        throw new Error('X Company name not valid!')
      }
      const xUser = this.xCompanyAPI.getUserById('X' + this.user.id);

      xUser.userName = 'X User' + name;

      this.xCompanyAPI.changeUsername(name, xUser);
    }
  }
}

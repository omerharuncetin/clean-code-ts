import { User } from "../common/class";

/**
 * Open/Closed Principle (OCP):
 *
 * The Open/Closed Principle, often abbreviated as OCP, is another crucial principle in the SOLID
 * set of design principles in object-oriented programming. Introduced by Bertrand Meyer in 1988,
 * it stipulates that software entities (classes, modules, functions, etc.) should be open for
 * extension but closed for modification.
 *
 * Here's a breakdown of what that means:
 * - **Open for Extension**: This suggests that the behavior of a module can be extended or enhanced.
 *   That is, as requirements evolve, we can introduce new features or behaviors without altering
 *   the existing code.
 *
 * - **Closed for Modification**: The existing code remains unchanged when adding new features
 *   or behaviors. Instead of modifying existing code, new behavior is added via new code.
 *
 * Adherence to the OCP helps in achieving a more modular software design, making the system more
 * flexible, scalable, and less prone to bugs during changes. When a system is designed with OCP
 * in mind, new features can be added with minimal risk of introducing regressions or breaking
 * existing functionality.
 *
 * In essence, the Open/Closed Principle promotes the idea that once a module is complete, its
 * behavior should only be altered by adding new code, not by changing existing code.
 */


interface UserService {
  changeUsername(name: string): void;
}

class AdminUser implements UserService {

  constructor(private user: User, private validator) {

  }

  public changeUsername(name: string): void {
    this.validator.validate();
    this.user.name = 'Admin' + name;
  }
}

class DirectorUser implements UserService {

  constructor(private user: User, private validator) {

  }

  public changeUsername(name: string): void {
    this.validator.validate();
    this.user.name = 'Director' + name;
  }
}

class ManagerUser implements UserService {

  constructor(private user: User, private validator) {

  }

  public changeUsername(name: string): void {
    this.validator.validate();
    this.user.name = 'Manager' + name;
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

class XCompanyUser implements UserService {

  constructor(private user: User, private api: XCompanyAPI) {

  }

  public changeUsername(name: string): void {
    this.validate(name);

    const formattedId = this.formatId(this.user.id);

    const user = this.api.getUserById(formattedId)

    user.userName = this.formatName(name);

    this.api.changeUsername(formattedId, user);
  }

  private formatName(name: string): string {
    return 'X ' + name;
  }

  private formatId(id: string): string {
    return 'X' + id;
  }

  private validate(name: string): void {
    if (!this.api.validateName(name)) {
      throw new Error('Name is not valid!')
    }
  }

}

export class OpenClosedExampleSolution {

  /**
   * We removed the if else statements. Instead, got the userService as function parameter and used it's changeUsername function.
   * Also created AdminUser, DirectorUser, ManagerUser and serviceUser that implements UserService interface.
   * By doing that our upper level function does not know which type it should be. We are just passing new class and thats it.
   * We can simply add more types of users and change their names and validate the input if needed.
   * @param type
   * @param name
   */
  public changeUsername(userService: UserService, name: string): void {
    userService.changeUsername(name);
  }
}

/**
 *
 */
function example(): void {
  const mockUser = new User('name', 'email');
  const mockValidator = {};
  const mockXCompanyAPI: XCompanyAPI = {} as XCompanyAPI;

  const service = new OpenClosedExampleSolution();

  const xUser: XCompanyUser = new XCompanyUser(mockUser, mockXCompanyAPI);
  service.changeUsername(xUser, 'new name');

  const director: DirectorUser = new DirectorUser(mockUser, mockValidator)
  service.changeUsername(director, 'new director name');
}

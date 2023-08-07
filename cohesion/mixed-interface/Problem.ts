import { Account } from "@common/class";
import { User } from "@common/class";


/**
 *  Bad Example of Mixed Interface Cohesion
 * - We have just one interface with many unrelated methods. We can call this fat interface.
 * - The methods are not related to each other
 * - The methods are not related to the interface name
 * - The methods are not related to the purpose of the interface
 * - We should split this interface into multiple interfaces
 */

interface UserService {
  createUser: () => void;

  retrieveUser: (name: string) => User;

  refreshUser: (user: User) => User;

  login: (email: string, password: string) => boolean;

  getCurrentUser: () => User;

  logout: (user: User) => boolean;

  lockUser: (user: User) => boolean;

  getDefaultAccount: (user: User) => Account;

  changePassword: (user: User, password: string) => boolean;

  validatePassword: (password: string) => boolean;

  validateId: (id: string) => boolean;
}

export class UserServiceImpl implements UserService {
  createUser(): void {
    // ...
  }

  retrieveUser(name: string): User {
    // ...
    return new User('name', 'email');
  }

  refreshUser(user: User): User {
    // ...
    return new User('name', 'email');
  }

  login(email: string, password: string): boolean {
    // ...
    return true;
  }

  getCurrentUser(): User {
    // ...
    return new User('name', 'email');
  }

  logout(user: User): boolean {
    // ...
    return true;
  }

  lockUser(user: User): boolean {
    // ...
    return true;
  }

  getDefaultAccount(user: User): Account {
    // ...
    return new Account(new User('name', 'email'));
  }

  changePassword(user: User, password: string): boolean {
    // ...
    return true;
  }

  validatePassword(password: string): boolean {
    // ...
    return true;
  }

  validateId(id: string): boolean {
    // ...
    return true;
  }
}

import { Account } from "@common/class";
import { User } from "@common/class";

/**
 * Mixed Interface Cohesion Solution
 * - We have multiple interfaces with related methods. We can call this thin interfaces.
 * - The methods are related to each other
 * - The methods are related to the interface name
 * - The methods are related to the purpose of the interface
 * - We can use those interfaces in different places.
 * - For example, we can use the Accountable interface in the AccountService class.
 * - We can use the Authable interface in the AuthService class.
 * - By that we don't need to implement all the methods in the BadCohesion UserService example.
 */

interface UserService {
  createUser: () => void;

  retrieveUser: (name: string) => User;

  refreshUser: (user: User) => User;

  getCurrentUser: () => User;
}

interface Accountable {
  getDefaultAccount: (user: User) => Account;
}

interface Authable {
  login: (email: string, password: string) => boolean;
  logout: (user: User) => boolean;
  lockUser: (user: User) => boolean;
  changePassword: (user: User, password: string) => boolean;
}

interface UserValidator {
  validatePassword: (password: string) => boolean;
  validateId: (id: string) => boolean;
}

export class UserServiceImpl implements UserService, Accountable, Authable, UserValidator {
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
    return new Account(user);
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

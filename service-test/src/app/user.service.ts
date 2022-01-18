import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    new User(1, "Alice", "alice@gmail.com", true), 
    new User(2, "Bob", "bob@gmail.com", true), 
    new User(3, "Carol", "carol@gmail.com", false), 
    new User(4, "Dan", "dan@gmail.com", true), 
    new User(5, "Eve", "eve@gmail.com", false), 
    new User(6, "Alice", "alice1987@gmail.com", false)
  ];

  public getUsers(): User[] {
    return this.users;
  }

  public getUser(id: number): User {
    let index = this.users.findIndex(user => user.id == id);
    return this.users[index];
  }

  public deleteUser(id: number): void {
    let index = this.users.findIndex(user => user.id == id);
    this.users.splice(index, 1);
  }

  public updateUser(userToUpdate: User) : User {
    let index = this.users.findIndex(user => user.id == userToUpdate.id);
    this.users.splice(index, 1, userToUpdate);
    return userToUpdate;
  }



  constructor() { }
}

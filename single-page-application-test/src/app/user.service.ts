import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User(1, "Alice", "alice@gmail.com", true), 
    new User(2, "Bob", "bob@gmail.com", true), 
    new User(3, "Carol", "carol@gmail.com", false), 
    new User(4, "Dan", "dan@gmail.com", true)
  ];
  constructor() { }
  getUsers() {
    return this.users;
  }
  getUser(id: number) {
    let index = this.users.findIndex(user => user.id == id);
    return this.users[index];
  }
}

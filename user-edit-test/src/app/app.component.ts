import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Edit';
  text = "test string";

  a: number = 100;
  b: number = 50;
  name = "Aidan";

  users: User[] = [
    new User(1, "Alice", "alice@gmail.com", true),
    new User(2, "Bob", "bob@gmail.com", false), 
    new User(3, "Carol", "carol@gmail.com", true), 
    new User(4, "Dan", "dan@gmail.com", true)

  ];

  onSaved(updatedUser: User) {
    let index = this.users.findIndex(user => user.id == updatedUser.id);
    this.users.splice(index, 1, updatedUser);
  }

  onChange(txtValue: string) {
    console.log(txtValue);
    this.text = txtValue;
  }  

}

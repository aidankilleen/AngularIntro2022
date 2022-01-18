import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    {{ users | json }}
    <hr>


    <user 
      *ngFor="let user of users" 
      [user] = "user"
      (saved) = "onSaved($event)"
      >
    </user>

    <hr>

    <input #txtValue [value] = "text" (keyup)="onChange(txtValue.value)">
    <button (click)="text = ''">reset</button>
    <hr>
    {{ text }}

    <hr>
    <input [(ngModel)]="name">
    <hr>
    {{ name }}
    <button (click)="name=''">reset</button>

    <hr>
    <input [(ngModel)] = "a" type="number"><br>
    <input [(ngModel)] = "b" type="number"><br>
    <hr>
    {{ a + b }}


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Edit';
  text = "test string";

  a: number = 100;
  b: number = 50;
  name = "Aidan";

  onSaved(updatedUser: User) {
    let index = this.users.findIndex(user => user.id == updatedUser.id);
    this.users.splice(index, 1, updatedUser);
  }

  onChange(txtValue: string) {
    console.log(txtValue);
    this.text = txtValue;
  }

  users: User[] = [
    new User(1, "Alice", "alice@gmail.com", true),
    new User(2, "Bob", "bob@gmail.com", false), 
    new User(3, "Carol", "carol@gmail.com", true), 
    new User(4, "Dan", "dan@gmail.com", true)

  ]

}

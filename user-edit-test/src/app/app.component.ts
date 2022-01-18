import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    <user [user] = "user"></user>

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

  onChange(txtValue: string) {
    console.log(txtValue);
    this.text = txtValue;
  }

  user: User = new User(1, "Alice", "alice@gmail.com", true);

}

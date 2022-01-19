import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users"
          [ngClass]="{active:user.active, inactive:!user.active}"
        >
          <td>{{ user.id }}</td>
          <td [ngStyle]="{'text-decoration': user.active ? 'underline' : 'line-through'}">{{ user.name }}</td>
          <td>{{ user.email }}</td>
          
          
          <td *ngIf="user.active"><strong>Active</strong></td>
          <td *ngIf="!user.active">***Inactive User***</td>

          <td *ngIf="user.active; else inactivetd">ACTIVE</td>
          <ng-template #inactivetd>
            <td>INACTIVE</td>
          </ng-template>

          <td>{{ user.country }}</td>
        </tr>
      </tbody>
    </table>

    <input type="number" [(ngModel)]="fontSize">

    <div [ngStyle]="{'font-size': fontSize + 'px'}">
      Sample Text
    </div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'other directives test';
  fontSize = 10;

  users = [
    new User(1, "Alice", "alice@gmail.com", true, "IE"),
    new User(2, "Bob", "alice@gmail.com", false, "FR"),
    new User(3, "Carol", "alice@gmail.com", true, "DE"),
    new User(4, "Dan", "alice@gmail.com", false, "IE"),
    new User(5, "Eve", "alice@gmail.com", true, "DE"),
    new User(6, "Fred", "fred@gmail.com", true, "FR")

  ]
}

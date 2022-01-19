import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-page',
  template: `
    <h2>User List</h2>

    <table>

      <tbody>
        <tr *ngFor="let user of userService.getUsers()">
          <td><a routerLink="{{ user.id }}"> {{ user.id }}</a></td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active ? 'Active' : 'Inactive' }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

}

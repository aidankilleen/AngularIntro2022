import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user',
  template: `

    <table>

      <tr><td>ID</td><td>{{ user.id }}</td></tr>
      <tr><td>Name</td><td>{{ user.name }}</td></tr>
      <tr><td>Email</td><td>{{ user.email }}</td></tr>
      <tr><td>Active</td><td>{{ user.active }}</td></tr>

    </table>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit(): void {
  }

}

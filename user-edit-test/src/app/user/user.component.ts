import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'user',
  template: `
  <div>
    <button (click)="editing = !editing">Edit</button>
    <table>
      <tr>
        <td>ID</td><td>{{ user.id }}</td>
      </tr>
      <tr>
        <td>Name</td><td *ngIf="!editing">{{ user.name }}</td>
                     <td *ngIf="editing"><input [(ngModel)]="user.name"></td>
      </tr>
      <tr>
        <td>Email</td><td *ngIf="!editing">{{ user.email }}</td>
                      <td *ngIf="editing"><input [(ngModel)]="user.email"></td>
      </tr>
      <tr>
        <td>Active</td><td *ngIf="!editing">{{ user.active ? 'Yes' : 'No' }}</td>
                       <td *ngIf="editing"><input type="checkbox" [(ngModel)]="user.active"></td>
      </tr>
    </table>
  </div>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

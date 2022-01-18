import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'user',
  template: `
  <div>
    <button *ngIf="!editing" (click)="onEdit()">Edit</button>
    <button *ngIf="editing" (click)="onSave()">Save</button>
    <button *ngIf="editing" (click)="onCancel()">Cancel</button>
    <table>
      <tr>
        <td>ID</td><td>{{ user.id }}</td>
      </tr>
      <tr>
        <td>Name</td><td *ngIf="!editing">{{ user.name }}</td>
                     <td *ngIf="editing"><input [(ngModel)]="editingUser.name"></td>
      </tr>
      <tr>
        <td>Email</td><td *ngIf="!editing">{{ user.email }}</td>
                      <td *ngIf="editing"><input [(ngModel)]="editingUser.email"></td>
      </tr>
      <tr>
        <td>Active</td><td *ngIf="!editing">{{ user.active ? 'Yes' : 'No' }}</td>
                       <td *ngIf="editing"><input type="checkbox" [(ngModel)]="editingUser.active"></td>
      </tr>
    </table>
    User: {{ user | json }}<br>
    EditingUser: {{ editingUser | json }}
    <hr>
  </div>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() saved = new EventEmitter();

  editingUser: User;

  editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    this.editingUser = new User(this.user.id, 
      this.user.name, 
      this.user.email, 
      this.user.active);
    this.editing = true;
  }
  onSave() {
    this.user = this.editingUser;
    this.editing = false;
    this.saved.emit(this.user);
  }

  onCancel() {
    this.editing = false;
  }

}

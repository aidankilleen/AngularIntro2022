import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserHttpService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <div class="container">
      <div class="left">
        <select size="10" (change)="onChange()" [(ngModel)] = "selectedId">
          <option *ngFor="let user of users"
            [value]="user.id"
          >
            {{ user.name }}
          </option>
        </select>

        <button (click)="onDelete()">Delete</button>
      </div>
      <div class="right">
          <user 
            *ngIf="selectedId != 0" 
            [user]="selectedUser"
            (saved)="onSaved($event)">
          </user>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http user service test';
  users: User[];
  selectedId: number = 0;
  selectedUser: User;

  constructor(public userService: UserHttpService) {
  }
  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  onChange() {
    // get the details for the selected user
    this.userService.getUser(this.selectedId)
      .subscribe(user => this.selectedUser = user);
  }

  onSaved(updatedUser: User) {

    //this.userService.updateUser(updatedUser);
  }
  onDelete() {
    this.userService.deleteUser(this.selectedId)
      .subscribe(() => { 
        let index = this.users.findIndex(user => user.id == this.selectedId);
        this.users.splice(index, 1);
        if (this.users.length == 0) {
          this.selectedId = 0;
        } else {
          this.selectedId = this.users[0].id;
          this.onChange();
        }
      });
  }
}

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
    </div>

    <button (click)="onAdd()">New User</button>
    <user 
      *ngIf="adding"
      [user]="newUser"
      (saved)="onAddUserSaved($event)"
      [editing]="adding"
    >
    </user>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http user service test';
  adding = false;
  newUser: User;
  users: User[];
  selectedId: number = 0;
  selectedUser: User;

  onAdd() {
    this.adding = true;
    this.newUser = new User(0, "", "", false);
  }

  onAddUserSaved(userToAdd: User) {

    this.userService.addUser(userToAdd)
      .subscribe(addedUser => {
        this.users.push(addedUser);
        this.adding = false;
        this.selectedUser = addedUser;
        this.selectedId = addedUser.id;
        //alert(JSON.stringify(addedUser));
      });

  }


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

    this.userService.updateUser(updatedUser)
      .subscribe(updatedUser => {

        let index = this.users.findIndex(user=>user.id == updatedUser.id);
        this.users.splice(index, 1, updatedUser);
      });
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

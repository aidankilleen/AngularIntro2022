import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    <div class="container">
      <div class="left">
        <select size="10" [(ngModel)] = "selectedId">
          <option *ngFor="let user of userService.getUsers()"
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
            [user]="userService.getUser(selectedId)"
            (saved)="onSaved($event)">
          </user>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Service Test';
  selectedId: number = 0;

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.selectedId = this.userService.getUsers().length == 0 ? 0 :
                      this.userService.getUsers()[0].id;
  }

  onSaved(updatedUser: User) {

    this.userService.updateUser(updatedUser);
  }
  onDelete() {
    this.userService.deleteUser(this.selectedId);
    this.selectedId = this.userService.getUsers().length == 0 ? 0 :
                      this.userService.getUsers()[0].id;
  }


}

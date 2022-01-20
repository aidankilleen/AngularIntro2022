import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { subscribeOn } from 'rxjs';
import { UserHttpService } from '../user-http.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  users: User[];
  userToEdit: User;
  userDialogTitle = "Add User";

  open(content: any) {
    this.modalService.open(content);
  }

  onDelete(modalContent: any, userToDelete: User) {
    this.modalService.open(modalContent)
      .result.then(message=>{
        if (message=="ok") {
          this.userService.deleteUser(userToDelete.id)
          .subscribe(()=>{
            let index = this.users.findIndex(user=>user.id == userToDelete.id);
            this.users.splice(index, 1);
          })
        }
      });
  }

  onAdd(content: any) {
    this.userToEdit = new User(0, "", "", false);
    this.userDialogTitle = "Add User";
    this.modalService.open(content)
      .result.then(message => {
        if (message == "save") {

          this.userService.addUser(this.userToEdit)
            .subscribe(addedUser => {
              this.users.push(addedUser);
            });
        }
      });
  }
  onEdit(content: any, user: User) {
    this.userToEdit = new User(user.id, user.name, user.email, user.active);
    this.userDialogTitle = "Edit User";
    this.modalService.open(content)
    .result.then(message => {
      if (message == "save") {
        // save the user to the http service
        this.userService.updateUser(this.userToEdit)
          .subscribe(updatedUser => {

            let index = this.users.findIndex(user=>user.id == updatedUser.id);
            this.users.splice(index, 1, updatedUser);
          });
      }
    }, ()=>{})
  }

  constructor(public userService: UserHttpService, 
              public modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users) => this.users = users);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { subscribeOn } from 'rxjs';
import { UserHttpService } from '../user-http.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list-page',
  template: `
    <table class="table">
      <thead>
        <tr><th>ID</th><th>Name</th><th>Email</th><th>Active</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active ? 'Active' : 'Inactive' }}</td>
          <td>
            <button class="btn btn-success" (click)="onEdit(content, user)">Edit</button>
            <button class="btn btn-danger" (click)="onDelete(user)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Sample Modal</h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label>Name</label>
        <input class="form-control" [(ngModel)]="userToEdit.name">

        <label>Email</label>
        <input class="form-control" [(ngModel)]="userToEdit.email">

        <div class="form-check">
          <input class="form-check-input" 
              type="checkbox" 
              [(ngModel)]="userToEdit.active">
          <label class="form-check-label" for="defaultCheck1">
            Active
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary"
          (click)="modal.close('save')"
        >Save</button>
        <button class="btn btn-secondary"
          (click)="modal.dismiss('cancel')"
        >Cancel</button>
      </div>
    </ng-template>

  `,
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  users: User[];
  userToEdit: User;

  open(content: any) {
    this.modalService.open(content);
  }

  onDelete(userToDelete: User) {
    if (confirm("Are you sure?")) {
      this.userService.deleteUser(userToDelete.id)
        .subscribe(()=>{
          let index = this.users.findIndex(user=>user.id == userToDelete.id);
          this.users.splice(index, 1);
        })
    }
  }
  onEdit(content: any, user: User) {
    this.userToEdit = new User(user.id, user.name, user.email, user.active);
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

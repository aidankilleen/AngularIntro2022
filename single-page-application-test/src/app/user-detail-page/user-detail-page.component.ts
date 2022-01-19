import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail-page',
  template: `
    <h2>User Detail</h2>

    <user [user]="user"></user>

  `,
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {

  userId: number;
  user: User;

  constructor(public route: ActivatedRoute, 
              public userService: UserService) { 
    this.route.params
      .subscribe(params => {
        this.userId = params['id'];
        this.user = this.userService.getUser(this.userId);
      });
  }
  ngOnInit(): void {
  }
}

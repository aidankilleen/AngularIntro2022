import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    <div>
      <a [routerLinkActive]= "['activeLink']" routerLink = "/home">Home</a> |
      <a [routerLinkActive]= "['activeLink']" routerLink = "/about">About</a> |
      <a [routerLinkActive]= "['activeLink']" routerLink = "/contact">Contact</a> |
      <a [routerLinkActive]= "['activeLink']" routerLink = "/users">User List</a> |

    </div>
    <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'single page application test';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    <div>
      <a routerLink = "/home">Home</a> |
      <a routerLink = "/about">About</a> |
      <a routerLink = "/contact">Contact</a> 
    </div>
    <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'single page application test';
}

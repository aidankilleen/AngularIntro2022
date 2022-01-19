import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <bootstrap-navbar></bootstrap-navbar>
    <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'single page application test';
}

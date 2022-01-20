import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <bootstrap-navbar></bootstrap-navbar>
    <hr>
    <router-outlet></router-outlet>

  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-bootstrap-test';
}

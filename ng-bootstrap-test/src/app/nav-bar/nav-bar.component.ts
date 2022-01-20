import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <a routerLink="home">Home</a> |
    <a routerLink="alerts">Alerts</a> |
    <a routerLink="carousel">Carousel</a>

  
  `,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

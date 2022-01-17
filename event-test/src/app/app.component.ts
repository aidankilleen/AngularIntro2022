import { Component } from '@angular/core';
import { AccordionElement } from './accordion-element.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    <accordion 
      [accordionElements]="accordionElements">
    </accordion>

    <hr>
    
    {{ price | currency:'EUR' }}
    <hr>
    {{ today | date : 'yyyy-MM-dd' }}
    <hr>
    {{ score | percent }}
    <hr>
    {{ accordionElements | json }}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom Event Test';
  price: number = 1.23456;
  today: Date = new Date();
  score: number = 0.76;

  accordionElements = [
    new AccordionElement("this is item 1", "this is item 1", true), 
    new AccordionElement("this is item 2", "this is item 2"), 
    new AccordionElement("this is item 3", "this is item 3"), 
    new AccordionElement("this is item 4", "this is item 4") 
  ];

  newsElements = [
    new AccordionElement("News 1", "this is news 1", false), 
    new AccordionElement("News 2", "this is news 2", false), 
    new AccordionElement("News 3", "this is news 3", true)
  ];



}

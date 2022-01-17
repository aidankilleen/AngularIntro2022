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
    
    <accordion
      [accordionElements]="newsElements"
    >
    </accordion>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom Event Test';

  accordionElements = [
    new AccordionElement("Item 1", "this is item 1", true), 
    new AccordionElement("Item 2", "this is item 2", false), 
    new AccordionElement("Item 3", "this is item 3", false), 
    new AccordionElement("Item 4", "this is item 4", false) 
  ];

  newsElements = [
    new AccordionElement("News 1", "this is news 1", false), 
    new AccordionElement("News 2", "this is news 2", false), 
    new AccordionElement("News 3", "this is news 3", true)
  ]



}

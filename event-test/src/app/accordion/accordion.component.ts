import { Component, Input, OnInit } from '@angular/core';
import { AccordionElement } from '../accordion-element.model';

@Component({
  selector: 'accordion',
  template: `
    <div>
      <accordion-element 
        *ngFor = "let accordionElement of accordionElements"
        [accordionElement] = "accordionElement"
        (expanded)="onExpanded($event)"
      >
      </accordion-element>
    </div>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() accordionElements:AccordionElement[];

  onExpanded(expandedElement: AccordionElement) {
    //loop through the accordionElements
    this.accordionElements.forEach(element => {
      if (element != expandedElement) {
        // close all of them except for the one that 
        // was just expanded
        element.expanded = false;
      }
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}

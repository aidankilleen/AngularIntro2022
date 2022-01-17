import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionElement } from '../accordion-element.model';

@Component({
  selector: 'accordion-element',
  template: `
  <div>
    <h1 (click)="onClick()">{{accordionElement.title}}</h1>
    <p *ngIf="accordionElement.expanded">
      {{ accordionElement.text }}
    </p>
  </div>
  `,
  styleUrls: ['./accordion-element.component.css']
})
export class AccordionElementComponent implements OnInit {

  @Input() accordionElement: AccordionElement;
  @Output() expanded = new EventEmitter();

  onClick() {
    this.accordionElement.expanded = !this.accordionElement.expanded;  
    this.expanded.emit(this.accordionElement);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

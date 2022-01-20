import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[formatText]'
})
export class FormatTextDirective {

  @Input() formatText: string;
  constructor(private element: ElementRef) { 
    console.log("formatText directive...");
  }

  @HostListener('focus') onFocus() {
    console.log("focus...");
  }

  @HostListener('blur') onBlur() {
    console.log(this.formatText);
    let value = this.element.nativeElement.value;

    value = this.formatText == "uppercase" ? 
      value.toUpperCase() : value.toLowerCase();

    this.element.nativeElement.value = value;
  }
}

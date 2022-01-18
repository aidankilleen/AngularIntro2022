import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'extendable-select',
  templateUrl: './extendable-select.component.html',
  styleUrls: ['./extendable-select.component.css']
})
export class ExtendableSelectComponent implements OnInit {

  @Input() list: string[];
  @Input() value: string;
  @Output() valueChange = new EventEmitter();

  adding = false;
  newItem: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.valueChange.emit(this.value);
  }

  onSave() {
    this.list.push(this.newItem);
    this.value = this.newItem;
    this.newItem = "";
    this.adding = false;
    this.valueChange.emit(this.value);
  }

  onCancel() {
    this.newItem = "";
    this.adding = false;
  }
}

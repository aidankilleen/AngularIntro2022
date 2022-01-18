import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'extendable-select',
  templateUrl: './extendable-select.component.html',
  styleUrls: ['./extendable-select.component.css']
})
export class ExtendableSelectComponent implements OnInit {

  @Input() list: string[];
  @Output() listChange = new EventEmitter();
  innerList: string[];


  @Input() value: string;
  @Output() valueChange = new EventEmitter();

  adding = false;
  newItem: string = "";

  constructor() { }

  ngOnInit(): void {
    this.innerList = this.list.map(item => item);;
  }

  onChange() {
    this.valueChange.emit(this.value);
  }

  onSave() {
    this.innerList.push(this.newItem);
    this.listChange.emit(this.innerList);
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

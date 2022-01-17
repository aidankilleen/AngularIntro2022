import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() title = "default title";
  @Input() text = "default message";

  constructor() { }

  ngOnInit(): void {
  }

}

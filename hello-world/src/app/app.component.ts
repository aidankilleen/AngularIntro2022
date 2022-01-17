import { Component } from '@angular/core';
import { Message } from './message/message.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    <ul>
      <li *ngFor="let item of list">{{ item }}</li>
    </ul>

    <message 
      *ngFor="let message of messages" 
      [message]="message">
    </message>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World Angular App';
  list = ['Alice', 'Bob', 'Carol', 'Dan'];

  messages = [
    new Message("Test Message 1", "this is test message 1"), 
    new Message("Test Message 2", "this is test message 2"), 
    new Message("Test Message 3", "this is test message 3"), 
    new Message("Test Message 4", "this is test message 4"), 
    new Message("Test Message 5", "this is test message 5")
  ];


}

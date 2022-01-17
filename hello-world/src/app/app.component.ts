import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title}}</h1>

    <message 
      [title] = "message.title" 
      [text] = "message.text">
    </message>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World Angular App';

  message = {
    title: "Test Message", 
    text: "this is a test message"
  }



}

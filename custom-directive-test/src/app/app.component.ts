import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <input formatText="uppercase"><br>
    <input formatText="lowercase"><br>

    <button (click)="onClick()">Test</button>

    <input type="date" [ngModel]="date | date:'yyyy-MM-dd'" (ngModelChange)="onChange($event)">

    {{ date }}
    {{ weekNum }}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom directive test';

  date: Date = new Date();

  weekNum: number;

  onChange(date: Date) {
    this.date = new Date(date);
  }
  getWeekNumber(): number {

    console.log(this.date);

    console.log("getWeekNumber()");
    let jan1 = new Date(this.date.getFullYear(), 0, 1);

    this.weekNum = Math.ceil((((this.date.getMilliseconds() - jan1.getMilliseconds()) / 86400000) + this.date.getDay()+1)/7);

    return this.weekNum;
  }

  onClick() {
    let dt = new Date();
    this.weekNum = this.getWeekNumber();
    
  }

}

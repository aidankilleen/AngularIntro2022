import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    <extendable-select [(list)]="team"
      [(value)]="selected" >
    </extendable-select>
    <hr>
    {{ selected }}<br>
    {{ team | json }}

    <hr>
    <extendable-select [list]="customers"
      [(value)]="selectedCustomer">
    </extendable-select>
    {{selectedCustomer}}<br>
    {{ customers | json }}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Extendable Select';
  adding = false;

  team = ["Alice", "Bob", "Carol", "Dan"];

  customers = ["Zoltar", "Yvonne", "Xavier", "Wendy", "Vera"];
  selectedCustomer: string;

  selected: string = "selected value";

}

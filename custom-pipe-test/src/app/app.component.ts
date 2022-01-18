import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    {{ price | currency:'EUR' }}

    <hr>

    <button (click)="showSummary = !showSummary">Show All</button>

    <input 
      type="range" 
      min="0" 
      [max]="sampleText.length"
      [(ngModel)] = "length">
          
    <p *ngIf="showSummary">
      {{ sampleText | summary:length }}
    </p>

    <p *ngIf="!showSummary">
      {{ sampleText }}
    </p>

    {{ length }}


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSummary = true;
  title = 'custom pipe test';
  length = 20;

  sampleText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium excepturi non similique, deserunt cum velit officiis facilis vel molestiae illum inventore optio autem iste rerum enim perferendis nemo fuga eaque.';

  price = 1.23456;


}

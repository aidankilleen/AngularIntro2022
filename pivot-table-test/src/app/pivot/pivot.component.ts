import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pivot',
  template: `
    Pivot Table
    
    <button (click)="pivot()">Refresh</button>

    <table>
      <thead>
        <tr>
          <th></th>
          <th *ngFor = "let columnHeading of columnList">
              {{ columnHeading | titlecase }}
          </th>
        </tr>

      </thead>
      <tbody>
        <tr *ngFor = "let rowName of rowList">
          <td>{{ rowName | titlecase }}</td>
        </tr>
      </tbody>

    </table>


  `,
  styleUrls: ['./pivot.component.css']
})
export class PivotComponent implements OnInit {

  @Input() data: any[];
  @Input("row") rowFieldName: string;
  @Input("column") columnFieldName: string;
  @Input("value") valueFieldName: string;

  columnList: string[] = [];
  rowList: string[] = [];
  pivot() {
    console.log("pivot called");
    if (!this.data) {
      return;
    }
    console.log(this.data);
    // get distinct list of row and column entries
    let result = this.data.reduce((runningTotal, item) => {
      runningTotal.rows.add(item[this.rowFieldName]);
      runningTotal.columns.add(item[this.columnFieldName]);
      return runningTotal;
    }, { rows: new Set(), columns: new Set()});
    console.log(result);
    this.rowList = Array.from(result.rows);
    this.columnList = Array.from(result.columns);
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    this.pivot();
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pivot',
  templateUrl: './pivot.component.html',
  styleUrls: ['./pivot.component.css']
})
export class PivotComponent implements OnInit {

  @Input() data: any[];
  @Input("row") rowFieldName: string;
  @Input("column") columnFieldName: string;
  @Input("value") valueFieldName: string;

  columnList: string[] = [];
  rowList: string[] = [];

  pivotResult: any;

  pivot() {
    console.log("pivot called");
    if (!this.data) {
      return;
    }
    
    // get distinct list of row and column entries
    let result = this.data.reduce((runningTotal, item) => {
      runningTotal.rows.add(item[this.rowFieldName]);
      runningTotal.columns.add(item[this.columnFieldName]);
      return runningTotal;
    }, { rows: new Set(), columns: new Set()});
    this.rowList = Array.from(result.rows);
    this.columnList = Array.from(result.columns);

    // the the totals
    this.pivotResult = this.data.reduce((runningTotal, item) => {

      let row = item[this.rowFieldName];
      let column = item[this.columnFieldName];
      let value = item[this.valueFieldName];

      if (runningTotal[row] == null) {
        runningTotal[row] = {};
      }

      if (runningTotal[row][column] == null) {
        runningTotal[row][column] = 0;
      }

      runningTotal[row][column] += value;

      return runningTotal;
    }, {});

    let n = "Aidan";
    console.log(this.pivotResult[n]);


  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    this.pivot();
  }

}

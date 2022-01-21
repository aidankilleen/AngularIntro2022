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
  rowTotals: any;
  columnTotals: any;
  grandTotal: number;

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

    this.rowTotals = {};
    this.columnTotals = {};
    this.grandTotal = 0;

    // the the totals
    this.pivotResult = this.data.reduce((runningTotal, item) => {

      let row = item[this.rowFieldName];
      let column = item[this.columnFieldName];
      let value = item[this.valueFieldName];

      if (runningTotal[row] == null) {
        runningTotal[row] = {};
        this.rowTotals[row] = 0;
      }

      if (this.columnTotals[column] == null) {
        this.columnTotals[column] = 0;
      }

      if (runningTotal[row][column] == null) {
        runningTotal[row][column] = 0;
      }

      runningTotal[row][column] += value;
      this.rowTotals[row] += value;
      this.columnTotals[column] += value;
      this.grandTotal += value;

      return runningTotal;
    }, {});
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    this.pivot();
  }

}

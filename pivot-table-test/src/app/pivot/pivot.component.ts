import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pivot',
  templateUrl: './pivot.component.html',
  styleUrls: ['./pivot.component.css']
})
export class PivotComponent implements OnInit {

  @Input() data: any[];
  @Input("row") rowFieldName: string;
  @Input() rowType: string = "string";
  @Input("column") columnFieldName: string;
  @Input("value") valueFieldName: string;
  @Input() sorted: boolean = false;
  @Input() ascending: boolean = true;

  mappedData: any[];

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
    
    console.log(this.rowType);

    if (this.rowType == "date") {
      
      // map date -> javascript date
      // add month column
      this.mappedData = this.data.map(item => {

        item.jsDate = new Date(item.date);
        item.month = item.jsDate.getMonth() + 1;
        return item;
      });

      this.rowFieldName = "month";

    } else {
      // TBD - other mapping might be required...
      this.mappedData = this.data;
    }



    // get distinct list of row and column entries
    let result = this.mappedData.reduce((runningTotal, item) => {
      runningTotal.rows.add(item[this.rowFieldName]);
      runningTotal.columns.add(item[this.columnFieldName]);
      return runningTotal;
    }, { rows: new Set(), columns: new Set()});

    this.rowList = Array.from(result.rows);

    if (this.sorted) {
      if (this.ascending) {
        if (this.rowType == 'date') {
          this.rowList.sort((a:any, b:any) => a - b);
        } else {
          this.rowList.sort((a, b) => a.localeCompare(b));
        }
      } else {
        if (this.rowType == 'date') {
          this.rowList.sort((a:any, b:any) => b - a);
        } else {
          this.rowList.sort((a, b) => b.localeCompare(a));
        }
      }
    }

    this.columnList = Array.from(result.columns);

    if (this.sorted) {
      this.columnList.sort((a, b) => a.localeCompare(b));
    }

    this.rowTotals = {};
    this.columnTotals = {};
    this.grandTotal = 0;

    // the the totals
    this.pivotResult = this.mappedData.reduce((runningTotal, item) => {

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

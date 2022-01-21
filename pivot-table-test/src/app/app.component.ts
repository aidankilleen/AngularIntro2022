import { Component, OnInit } from '@angular/core';
import { TransactionHttpService } from './transaction-http.service';
import { Transaction } from './transaction.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase}}</h1>

    <input type="checkbox" [(ngModel)]="sorted">Sorted |
    <input type="checkbox" [(ngModel)]="ascending">Ascending
    <hr>
    <pivot 
      [data]="transactions" 
      row="date"
      rowType="date" 
      column="colour" 
      value="quantity"
      [sorted]="sorted"
      [ascending]="ascending">
    </pivot>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sorted: false;
  ascending: false;
  transactions: Transaction[];

  constructor(public transactionService: TransactionHttpService) {
  }

  ngOnInit(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => this.transactions = transactions);
  }
  title = 'pivot table test';
}

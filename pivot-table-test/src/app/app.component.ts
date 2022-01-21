import { Component, OnInit } from '@angular/core';
import { TransactionHttpService } from './transaction-http.service';
import { Transaction } from './transaction.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase}}</h1>


    <pivot 
      [data]="transactions" 
      row="user" 
      column="colour" 
      value="quantity">
    </pivot>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  transactions: Transaction[];

  constructor(public transactionService: TransactionHttpService) {
  }

  ngOnInit(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => this.transactions = transactions);
  }
  title = 'pivot table test';
}

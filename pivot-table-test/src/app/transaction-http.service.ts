import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionHttpService {

  url = "http://localhost:3000/transactions";

  constructor(public httpClient: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.httpClient.get(this.url) as Observable<Transaction[]>;
  }
}

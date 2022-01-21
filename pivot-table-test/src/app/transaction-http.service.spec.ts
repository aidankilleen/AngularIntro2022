import { TestBed } from '@angular/core/testing';

import { TransactionHttpService } from './transaction-http.service';

describe('TransactionHttpService', () => {
  let service: TransactionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

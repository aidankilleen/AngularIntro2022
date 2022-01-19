import { TestBed } from '@angular/core/testing';

import { UserHttpService } from './user.service';

describe('UserService', () => {
  let service: UserHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

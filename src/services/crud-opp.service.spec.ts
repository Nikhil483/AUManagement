import { TestBed } from '@angular/core/testing';

import { CrudOppService } from './crud-opp.service';

describe('CrudOppService', () => {
  let service: CrudOppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudOppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

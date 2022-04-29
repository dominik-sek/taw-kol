import { TestBed } from '@angular/core/testing';

import { DSDataService } from './ds-data.service';

describe('DSDataService', () => {
  let service: DSDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DSDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

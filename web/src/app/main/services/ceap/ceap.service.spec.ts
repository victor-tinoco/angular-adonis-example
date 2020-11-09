import { TestBed } from '@angular/core/testing';

import { CeapService } from './ceap.service';

describe('CeapService', () => {
  let service: CeapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

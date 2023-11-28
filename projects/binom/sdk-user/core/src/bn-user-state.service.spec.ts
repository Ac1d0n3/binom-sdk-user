import { TestBed } from '@angular/core/testing';

import { BnUserStateService } from './bn-user-state.service';

describe('BnUserStateService', () => {
  let service: BnUserStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnUserStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
